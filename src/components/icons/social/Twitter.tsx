import { forwardRef, Ref, SVGAttributes } from 'react';

export const Twitter = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="15"
      fill="none"
      viewBox="0 0 19 15"
      ref={ref}
      {...props}
    >
      <path
        fill="#838495"
        d="M18.085 2.157a7.056 7.056 0 01-2.03.557A3.54 3.54 0 0017.61.758a7.08 7.08 0 01-2.244.858A3.529 3.529 0 0012.785.5c-2.282 0-3.959 2.129-3.443 4.34a10.034 10.034 0 01-7.285-3.693 3.539 3.539 0 001.094 4.719 3.52 3.52 0 01-1.6-.443c-.04 1.638 1.134 3.17 2.834 3.51a3.543 3.543 0 01-1.596.06 3.537 3.537 0 003.302 2.455 7.106 7.106 0 01-5.233 1.464A10.005 10.005 0 006.276 14.5c6.562 0 10.27-5.542 10.046-10.513a7.195 7.195 0 001.763-1.83z"
      ></path>
    </svg>
  ),
);
