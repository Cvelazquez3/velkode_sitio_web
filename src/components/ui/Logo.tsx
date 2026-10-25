interface LogoProps {
  className?: string;
  wordmarkClassName?: string;
  showIcon?: boolean;
}

/**
 * VELKODE Wordmark & Identity
 * Clean typographic signature with Tesla-inspired 3-bar "E"
 * and architectural vector horizon bar.
 * Mathematically and optically centered (x bounds from 2 to 126, width = 124, exact center = 64).
 */
export default function Logo({
  className = "h-8 w-auto",
  wordmarkClassName = "w-auto h-[18px] sm:h-[20px]",
  showIcon = false,
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* ── Standalone Architectural "V" with Horizon Vector Beam ── */}
      {showIcon && (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="v-icon-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#7892A9" />
            </linearGradient>
            <linearGradient id="v-icon-beam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7892A9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#7892A9" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Pillars */}
          <path d="M6 7L17.5 34H21.5L13.5 7H6Z" fill="url(#v-icon-left)" />
          <path d="M34 7L22.5 34H18.5L26.5 7H34Z" fill="#CBD5E1" />
          <polygon points="20,29 22.5,34 17.5,34" fill="#FFFFFF" />

          {/* Precision Horizontal Horizon Crossbar */}
          <rect x="2" y="18" width="36" height="2" rx="1" fill="url(#v-icon-beam)" />
          {/* Subtle Center Reticle Diamond */}
          <polygon points="20,16.5 22,19 20,21.5 18,19" fill="#FFFFFF" />
        </svg>
      )}

      {/* ── Wordmark with Tesla-style 3-Bar "E" (Optically & Mathematically centered) ── */}
      <svg
        height="22"
        viewBox="0 0 128 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={wordmarkClassName}
        aria-label="VELKODE"
      >
        {/* 'V' with subtle horizontal accent notch */}
        <g>
          <path d="M2 3L7.2 19H9.8L5.5 3H2Z" fill="#FFFFFF" />
          <path d="M15 3L9.8 19H7.2L11.5 3H15Z" fill="#CBD5E1" />
          <rect x="0.5" y="10.5" width="16" height="1.2" rx="0.6" fill="#FFFFFF" fillOpacity="0.75" />
        </g>

        {/* 'E' (Tesla-style 3 horizontal bars) */}
        <g transform="translate(19, 0)">
          <rect x="0" y="3" width="12" height="2.5" rx="1.25" fill="#FFFFFF" />
          <rect x="0" y="9.75" width="9.5" height="2.5" rx="1.25" fill="#FFFFFF" />
          <rect x="0" y="16.5" width="12" height="2.5" rx="1.25" fill="#FFFFFF" />
        </g>

        {/* 'L' */}
        <path d="M37 3V19H48V16.5H39.8V3H37Z" fill="#FFFFFF" />

        {/* 'K' */}
        <path d="M54 3V19H56.8V12.2L62.5 19H66.2L59.6 11.2L65.6 3H62L56.8 10V3H54Z" fill="#FFFFFF" />

        {/* 'O' */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78 3C73.6 3 70 6.6 70 11C70 15.4 73.6 19 78 19C82.4 19 86 15.4 86 11C86 6.6 82.4 3 78 3ZM78 5.6C81 5.6 83.2 8 83.2 11C83.2 14 81 16.4 78 16.4C75 16.4 72.8 14 72.8 11C72.8 8 75 5.6 78 5.6Z"
          fill="#FFFFFF"
        />

        {/* 'D' */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93 3H100C104.5 3 108 6.6 108 11C108 15.4 104.5 19 100 19H93V3ZM95.8 5.6V16.4H100C103 16.4 105.2 14 105.2 11C105.2 8 103 5.6 100 5.6H95.8Z"
          fill="#FFFFFF"
        />

        {/* 'E' (Second Tesla-style 3 horizontal bars) */}
        <g transform="translate(114, 0)">
          <rect x="0" y="3" width="12" height="2.5" rx="1.25" fill="#FFFFFF" />
          <rect x="0" y="9.75" width="9.5" height="2.5" rx="1.25" fill="#FFFFFF" />
          <rect x="0" y="16.5" width="12" height="2.5" rx="1.25" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
