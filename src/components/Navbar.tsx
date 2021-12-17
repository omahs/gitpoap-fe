import Link from 'next/link';
import styled from 'styled-components';
import { rem } from 'polished';
import Grid from '@mui/material/Grid';
import { Gray6, Slate1 } from '../colors';
import { GitPOAPLogo } from './icons/GitPOAPLogo';
import { BREAKPOINTS } from '../constants';
import { Wallet } from '../wallet/Wallet';

const Nav = styled(Grid)`
  border-bottom: 1px solid ${Gray6};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const Name = styled.div`
  font-family: 'JetBrains Mono';
  font-weight: 500;
  color: ${Slate1};
  font-size: ${rem(26)};
  margin-left: ${rem(18)};
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Navbar = () => {
  return (
    <Nav
      container
      columnSpacing={0}
      rowSpacing={0}
      display="flex"
      direction="row"
      justifyContent="center"
    >
      <Grid item xs={12} sm={12} md={12} lg={10} xl={8} rowSpacing={0} columnSpacing={0}>
        <Container>
          <Link href="/" passHref>
            <ContentLeft>
              <GitPOAPLogo />
              <Name>{'GitPOAP'}</Name>
            </ContentLeft>
          </Link>
          <ContentRight>
            <Wallet />
          </ContentRight>
        </Container>
      </Grid>
    </Nav>
  );
};
