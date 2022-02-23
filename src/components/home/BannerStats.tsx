import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { InfoHexMetric } from '../InfoHexMetric';
import { GitPOAP } from '../shared/elements/icons/GitPOAP';
import { People } from '../shared/elements/icons/People';

type Stats = {
  value: number;
  unit: string;
  rate: string;
  icon: React.ReactNode;
};

type Props = {
  stats: [Stats, Stats, Stats];
};

export const BannerStats = (props: Props) => {
  return (
    <>
      <InfoHexMetric
        value={Number('17545').toLocaleString()}
        unit={'contributors'}
        rate={'+345 / past week '}
        icon={<People />}
      />
      <InfoHexMetric
        value={Number('17545').toLocaleString()}
        unit={'contributors'}
        rate={'+345 / past week '}
        icon={<GitPOAP />}
      />
      <InfoHexMetric
        value={Number('17545').toLocaleString()}
        unit={'contributors'}
        rate={'+345 / past week '}
        icon={<People />}
      />
    </>
  );
};
