import styled from 'styled-components';
import { rem } from 'polished';
import { TextAccent } from '../../../colors';

type Props = {
  value: number;
};

const ClaimCircleStyled = styled.div`
  height: ${rem(18)};
  width: ${rem(18)};
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Number = styled.div<{ isSmall: boolean }>`
  letter-spacing: 0;
  word-spacing: 0;
  color: ${TextAccent};
  font-size: ${(props) => (props.isSmall ? rem(11) : rem(13))};
  font-weight: bold;
  line-height: ${rem(12)};
`;

export const ClaimCircle = ({ value }: Props) => {
  return (
    <ClaimCircleStyled>
      <Number isSmall={value >= 10}>{value}</Number>
    </ClaimCircleStyled>
  );
};
