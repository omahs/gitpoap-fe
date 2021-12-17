import styled from 'styled-components';
import { rem } from 'polished';
import { Slate1, Gray6 } from '../../colors';
import { BREAKPOINTS } from '../../constants';

export const LargeHeaderStyled = styled.div`
  font-family: 'JetBrains Mono', sans-serif;
  color: ${Slate1};
  font-weight: 700;
  font-size: ${rem(62)};
  line-height: ${rem(74)};

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: ${rem(44)};
    line-height: ${rem(58)};
  }
`;

const Slashes = styled.span`
  color: ${Gray6};
`;

export const LargeHeader = (props: { className?: string; children: string }) => (
  <LargeHeaderStyled className={props.className}>
    {props.children}
    <Slashes>{'//'}</Slashes>
  </LargeHeaderStyled>
);
