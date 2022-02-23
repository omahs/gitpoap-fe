import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { InfoHexMetric } from '../InfoHexMetric';
import { GitPOAP } from '../shared/elements/icons/GitPOAP';
import { People } from '../shared/elements/icons/People';
import { Project } from '../shared/elements/icons/Project';
import { useQuery } from 'urql';

export type Stats = {
  value: string;
  unit: string;
  rate: string;
  icon: string;
};

const StatsQuery = `
  query GetAllStats {
    allStats {
      value
      unit
      rate
      icon
    }
  }
`;

const ICONS: Record<string, React.ReactNode> = {
  people: <People height="70" width="70" />,
  gitPOAP: <GitPOAP height="70" width="70" />,
  project: <Project height="70" width="70" />,
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
    allStats: {
      stats: Stats[];
    };
  }>({
    query: StatsQuery,
  });

  if (result.fetching) return null;
  if (result.error) return null;

  return (
    <StatsStyled>
      {result.data?.allStats.stats.map((stat) => {
        return (
          <InfoHexMetricStyled
            value={Number(stat.value).toLocaleString()}
            key={stat.unit}
            unit={stat.unit}
            rate={stat.rate}
            icon={ICONS[stat.icon]}
          />
        );
      })}
    </StatsStyled>
  );
};
