import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { ExtraHover, ExtraPressed, TextDarkGray, TextGray } from '../../../colors';
import Link from 'next/link';

export const LinkStyles = css`
  font-size: ${rem(12)};
  font-weight: 700;
  letter-spacing: ${rem(2)};
  text-transform: uppercase;
  color: ${TextGray};
  transition: 150ms color ease;

  > * {
    color: ${TextGray};
    transition: 150ms color ease;
  }

  &:hover:not([disabled]) {
    color: ${ExtraHover};
    > * {
      color: ${ExtraHover};
    }
  }
  &:active:not([disabled]) {
    color: ${ExtraPressed};
    > * {
      color: ${ExtraPressed};
    }
  }
  &[disabled] {
    color: ${TextDarkGray};
    > * {
      color: ${TextDarkGray};
    }
  }
`;

const StyledLink = styled.a`
  ${LinkStyles}
  margin-right: ${rem(25)};
`;

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
