import styled from "styled-components";
import { rem } from "polished";
import { DarkBlue2 } from "../../colors";

export const InputLabel = styled.div`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  color: ${DarkBlue2};
  margin-bottom: ${rem(10)};
`;
