import type { FC, SVGProps } from "react";

const LinkedInIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.82-2.05 3.74-2.05C21 8.59 21 11 21 14.11V21h-4v-6.11c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.23V21h-4V9Z" />
    </svg>
  );
};

export default LinkedInIcon;