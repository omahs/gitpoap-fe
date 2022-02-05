import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { TextLight, MidnightBlue } from '../../colors';

type Props = {
  imgUrl: string;
};

type HexProps = {
  size: number;
  borderSize: number;
};

const Hexagon = styled.div`
  clip-path: polygon(5% 25%, 50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%);
`;

const HexOuterBorder = styled(Hexagon)<HexProps>`
  position: relative;
  --s: ${(props) => rem(props.size + 4 * props.borderSize)};
  width: var(--s);
  height: calc(var(--s) * 1);
  background-color: ${TextLight};
`;
const HexInnerBorder = styled(Hexagon)<HexProps>`
  --s: ${(props) => rem(props.size + 2 * props.borderSize)};
  position: absolute;
  top: ${(props) => rem(props.borderSize)};
  left: ${(props) => rem(props.borderSize)};

  width: var(--s);
  height: calc(var(--s) * 1);
  background: ${MidnightBlue};
`;

const HexBadge = styled(Hexagon)<{ url: string } & HexProps>`
  --s: ${(props) => rem(props.size)};
  position: absolute;
  top: ${(props) => rem(props.borderSize)};
  left: ${(props) => rem(props.borderSize)};

  width: var(--s);
  height: calc(var(--s) * 1);
  display: inline-block;
  font-size: initial; /* we reset the font-size if we want to add some content */
  background: url('${(props) => props.url}') no-repeat center center;
  background-size: cover;
`;

export const GitPOAPBadge = ({ imgUrl }: Props) => {
  const size = 200;
  const borderSize = 4;
  return (
    <HexOuterBorder size={size} borderSize={borderSize}>
      <HexInnerBorder size={size} borderSize={borderSize}>
        <HexBadge url={imgUrl} size={size} borderSize={borderSize} />
      </HexInnerBorder>
    </HexOuterBorder>
  );
};

/* Another option is to use SVG ~ https://stackoverflow.com/questions/67458234/mask-image-with-svg-shape-and-add-a-border*/
