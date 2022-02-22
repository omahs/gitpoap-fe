import styled from 'styled-components';
import { rem } from 'polished';
import { ExtraHover, ExtraPressed, TextGray, TextLight } from '../../colors';

type Props = {
  icon: React.ReactNode;
  href?: string;
  count: number;
};

const Count = styled.span`
  font-family: PT Mono;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  letter-spacing: ${rem(0.5)};
  text-transform: uppercase;
  color: ${TextLight};
  margin-left: ${rem(6)};
`;

const Container = styled.a`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  path {
    transition: 200ms fill ease;
    fill: ${TextGray};
  }

  &:hover {
    path {
      fill: ${ExtraHover};
    }
  }
  &:active {
    path {
      fill: ${ExtraPressed};
    }
  }
`;

export const IconCount = ({ icon, href, count }: Props) => {
  return (
    <Container href={href}>
      {icon}
      {count && <Count>{count}</Count>}
    </Container>
  );
};
