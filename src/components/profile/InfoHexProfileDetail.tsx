import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Divider as DividerUI, Text } from '@mantine/core';
import { Jazzicon as JazzIconReact } from '@ukstv/jazzicon-react';
import { DividerGray1, TextAccent, TextLight } from '../../colors';
import { Twitter } from '../shared/elements/icons/Twitter';
import { GitHub } from '../shared/elements/icons/GitHub';
import { GitPOAP } from '../shared/elements/icons/GitPOAP';
import { InfoHexBase } from '../shared/elements/InfoHexBase';
import { Avatar as AvatarUI } from '../shared/elements/Avatar';
import { CollapsibleAddress } from '../shared/elements/CollapsibleAddress';
import { Project } from '../../types';
import { ProjectHex } from '../shared/compounds/ProjectHex';

type Props = {
  imgSrc?: string;
  name: string;
  address: string;
  bio?: string;
  gitpoapId?: string | number;
  twitterHref?: string;
  githubHref?: string;
  websiteHref?: string;
  projects?: Project[];
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${rem(200)};
  padding: 0 ${rem(17)};
`;

const Avatar = styled(AvatarUI)`
  margin-bottom: ${rem(14)};
  width: ${rem(160)};
  height: ${rem(160)};
`;

const JazzIcon = styled(JazzIconReact)`
  height: ${rem(160)};
  width: ${rem(160)};
  margin-bottom: ${rem(14)};
`;

const Name = styled.div`
  font-family: VT323;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(36)};
  line-height: ${rem(42)};
  text-align: center;
  letter-spacing: ${rem(-1)};
  color: ${TextAccent};
  margin-bottom: ${rem(4)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${rem(230)};
`;

const Bio = styled(Text)`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(13)};
  line-height: ${rem(16)};
  text-align: center;
  letter-spacing: ${rem(-0.1)};
  color: ${TextLight};
  max-width: ${rem(220)};
  margin-bottom: ${rem(15)};
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rem(14)};
  > *:not(:last-child) {
    margin-right: ${rem(16)};
  }
`;

const StyledInfoHex = styled(InfoHexBase)`
  display: inline-flex;
  flex-direction: column;
  min-width: ${rem(270)};
`;

const Address = styled(CollapsibleAddress)`
  margin-bottom: ${rem(17)};
`;

const ProjectCount = styled.span`
  font-family: PT Mono;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(13)};
  line-height: ${rem(17)};
  text-align: center;
  letter-spacing: ${rem(0.5)};
  color: ${TextLight};
  margin-bottom: ${rem(14)};
`;

const Divider = styled(DividerUI)`
  margin-top: ${rem(37)};
  margin-bottom: ${rem(26)};
  border-color-top: ${DividerGray1};
  height: ${rem(2)};
  width: ${rem(100)};
`;

const getGitPOAPHref = (gitpoapId: string | number) => {
  return `https://gitpoap.io/@${gitpoapId}`;
};

export const InfoHexProfileDetail = ({
  imgSrc,
  name,
  address,
  bio,
  gitpoapId,
  twitterHref,
  githubHref,
  websiteHref,
  projects,
}: Props) => {
  return (
    <StyledInfoHex>
      <Content>
        {imgSrc && <Avatar src={imgSrc} useDefaultImage />}
        {!imgSrc && <JazzIcon address={address} />}
        <Name title={name}>{name}</Name>
        <Address address={address} isCollapsed />
        {bio && <Bio>{bio}</Bio>}
        <Social>
          {twitterHref && <Twitter href={twitterHref} />}
          {githubHref && <GitHub href={githubHref} />}
          {websiteHref && gitpoapId && <GitPOAP href={getGitPOAPHref(gitpoapId)} />}
        </Social>
        {projects && (
          <>
            <Divider />
            <ProjectCount>{`${projects.length} ${
              projects.length > 1 ? 'Projects' : 'Project'
            }`}</ProjectCount>
            {projects.map((project) => {
              return (
                <ProjectHex
                  key={project.id}
                  category={project.Organization.name}
                  name={project.name}
                />
              );
            })}
          </>
        )}
      </Content>
    </StyledInfoHex>
  );
};
