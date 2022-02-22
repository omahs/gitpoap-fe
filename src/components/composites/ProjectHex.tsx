import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Badge } from '../elements/Badge';
import { Title } from '../elements/Title';
import { TextAccent } from '../../colors';
import { Star } from '../icons/Star';
import { IconCount } from '../elements/IconCount';
import { People } from '../icons/People';
import { GitPOAP } from '../icons/social/GitPOAP';
import ProjectHexBackground from './ProjectHexBackground.svg';

type Props = {
  category: string;
  name: string;
  memberCount: number;
  gitPoapCount: number;
  stars: number;
};

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${ProjectHexBackground}) no-repeat center;
  padding: ${rem(25)} ${rem(45)};
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > *:not(:last-child) {
    margin-right: ${rem(10)};
  }
`;

const TitleStyled = styled(Title)`
  font-family: PT Mono;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(17)};
  line-height: ${rem(24)};
  text-align: center;
  letter-spacing: ${rem(0.2)};
  color: ${TextAccent};
`;

const BadgeStyled = styled(Badge)`
  margin-top: ${rem(7)};
`;

export const ProjectHex = ({ category, name, memberCount, gitPoapCount, stars }: Props) => {
  return (
    <Content>
      <TitleStyled>{name}</TitleStyled>
      <Icons>
        <IconCount count={memberCount} icon={<People width="13" height="11" />} />
        <IconCount count={gitPoapCount} icon={<GitPOAP width="14" height="12" />} />
        <IconCount count={stars} icon={<Star width="13" height="11" />} />
      </Icons>
      <BadgeStyled>{category}</BadgeStyled>
    </Content>
  );
};
