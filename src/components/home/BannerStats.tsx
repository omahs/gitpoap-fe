import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useQuery, gql } from 'urql';
import { InfoHexMetric } from './InfoHexMetric';
import { GitPOAP } from '../shared/elements/icons/GitPOAP';
import { People } from '../shared/elements/icons/People';
import { Project } from '../shared/elements/icons/Project';

export type Stats = {
  value: number;
  unit: string;
  rate: number;
  icon: string;
};

const StatsQuery = gql`
  query GetAllStats {
    totalContributors
    lastWeekContributors
    totalGitPOAPs
    lastWeekGitPOAPs
    totalRepos
    lastWeekRepos
  }
`;

const ICONS: Record<string, React.ReactNode> = {
  people: <People style={{ height: rem(70), width: rem(70) }} />,
  gitPOAP: <GitPOAP style={{ height: rem(70), width: rem(70) }} />,
  project: <Project style={{ height: rem(70), width: rem(70) }} />,
};

const StatsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InfoHexMetricStyled = styled(InfoHexMetric)`
  &:not(:last-child) {
    margin-right: ${rem(30)};
  }
`;

export const BannerStats = () => {
  const [result] = useQuery<{
    totalContributors: number;
    lastWeekContributors: number;
    totalGitPOAPs: number;
    lastWeekGitPOAPs: number;
    totalRepos: number;
    lastWeekRepos: number;
  }>({
    query: StatsQuery,
  });

  if (result.fetching) return null;
  if (result.error) return null;
  if (!result.data) return null;

  const stats: Stats[] = [
    {
      value: result.data.totalContributors,
      unit: 'contributors',
      rate: result.data.lastWeekContributors,
      icon: 'people',
    },
    {
      value: result.data.totalGitPOAPs,
      unit: 'GitPOAPs',
      rate: result.data.lastWeekGitPOAPs,
      icon: 'gitPOAP',
    },
    {
      value: result.data.totalRepos,
      unit: 'projects',
      rate: result.data.lastWeekRepos,
      icon: 'project',
    },
  ];

  return (
    <StatsStyled>
      {stats.map((stat) => {
        return (
          <InfoHexMetricStyled
            value={Number(stat.value).toLocaleString()}
            key={stat.unit}
            unit={stat.unit}
            rate={`${stat.rate >= 0 && '+'}${stat.rate} / past week`}
            icon={ICONS[stat.icon]}
          />
        );
      })}
    </StatsStyled>
  );
};
