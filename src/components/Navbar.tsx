import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { rem } from 'polished';
import { Group, Space } from '@mantine/core';
import { TextGray, TextLight } from '../colors';
import { BREAKPOINTS } from '../constants';
import { GitPOAPLogo } from './icons/GitPOAPLogoWhite';
import { Wallet } from './wallet/Wallet';
import { Button } from './shared/Button';
import { GoMarkGithub } from 'react-icons/go';

const Nav = styled(Group)`
  color: ${TextLight} !important;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: ${rem(24)} ${rem(45)};

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: ${rem(24)} ${rem(30)};
  }
`;

const ContentLeft = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Links = styled.div`
  font-family: 'PT Mono', monospace;
  color: ${TextGray} !important;
  font-size: ${rem(12)};
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const StyledLink = styled.a`
  font-size: ${rem(12)};
  font-weight: 700;
  letter-spacing: ${rem(2)};
  text-transform: uppercase;
  color: ${TextGray};
  margin-right: ${rem(25)};
`;

const ClaimButton = styled(Button)`
  margin-right: ${rem(12)};
`;

const NavLink = (props: { href: string; children: React.ReactNode }) => {
  return (
    <Link href="/poaps" passHref>
      <StyledLink>{props.children}</StyledLink>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Link href="/" passHref>
          <ContentLeft>
            <GitPOAPLogo />
          </ContentLeft>
        </Link>
        <Space />
        <ContentRight>
          <Links>
            <NavLink href="/poaps">POAPS</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contributors">Contributors</NavLink>
            <NavLink href="/docs">Docs</NavLink>
          </Links>
          <ClaimButton leftIcon={<GoMarkGithub size={16} />}>CLAIM POAPS</ClaimButton>
          <Wallet />
        </ContentRight>
      </Container>
    </Nav>
  );
};
