import { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * FlowGradient
 *
 * A continuously flowing mesh-gradient rendered on a full-screen WebGL quad
 * (same approach as wearclair.com's hero canvas). Domain-warped fbm noise
 * animates the coral→mauve→teal→navy palette so the field is always moving;
 * scroll position nudges the flow on top. Respects prefers-reduced-motion.
 */
export interface FlowGradientProps {
  className?: string;
}

export function FlowGradient({
  className = "absolute inset-0 w-full h-full",
}: FlowGradientProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uRes: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      // Soft, light pastel orange→blue, matched to the title slide (airy, not saturated)
      uCoral: { value: new THREE.Color("#f4c8b0") }, // lighter peach / apricot
      uMauve: { value: new THREE.Color("#e1bcb9") }, // lighter dusty rose transition
      uTeal: { value: new THREE.Color("#a3b8c9") }, // lighter steel blue-grey
      uNavy: { value: new THREE.Color("#7b9cb8") }, // lighter soft steel blue
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform float uScroll;
        uniform vec2 uRes;
        uniform vec3 uCoral, uMauve, uTeal, uNavy;

        vec2 hash(vec2 p) {
          p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
        }
        float noise(vec2 p) {
          const float K1 = 0.366025404;
          const float K2 = 0.211324865;
          vec2 i = floor(p + (p.x + p.y) * K1);
          vec2 a = p - i + (i.x + i.y) * K2;
          float m = step(a.y, a.x);
          vec2 o = vec2(m, 1.0 - m);
          vec2 b = a - o + K2;
          vec2 c = a - 1.0 + 2.0 * K2;
          vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
          vec3 n = h * h * h * h * vec3(
            dot(a, hash(i + 0.0)),
            dot(b, hash(i + o)),
            dot(c, hash(i + 1.0))
          );
          return dot(n, vec3(70.0));
        }
        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 5; i++) {
            v += a * noise(p);
            p *= 2.0;
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec2 uv = vUv;
          uv.x *= uRes.x / uRes.y; // aspect-correct
          float t = uTime * 0.12;

          // domain warp — the source of the flowing motion (gentler scale = smoother blobs)
          vec2 q = vec2(
            fbm(uv * 0.9 + vec2(0.0, t)),
            fbm(uv * 0.9 + vec2(5.2, 1.3) + t)
          );
          vec2 r = vec2(
            fbm(uv * 0.9 + 1.6 * q + vec2(1.7, 9.2) + 0.15 * t),
            fbm(uv * 0.9 + 1.6 * q + vec2(8.3, 2.8) - 0.12 * t)
          );
          float f = fbm(uv * 0.9 + 1.6 * r + t * 0.2);
          f = f * 0.5 + 0.5;

          // diagonal base ramp (coral lower-left -> teal upper-right) + softer flow + scroll
          float g = clamp(
            vUv.x * 0.55 + (1.0 - vUv.y) * 0.45 + (f - 0.5) * 0.5 + uScroll * 0.5,
            0.0, 1.0
          );

          vec3 col;
          if (g < 0.33) col = mix(uCoral, uMauve, g / 0.33);
          else if (g < 0.66) col = mix(uMauve, uTeal, (g - 0.33) / 0.33);
          else col = mix(uTeal, uNavy, (g - 0.66) / 0.34);

          col += r.x * 0.04; // subtle depth variation
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let targetScroll = 0;
    const onScroll = () => {
      const max = window.innerHeight || 1;
      targetScroll = Math.min(Math.max(window.scrollY / max, 0), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let frameId = 0;
    const animate = (t: number) => {
      uniforms.uTime.value = reduceMotion ? 0 : t * 0.001;
      // ease scroll toward target for a smooth follow
      uniforms.uScroll.value += (targetScroll - uniforms.uScroll.value) * 0.08;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate(0);

    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      uniforms.uRes.value.set(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}

export default FlowGradient;
