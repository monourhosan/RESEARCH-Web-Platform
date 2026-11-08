interface LogoProps {
  variant?: "full" | "emblem-only" | "light" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EmblemSvg({ size = 40, light = false }: { size?: number; light?: boolean }) {
  return <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" className="brand-mark">
    <rect width="48" height="48" rx="10" fill={light ? "#173c54" : "#102b43"} />
    <path d="M11 33V14l13 12" stroke="#fff" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M37 33V14L24 26" stroke="#65d2ca" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>;
}

export default function Logo({ variant = "full", size = "md", className = "" }: LogoProps) {
  const light = variant === "light";
  return <span className={`brand-logo brand-logo-${size}${light ? " brand-logo-light" : ""} ${className}`}>
    <EmblemSvg size={size === "sm" ? 32 : size === "lg" ? 48 : 38} light={light} />
    {variant !== "emblem-only" && <span className="brand-wordmark"><span className="brand-name">Mirror Metrics</span><span className="brand-descriptor">Research Ltd</span></span>}
  </span>;
}
