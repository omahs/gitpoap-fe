import { forwardRef, Ref, SVGAttributes } from 'react';

export const CaretDown = forwardRef(
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
      <path fill="#E2E2EE" d="M3.464 4l3.464-4H0l3.464 4z"></path>
    </svg>
  ),
);
