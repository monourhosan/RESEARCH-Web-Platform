import React from "react";

/**
 * Editorial Line-Art Illustrations with organic splashes of
 * Deep Blue (#2B5B9E) and Cyan/Teal (#1CA8B8).
 */

export function HeroResearcherIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-xl mx-auto select-none ${className}`}>
      {/* Background Organic Color Splashes (Brand Blue & Teal) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Deep Blue Organic Blob */}
        <div className="absolute top-4 left-10 w-72 h-72 bg-[#2B5B9E]/10 rounded-full blur-2xl transform -rotate-12" />
        {/* Metrics Teal Organic Splash */}
        <div className="absolute bottom-6 right-6 w-80 h-80 bg-[#1CA8B8]/15 rounded-[40%_60%_70%_30%] blur-3xl transform rotate-45" />
      </div>

      <svg
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xs"
        aria-label="Editorial illustration of researcher analyzing field data dashboards"
      >
        {/* Editorial Canvas Backdrop */}
        <rect x="20" y="20" width="600" height="440" rx="16" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        
        {/* Subtle grid lines */}
        <line x1="20" y1="90" x2="620" y2="90" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="20" y1="170" x2="620" y2="170" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="20" y1="250" x2="620" y2="250" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="20" y1="330" x2="620" y2="330" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="20" y1="410" x2="620" y2="410" stroke="#F3F4F6" strokeWidth="1" />

        <line x1="120" y1="20" x2="120" y2="460" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="220" y1="20" x2="220" y2="460" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="320" y1="20" x2="320" y2="460" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="420" y1="20" x2="420" y2="460" stroke="#F3F4F6" strokeWidth="1" />
        <line x1="520" y1="20" x2="520" y2="460" stroke="#F3F4F6" strokeWidth="1" />

        {/* Organic Accent Splashes behind the researcher and screens */}
        <path
          d="M320 80C420 60 480 120 500 210C520 300 440 370 360 380C280 390 220 340 210 260C200 180 220 100 320 80Z"
          fill="#1CA8B8"
          fillOpacity="0.12"
        />
        <path
          d="M160 140C240 110 310 160 300 240C290 320 200 350 140 310C80 270 90 190 160 140Z"
          fill="#2B5B9E"
          fillOpacity="0.09"
        />

        {/* Desktop Monitor Screen (Browser Frame) */}
        <rect x="180" y="70" width="310" height="210" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
        {/* Monitor Header Bar */}
        <rect x="180" y="70" width="310" height="24" rx="8" fill="#FAFAFA" stroke="#111111" strokeWidth="1.5" />
        {/* macOS Dots */}
        <circle cx="196" cy="82" r="4.5" fill="#FF5F56" stroke="#E0443E" strokeWidth="1" />
        <circle cx="210" cy="82" r="4.5" fill="#FFBD2E" stroke="#DEA123" strokeWidth="1" />
        <circle cx="224" cy="82" r="4.5" fill="#27C93F" stroke="#1AAB29" strokeWidth="1" />

        {/* Monitor Data Visuals: Charts & Curves */}
        {/* Bar chart inside screen */}
        <rect x="204" y="210" width="16" height="45" fill="#2B5B9E" rx="2" />
        <rect x="228" y="185" width="16" height="70" fill="#1CA8B8" rx="2" />
        <rect x="252" y="160" width="16" height="95" fill="#111111" rx="2" />
        <rect x="276" y="195" width="16" height="60" fill="#2B5B9E" rx="2" />
        <rect x="300" y="145" width="16" height="110" fill="#1CA8B8" rx="2" />

        {/* Line Chart Curve inside screen */}
        <path
          d="M335 220C355 200 375 225 395 165C415 105 435 150 465 125"
          stroke="#111111"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Data points */}
        <circle cx="335" cy="220" r="3.5" fill="#2B5B9E" />
        <circle cx="395" cy="165" r="3.5" fill="#1CA8B8" />
        <circle cx="465" cy="125" r="4.5" fill="#27C93F" stroke="#1AAB29" strokeWidth="1.5" />

        {/* Metric Pill inside screen */}
        <rect x="340" y="105" width="130" height="22" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <text x="348" y="120" fill="#111111" fontSize="10" fontWeight="bold" fontFamily="monospace">
          DHAKA INDEX: +18.4%
        </text>

        {/* Monitor Stand */}
        <path d="M320 280L315 320H355L350 280" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
        <rect x="290" y="320" width="90" height="8" rx="3" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />

        {/* Desk Surface */}
        <line x1="80" y1="360" x2="560" y2="360" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

        {/* Researcher Line-Art Figure (Editorial Style) */}
        {/* Chair Back */}
        <path d="M120 270C120 240 135 230 160 230H165V350H125L120 270Z" fill="#F8FAFC" stroke="#111111" strokeWidth="2" />
        {/* Head & Hair */}
        <circle cx="155" cy="185" r="22" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
        <path d="M138 178C142 165 156 163 172 168C176 175 174 184 171 187" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        {/* Torso & Arm */}
        <path d="M155 207C140 220 135 255 140 300C165 305 185 300 200 280" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
        {/* Arm reaching for tablet/mouse */}
        <path d="M165 240L215 265L245 285" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        {/* Hand on mouse/device */}
        <ellipse cx="250" cy="287" rx="9" ry="6" fill="#2B5B9E" />

        {/* Tablet / Survey Clipboard on Desk */}
        <rect x="75" y="325" width="55" height="35" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="2" transform="rotate(-6 75 325)" />
        <line x1="83" y1="334" x2="118" y2="330" stroke="#1CA8B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="85" y1="342" x2="115" y2="339" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="86" y1="350" x2="106" y2="348" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />

        {/* Mug with Steam */}
        <rect x="495" y="332" width="22" height="28" rx="3" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <path d="M517 338C524 338 526 348 517 352" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        <path d="M502 322C502 316 507 312 505 306" stroke="#2B5B9E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M510 324C510 318 515 314 513 308" stroke="#1CA8B8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Floating Editorial Badge 1 (Top Left) - Green Accent */}
        <g transform="translate(48, 65)">
          <rect x="0" y="0" width="135" height="34" rx="17" fill="#27C93F" stroke="#1AAB29" strokeWidth="1.5" />
          <circle cx="16" cy="17" r="4" fill="#0C4F16" />
          <text x="28" y="21" fill="#0C4F16" fontSize="11" fontWeight="bold">
            99.8% GPS VERIFIED
          </text>
        </g>

        {/* Floating Editorial Badge 2 (Top Right) - Yellow Accent */}
        <g transform="translate(470, 45)">
          <rect x="0" y="0" width="140" height="34" rx="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth="1.5" />
          <text x="14" y="21" fill="#875210" fontSize="11" fontWeight="bold">
            8 DIVISIONS ACTIVE
          </text>
        </g>

        {/* Floating Editorial Badge 3 (Bottom Center-Right) - Red Accent */}
        <g transform="translate(370, 395)">
          <rect x="0" y="0" width="185" height="36" rx="8" fill="#FF5F56" stroke="#E0443E" strokeWidth="1.5" />
          <text x="14" y="23" fill="#790A05" fontSize="11" fontWeight="bold">
            CAPI FIELD TELEMETRY
          </text>
        </g>
      </svg>
    </div>
  );
}

export function SocialImpactIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Organic Teal Splash */}
        <path
          d="M80 60C160 30 260 70 290 140C320 210 240 260 170 250C100 240 50 180 50 120C50 80 60 70 80 60Z"
          fill="#1CA8B8"
          fillOpacity="0.14"
        />
        {/* Organic Blue Splash */}
        <path
          d="M260 110C340 90 390 140 400 200C410 260 350 280 290 270C230 260 220 200 230 150C240 120 250 115 260 110Z"
          fill="#2B5B9E"
          fillOpacity="0.1"
        />

        {/* Base Grid Sheet */}
        <rect x="40" y="30" width="380" height="240" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />

        {/* Rural Village Outline */}
        <path d="M60 220L90 190L120 220H60Z" fill="#F8FAFC" stroke="#111111" strokeWidth="1.5" />
        <rect x="75" y="208" width="14" height="12" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
        <path d="M125 220L150 198L175 220H125Z" fill="#F8FAFC" stroke="#111111" strokeWidth="1.5" />

        {/* Enumerator Tablet with Green Accent Badge */}
        <rect x="210" y="55" width="180" height="180" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <rect x="210" y="55" width="180" height="24" rx="8" fill="#FAFAFA" stroke="#111111" strokeWidth="1" />
        
        {/* Header Dots */}
        <circle cx="224" cy="67" r="3.5" fill="#FF5F56" stroke="#E0443E" strokeWidth="0.8" />
        <circle cx="234" cy="67" r="3.5" fill="#FFBD2E" stroke="#DEA123" strokeWidth="0.8" />
        <circle cx="244" cy="67" r="3.5" fill="#27C93F" stroke="#1AAB29" strokeWidth="0.8" />

        {/* Household Survey Checklist */}
        <circle cx="232" cy="100" r="7" fill="#27C93F" stroke="#1AAB29" strokeWidth="1" />
        <polyline points="229,100 231,102 236,97" stroke="#0C4F16" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="248" y1="100" x2="350" y2="100" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

        <circle cx="232" cy="125" r="7" fill="#27C93F" stroke="#1AAB29" strokeWidth="1" />
        <polyline points="229,125 231,127 236,122" stroke="#0C4F16" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="248" y1="125" x2="330" y2="125" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

        <circle cx="232" cy="150" r="7" fill="#27C93F" stroke="#1AAB29" strokeWidth="1" />
        <polyline points="229,150 231,152 236,147" stroke="#0C4F16" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="248" y1="150" x2="340" y2="150" stroke="#111111" strokeWidth="2" strokeLinecap="round" />

        {/* Impact Metric Pill */}
        <rect x="230" y="178" width="140" height="34" rx="4" fill="#EDFCF0" stroke="#1AAB29" strokeWidth="1.2" />
        <text x="240" y="194" fill="#0C4F16" fontSize="10" fontWeight="bold">
          RCT IMPACT EVALUATION
        </text>
        <text x="240" y="206" fill="#0C4F16" fontSize="9">
          n = 14,200 Baseline Verified
        </text>

        {/* Survey Handshake Silhouette */}
        <circle cx="110" cy="110" r="16" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <path d="M90 150C90 130 130 130 130 150" stroke="#111111" strokeWidth="2" />
        <circle cx="160" cy="115" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <path d="M142 152C142 135 178 135 178 152" stroke="#111111" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function MarketConsumerIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Organic Blue & Teal Splashes */}
        <path
          d="M100 80C200 40 310 70 340 150C370 230 280 270 200 260C120 250 80 190 75 140C70 100 85 90 100 80Z"
          fill="#2B5B9E"
          fillOpacity="0.12"
        />
        <path
          d="M240 70C320 50 400 90 410 170C420 250 340 280 270 260C200 240 220 180 225 130C230 100 235 85 240 70Z"
          fill="#1CA8B8"
          fillOpacity="0.1"
        />

        {/* Card Canvas */}
        <rect x="40" y="30" width="380" height="240" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />

        {/* Retail Shelf Wireframe */}
        <line x1="70" y1="120" x2="210" y2="120" stroke="#111111" strokeWidth="2" />
        <line x1="70" y1="175" x2="210" y2="175" stroke="#111111" strokeWidth="2" />
        <line x1="70" y1="230" x2="210" y2="230" stroke="#111111" strokeWidth="2" />

        {/* Products on Shelf */}
        <rect x="85" y="90" width="18" height="30" rx="2" fill="#2B5B9E" />
        <rect x="110" y="85" width="22" height="35" rx="2" fill="#1CA8B8" />
        <rect x="140" y="94" width="16" height="26" rx="2" fill="#111111" />
        <rect x="165" y="82" width="24" height="38" rx="2" fill="#FFBD2E" stroke="#DEA123" strokeWidth="1" />

        <rect x="80" y="145" width="28" height="30" rx="3" fill="#111111" />
        <rect x="116" y="150" width="20" height="25" rx="2" fill="#2B5B9E" />
        <rect x="144" y="140" width="26" height="35" rx="2" fill="#1CA8B8" />

        {/* Barcode Scanner Gun */}
        <path d="M175 195L195 215L185 225L165 205Z" fill="#111111" />
        <line x1="160" y1="175" x2="195" y2="195" stroke="#FF5F56" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Browser Analytics Card (Right side) */}
        <rect x="235" y="55" width="170" height="185" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <rect x="235" y="55" width="170" height="22" rx="8" fill="#FAFAFA" stroke="#111111" strokeWidth="1" />
        
        {/* macOS Dots */}
        <circle cx="247" cy="66" r="3" fill="#FF5F56" stroke="#E0443E" strokeWidth="0.8" />
        <circle cx="256" cy="66" r="3" fill="#FFBD2E" stroke="#DEA123" strokeWidth="0.8" />
        <circle cx="265" cy="66" r="3" fill="#27C93F" stroke="#1AAB29" strokeWidth="0.8" />

        {/* Upward Consumer Demand Curve */}
        <path
          d="M250 185C270 170 290 175 315 130C340 85 365 110 385 95"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="315" cy="130" r="4" fill="#FFBD2E" stroke="#DEA123" strokeWidth="1.5" />
        <circle cx="385" cy="95" r="4.5" fill="#27C93F" stroke="#1AAB29" strokeWidth="1.5" />

        {/* Consumer Sentiment Badge */}
        <rect x="250" y="195" width="140" height="28" rx="4" fill="#FFF9E6" stroke="#DEA123" strokeWidth="1" />
        <text x="258" y="210" fill="#875210" fontSize="9" fontWeight="bold">
          RETAIL AUDIT: +24.8%
        </text>
        <text x="258" y="219" fill="#875210" fontSize="8">
          3,800 Mudir Dokan Mapped
        </text>
      </svg>
    </div>
  );
}

export function FieldworkQAIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Organic Blue & Teal Splashes */}
        <path
          d="M120 70C210 30 320 60 360 130C400 200 330 260 250 260C170 260 90 210 80 150C70 100 90 85 120 70Z"
          fill="#1CA8B8"
          fillOpacity="0.12"
        />
        <path
          d="M200 90C280 60 350 110 370 170C390 230 310 270 240 250C170 230 180 170 185 130C190 105 195 95 200 90Z"
          fill="#2B5B9E"
          fillOpacity="0.1"
        />

        {/* Card Canvas */}
        <rect x="40" y="30" width="380" height="240" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />

        {/* Central CAPI Tablet with GPS Lock */}
        <rect x="80" y="60" width="140" height="190" rx="12" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
        <circle cx="150" cy="72" r="3" fill="#111111" />
        <rect x="92" y="85" width="116" height="135" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

        {/* GPS Satellite Rings on Tablet */}
        <circle cx="150" cy="140" r="35" stroke="#2B5B9E" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <circle cx="150" cy="140" r="22" stroke="#1CA8B8" strokeWidth="1.5" opacity="0.8" />
        <circle cx="150" cy="140" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth="1.5" />

        {/* Audio Waveform Quality Audit (Right card) */}
        <rect x="245" y="60" width="160" height="85" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <text x="257" y="78" fill="#111111" fontSize="10" fontWeight="bold">
          AUDIO AUDIT BACK-CHECK
        </text>
        {/* Audio waveforms */}
        <line x1="258" y1="105" x2="258" y2="120" stroke="#2B5B9E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="266" y1="95" x2="266" y2="130" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="274" y1="100" x2="274" y2="125" stroke="#1CA8B8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="282" y1="90" x2="282" y2="135" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="290" y1="105" x2="290" y2="120" stroke="#2B5B9E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="298" y1="85" x2="298" y2="140" stroke="#27C93F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="306" y1="98" x2="306" y2="128" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="314" y1="104" x2="314" y2="122" stroke="#1CA8B8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="322" y1="92" x2="322" y2="134" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="330" y1="102" x2="330" y2="124" stroke="#2B5B9E" strokeWidth="2.5" strokeLinecap="round" />

        {/* Speed-Run Detection Badge (Red Accent) */}
        <rect x="245" y="160" width="160" height="90" rx="8" fill="#FFF1F0" stroke="#E0443E" strokeWidth="1.5" />
        <rect x="257" y="172" width="136" height="20" rx="4" fill="#FF5F56" />
        <text x="264" y="186" fill="#790A05" fontSize="9" fontWeight="bold">
          ZERO-FRAUD ALGORITHM
        </text>
        <text x="257" y="208" fill="#790A05" fontSize="9" fontWeight="bold">
          Timestamp Duration: PASS
        </text>
        <text x="257" y="222" fill="#4B5563" fontSize="8">
          Speed-run variance &lt; 1.2%
        </text>
        <text x="257" y="235" fill="#4B5563" fontSize="8">
          10% Supervisor Re-Interviews
        </text>
      </svg>
    </div>
  );
}
