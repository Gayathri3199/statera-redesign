import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal
 *
 * Scroll-triggered fade/slide-up wrapper (IntersectionObserver). Add an
 * optional `delay` (ms) to stagger siblings. Respects prefers-reduced-motion
 * via the .reveal CSS in index.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  fade = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  fade?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${fade ? "fade-in" : "reveal"} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
