import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';
import { Slate1, Black2 } from '../../colors';

type Props = {
  children: React.ReactNode;
  href: string;
  active: boolean;
};

const Line = styled.div<{ active: boolean }>`
  margin-top: ${rem(8)};
  height: ${rem(2)};
  background-color: ${Slate1};
  transition: 250ms background-color ease;
  ${(props) => !props.active && 'visibility: hidden;'}
`;

const Container = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  text-align: center;
  color: ${Slate1};
  transition: 250ms color ease;
  text-decoration: none;
  padding-top: ${rem(10)};

  &:hover {
    color: ${Black2};
    ${Line} {
      background-color: ${Black2};
    }
  }
`;

const Text = styled.span`
  padding-right: ${rem(10)};
  padding-left: ${rem(10)};
`;

export const NavLink = (props: Props) => {
  return (
    <Container href={props.href}>
      <Text>{props.children}</Text>
      <Line active={props.active} />
    </Container>
  );
};
