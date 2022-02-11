import { forwardRef, Ref, SVGAttributes } from 'react';

export const CaretUp = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="4"
      fill="none"
      viewBox="0 0 7 4"
      ref={ref}
      {...props}
    >
      <path d="M3.4641 0L6.9282 4H0L3.4641 0Z" fill="#E2E2EE"></path>
    </svg>
  ),
);
