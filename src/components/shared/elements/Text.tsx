import styled from 'styled-components';
import { rem } from 'polished';
import { Text as TextUI } from '@mantine/core';
import { TextLight } from '../../../colors';

export const Text = styled(TextUI)`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  letter-spacing: ${rem(0.2)};
  color: ${TextLight};
`;
