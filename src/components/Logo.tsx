import React from "react";
import Image from "next/image";
import defaultEmblem from "../../public/logo.png";
import accentEmblem from "../../public/logo-accent-emblem.png";

interface LogoProps {
  variant?: "full" | "emblem-only" | "light" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  useImage?: boolean;
  emblemSrc?: "default" | "accent";
}

export function EmblemSvg({
  size = 42,
  className = "",
  type = "default",
}: {
  size?: number;
  className?: string;
  type?: "default" | "accent";
}) {
  const isAccent = type === "accent";
  const leftColor = isAccent ? "#F25244" : "#2B5B9E";
  const rightColor = isAccent ? "#27AE60" : "#1CA8B8";
  const eyeColor = isAccent ? "#F2B024" : "#0E2238";

  return (
    <svg
      width={size}
      height={(size * 26) / 42}
      viewBox="0 0 420 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Mirror Metrics Infinity Eye Emblem"
    >
      {/* Left Loop */}
      <path
        d="M130 10C63.73 10 10 63.73 10 130C10 196.27 63.73 250 130 250C180.24 250 223.27 219.06 241.13 175H215.8C199.8 203.88 167.36 224 130 224C78.09 224 36 181.91 36 130C36 78.09 78.09 36 130 36C167.36 36 199.8 56.12 215.8 85H241.13C223.27 40.94 180.24 10 130 10Z"
        fill={leftColor}
      />

      {/* Right Loop */}
      <path
        d="M290 10C239.76 10 196.73 40.94 178.87 85H204.2C220.2 56.12 252.64 36 290 36C341.91 36 384 78.09 384 130C384 181.91 341.91 224 290 224C252.64 224 220.2 203.88 204.2 175H178.87C196.73 219.06 239.76 250 290 250C356.27 250 410 196.27 410 130C410 63.73 356.27 10 290 10Z"
        fill={rightColor}
      />

      {/* Central junction block blend */}
      <rect x="208" y="85" width="4" height="90" fill={leftColor} opacity="0.3" />

      {/* Left Eye White Base & Iris/Pupil */}
      <circle cx="130" cy="130" r="68" fill="#FFFFFF" />
      <circle cx="138" cy="130" r="50" fill={eyeColor} />
      {/* Left Eye Reflection Highlight */}
      <circle cx="156" cy="112" r="16" fill="#FFFFFF" />
      {isAccent && <circle cx="130" cy="148" r="7" fill="#FFFFFF" />}

      {/* Right Eye White Base & Iris/Pupil */}
      <circle cx="290" cy="130" r="68" fill="#FFFFFF" />
      <circle cx="298" cy="130" r="50" fill={eyeColor} />
      {/* Right Eye Reflection Highlight */}
      <circle cx="316" cy="112" r="16" fill="#FFFFFF" />
      {isAccent && <circle cx="290" cy="148" r="7" fill="#FFFFFF" />}
    </svg>
  );
}

export default function Logo({
  variant = "full",
  size = "md",
  className = "",
  useImage = true,
  emblemSrc = variant === "light" || variant === "accent" ? "accent" : "default",
}: LogoProps) {
  const emblemSizes = {
    sm: { width: 34, height: 21, text: "text-base", sub: "text-[9px]" },
    md: { width: 44, height: 27, text: "text-lg", sub: "text-[10px]" },
    lg: { width: 56, height: 35, text: "text-2xl", sub: "text-xs" },
  };

  const currentSize = emblemSizes[size];
  const activeEmblemImage = emblemSrc === "accent" ? accentEmblem : defaultEmblem;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Scalable Emblem: High-Res PNG with transparent background */}
      <div className="relative shrink-0 flex items-center justify-center">
        {useImage ? (
          <Image
            src={activeEmblemImage}
            alt="Mirror Metrics RESEARCH LTD Emblem"
            sizes={`${currentSize.width * 1.25}px`}
            className="object-contain"
            style={{
              width: `${currentSize.width * 1.25}px`,
              height: "auto",
            }}
            loading="eager"
          />
        ) : (
          <EmblemSvg size={currentSize.width} type={emblemSrc} />
        )}
      </div>

      {variant !== "emblem-only" && (
        <div className="flex flex-col justify-center leading-none">
          {/* Primary Line: Mirror Metrics */}
          <span
            className={`font-semibold tracking-tight ${
              variant === "light" ? "text-[#edf4f0]" : "text-[#142c3d]"
            } leading-tight ${currentSize.text}`}
          >
            Mirror Metrics
          </span>

          {/* Secondary Line: RESEARCH LTD */}
          <span
            className={`uppercase font-medium tracking-[0.2em] ${
              variant === "light" ? "text-[#a7c0c1]" : "text-[#60707a]"
            } mt-0.5 ${currentSize.sub}`}
          >
            RESEARCH LTD
          </span>
        </div>
      )}
    </div>
  );
}
