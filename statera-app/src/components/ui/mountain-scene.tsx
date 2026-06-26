import { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * GenerativeMountainScene
 *
 * Soft, drifting bokeh light field rendered with Three.js — no terrain mesh.
 * Floating out-of-focus circles of light over the page's coral→teal→navy
 * gradient, matching the Statera title slide. No image assets required.
 */
export interface GenerativeMountainSceneProps {
  className?: string;
}

export function GenerativeMountainScene({
  className = "absolute inset-0 w-full h-full z-0",
}: GenerativeMountainSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // SCENE SETUP
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // ---- BOKEH PARTICLES ----------------------------------------------
    // Soft circles of light built from a radial-gradient sprite.
    const makeBokehSprite = () => {
      const size = 64;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
      );
      g.addColorStop(0, "rgba(255,255,255,0.9)");
      g.addColorStop(0.4, "rgba(255,255,255,0.35)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      return new THREE.CanvasTexture(c);
    };

    const bokehTexture = makeBokehSprite();
    const PARTICLE_COUNT = 240;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const drift = new Float32Array(PARTICLE_COUNT); // per-particle rise speed
    const baseX = new Float32Array(PARTICLE_COUNT); // anchor for horizontal wander
    const phase = new Float32Array(PARTICLE_COUNT); // per-particle motion offset
    // deterministic pseudo-random (no Math.random — keeps it reproducible)
    const rand = (i: number, salt: number) => {
      const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
      return v - Math.floor(v);
    };
    const SPREAD_X = 14;
    const SPREAD_Y = 9;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      baseX[i] = (rand(i, 1) - 0.5) * SPREAD_X;
      positions[i * 3] = baseX[i]; // x
      positions[i * 3 + 1] = (rand(i, 2) - 0.5) * SPREAD_Y; // y
      positions[i * 3 + 2] = (rand(i, 3) - 0.5) * 6; // z (depth -> size variance)
      drift[i] = rand(i, 5) * 0.6 + 0.25;
      phase[i] = rand(i, 6) * 6.283; // 0..2π
    }
    const bokehGeometry = new THREE.BufferGeometry();
    bokehGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const bokehMaterial = new THREE.PointsMaterial({
      map: bokehTexture,
      size: 0.18,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.75,
    });
    const bokeh = new THREE.Points(bokehGeometry, bokehMaterial);
    scene.add(bokeh);

    const TOP = SPREAD_Y / 2 + 0.5;
    const BOTTOM = -SPREAD_Y / 2 - 0.5;

    let frameId = 0;
    const animate = (t: number) => {
      // particles rise and wander; wrap back to the bottom when off-screen
      const pos = bokehGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        let y = pos.getY(i) + drift[i] * 0.006; // visible upward rise
        if (y > TOP) y = BOTTOM; // recycle to the bottom
        pos.setY(i, y);
        // horizontal wander — each particle sways on its own phase/speed
        const sway = Math.sin(t * 0.0006 * drift[i] + phase[i]) * 0.6;
        pos.setX(i, baseX[i] + sway);
      }
      pos.needsUpdate = true;
      // subtle whole-field twinkle so the light feels alive
      bokehMaterial.opacity = 0.6 + Math.sin(t * 0.001) * 0.18;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate(0);

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    // gentle cursor parallax on the whole light field
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      bokeh.position.x = x * 0.5;
      bokeh.position.y = y * 0.4;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      bokehGeometry.dispose();
      bokehMaterial.dispose();
      bokehTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}

export default GenerativeMountainScene;
