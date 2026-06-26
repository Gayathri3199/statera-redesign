import logoUrl from "@/assets/statera-logo-white.png";

/**
 * StateraLogo — the official Statera Regulatory Consulting logo (background
 * knocked out to transparent, text recolored white) for use over the dark hero.
 */
export interface StateraLogoProps {
  className?: string;
}

export function StateraLogo({ className = "" }: StateraLogoProps) {
  return (
    <img
      src={logoUrl}
      alt="Statera Regulatory Consulting"
      className={`h-16 w-auto ${className}`}
    />
  );
}

export default StateraLogo;
