import styled from 'styled-components';
import RouterLink from 'next/link';
import { TextAccent } from '../../colors';

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${TextAccent};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:active {
    text-decoration: none;
  }
`;
