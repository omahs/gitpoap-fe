import { forwardRef, Ref, SVGAttributes } from 'react';
import { Icon } from './BaseIcon';

export const People = forwardRef((props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <Icon
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    width="78"
    height="65"
    fill="none"
    viewBox="0 0 78 65"
    ref={ref}
    {...props}
  >
    <path
      fill="#838495"
      fillRule="evenodd"
      d="M4.852 42.635a16.567 16.567 0 0111.715-4.852H41.7a16.566 16.566 0 0116.567 16.566v6.284a4 4 0 11-8 0v-6.284a8.567 8.567 0 00-8.567-8.566H16.567A8.567 8.567 0 008 54.349v6.284a4 4 0 11-8 0v-6.284c0-4.393 1.745-8.607 4.852-11.714zM29.133 8.083a8.567 8.567 0 100 17.133 8.567 8.567 0 000-17.133zM12.567 16.65C12.567 7.5 19.984.083 29.133.083 38.283.083 45.7 7.5 45.7 16.65s-7.417 16.566-16.567 16.566S12.567 25.8 12.567 16.65zM59.819 41.191a4 4 0 014.873-2.873 16.567 16.567 0 0112.425 16.029v6.286a4 4 0 01-8 0v-6.282a8.567 8.567 0 00-6.425-8.287 4 4 0 01-2.873-4.873zM47.25 3.5A4 4 0 0152.117.616a16.567 16.567 0 010 32.098 4 4 0 01-1.984-7.75 8.567 8.567 0 000-16.598 4 4 0 01-2.883-4.868z"
      clipRule="evenodd"
    ></path>
  </Icon>
));
