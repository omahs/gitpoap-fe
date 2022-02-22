import { forwardRef, Ref, SVGAttributes } from 'react';
import { Icon } from './BaseIcon';

export const Star = forwardRef((props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="11"
    fill="none"
    viewBox="0 0 13 11"
    ref={ref}
    {...props}
  >
    <path
      fill="#838495"
      fillRule="evenodd"
      d="M6.666 0c.153 0 .292.087.36.224L8.59 3.391l3.495.51a.402.402 0 01.223.686L9.778 7.05l.597 3.48a.402.402 0 01-.584.424L6.666 9.31 3.54 10.954a.402.402 0 01-.583-.424l.596-3.48-2.529-2.463a.402.402 0 01.223-.686l3.495-.51L6.305.224A.402.402 0 016.665 0zm0 1.31L5.37 3.936a.402.402 0 01-.303.22l-2.898.423 2.097 2.043a.402.402 0 01.116.356l-.495 2.885L6.479 8.5a.402.402 0 01.374 0l2.592 1.363-.495-2.885a.402.402 0 01.115-.356l2.098-2.043-2.9-.423a.402.402 0 01-.301-.22L6.666 1.31z"
      clipRule="evenodd"
    ></path>
  </Icon>
));
