import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { BackgroundPanel } from '../../colors';

type Props = {
  children: React.ReactNode;
};

const StyledInfoHex = styled.div`
  display: inline-flex;
  flex-direction: column;
  min-width: ${rem(250)};
`;

const UpperTriangle = styled.div`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  width: 100%;
  height: ${rem(70)};
  background-color: ${BackgroundPanel};
`;

const LowerTriangle = styled(UpperTriangle)`
  clip-path: polygon(50% 100%, 0 0, 100% 0);
`;

const Body = styled.div`
  background-color: ${BackgroundPanel};
  min-height: ${rem(100)};
`;

export const InfoHexBase = (props: Props) => {
  return (
    <StyledInfoHex>
      <UpperTriangle />
      <Body>{props.children}</Body>
      <LowerTriangle />
    </StyledInfoHex>
  );
};
