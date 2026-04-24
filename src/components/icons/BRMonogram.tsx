import type { FC, SVGProps } from "react";

const BRMonogram: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id="br-gradient"
          x1="10"
          y1="8"
          x2="54"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60A5FA" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>

      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="18"
        fill="rgba(255,255,255,0.04)"
      />

      <rect
        x="4.5"
        y="4.5"
        width="55"
        height="55"
        rx="17.5"
        stroke="rgba(255,255,255,0.12)"
      />

      <path
        d="M20 16H33C40.18 16 44 19.2 44 24.88C44 28.95 41.78 31.56 37.68 32.4C42.43 33.02 45 35.92 45 40.72C45 46.9 40.61 50 32.48 50H20V16ZM27.45 21.76V29.98H31.52C35.42 29.98 37.21 28.57 37.21 25.93C37.21 23.19 35.39 21.76 31.52 21.76H27.45ZM27.45 35.36V44.24H32.1C36.48 44.24 38.31 42.73 38.31 39.86C38.31 36.92 36.43 35.36 31.96 35.36H27.45Z"
        fill="url(#br-gradient)"
      />

      <path
        d="M39.5 41.5L47 49"
        stroke="url(#br-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BRMonogram;