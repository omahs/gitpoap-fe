import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Header } from '../shared/elements/Header';
import { Button } from '../shared/elements/Button';
import { POAP } from '../../types';
import { FaPlus } from 'react-icons/fa';
import { POAPBadge as POAPBadgeUI } from '../shared/elements/POAPBadge';
import { Select } from '../shared/elements/Select';
import { Text } from '../shared/elements/Text';
import { TextGray } from '../../colors';

type Props = {
  poaps?: POAP[];
};

enum SortOptions {
  Date = 'Date',
  Alphabetical = 'Alphabetical',
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Heading = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const POAPCount = styled(Header)`
  font-size: ${rem(30)};
  line-height: ${rem(42)};
`;

const Sorting = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

const POAPs = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${rem(50)};
`;

const POAPBadge = styled(POAPBadgeUI)`
  &:not(:last-child) {
    margin-right: ${rem(40)};
  }
  margin-top: ${rem(30)};
`;

const ShowMore = styled(Button)`
  align-self: center;
`;

const SortBy = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${rem(12)};
  line-height: ${rem(18)};
  letter-spacing: ${rem(2)};
  text-transform: uppercase;
  color: ${TextGray};
  margin-right: ${rem(10)};
`;

// @TODO: ensure the count is correct
export const AllPOAPs = ({ poaps }: Props) => {
  const selectOptions: { value: SortOptions; label: string }[] = [
    { value: SortOptions.Date, label: 'Date of Claim' },
    { value: SortOptions.Alphabetical, label: 'Alphabetical' },
  ];

  return (
    <Container>
      <Heading>
        <POAPCount>{`All POAPS: ${poaps?.length ?? ''}`}</POAPCount>
        <Sorting>
          <SortBy>{'Sort By: '}</SortBy>
          <Select data={selectOptions} value={SortOptions.Date} />
        </Sorting>
      </Heading>
      <POAPs>
        {poaps &&
          poaps.map((poap) => {
            return <POAPBadge key={poap.id} name={poap.name} imgSrc={poap.imgSrc} />;
          })}
      </POAPs>
      <ShowMore leftIcon={<FaPlus />} variant="outline">
        {'Show more'}
      </ShowMore>
    </Container>
  );
};
