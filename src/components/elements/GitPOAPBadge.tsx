import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { TextLight, MidnightBlue, ExtraHover, ExtraPressed, TextGray } from '../../colors';

type Props = {
  imgUrl: string;
  disabled?: boolean;
};

type HexProps = {
  size: number;
  borderSize: number;
};

const Hexagon = styled.div`
  transition: 150ms background-color ease-in-out, 150ms opacity ease-in-out;
  clip-path: polygon(5% 25%, 50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%);
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

const HexOuterBorder = styled(Hexagon)<{ disabled?: boolean } & HexProps>`
  position: relative;
  --s: ${(props) => rem(props.size + 4 * props.borderSize)};
  width: var(--s);
  height: calc(var(--s) * 1);
  background-color: ${TextLight};
  cursor: pointer;

  &:hover:not([disabled]) {
    background-color: ${ExtraHover};
    ${HexBadge} {
      opacity: 0.7;
    }
  }
  &:active:not([disabled]) {
    background-color: ${ExtraPressed};
    ${HexBadge} {
      opacity: 0.5;
    }
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: ${TextGray};
    ${HexBadge} {
      background: ${MidnightBlue};
    }
  }
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

export const GitPOAPBadge = ({ imgUrl, disabled }: Props) => {
  const size = 200;
  const borderSize = 4;

  return (
    <HexOuterBorder size={size} borderSize={borderSize} disabled={disabled}>
      <HexInnerBorder size={size} borderSize={borderSize}>
        <HexBadge url={imgUrl} size={size} borderSize={borderSize} />
      </HexInnerBorder>
    </HexOuterBorder>
  );
};

/* Another option is to use SVG ~ https://stackoverflow.com/questions/67458234/mask-image-with-svg-shape-and-add-a-border*/
