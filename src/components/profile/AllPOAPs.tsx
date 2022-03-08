import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useQuery, gql } from 'urql';
import { Header } from '../shared/elements/Header';
import { Button } from '../shared/elements/Button';
import { POAP } from '../../types';
import { FaPlus } from 'react-icons/fa';
import { POAPBadge as POAPBadgeUI } from '../shared/elements/POAPBadge';
import { Select } from '../shared/elements/Select';
import { Text } from '../shared/elements/Text';
import { TextGray } from '../../colors';

type Props = {
  address: string;
};

enum SortOptions {
  Date = 'date',
  Alphabetical = 'alphabetical',
}

const selectOptions: { value: SortOptions; label: string }[] = [
  { value: SortOptions.Date, label: 'Date of Claim' },
  { value: SortOptions.Alphabetical, label: 'Alphabetical' },
];

const AllPOAPsQuery = gql`
  query allPOAPs($address: String!, $sort: String, $page: Float, $perPage: Float) {
    userPOAPs(address: $address, sort: $sort, page: $page, perPage: $perPage) {
      totalPOAPs
      poaps {
        event {
          name
          image_url
        }
        tokenId
      }
    }
  }
`;

export type UserPOAPsQueryRes = {
  userPOAPs: {
    totalPOAPs: number;
    poaps: POAP[];
  } | null;
};

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
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

export const AllPOAPs = ({ address }: Props) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOptions>(SortOptions.Date);
  const [gitPOAPs, setGitPOAPs] = useState<POAP[]>([]);
  const [total, setTotal] = useState('');
  const perPage = 4;
  const [result] = useQuery<UserPOAPsQueryRes>({
    query: AllPOAPsQuery,
    variables: {
      address,
      page,
      perPage,
      sort,
    },
  });

  useEffect(() => {
    setGitPOAPs((prev: POAP[]) => {
      if (result.data?.userPOAPs) {
        return [...prev, ...result.data.userPOAPs.poaps];
      }
      return prev;
    });
  }, [result.data]);

  useEffect(() => {
    if (result.data?.userPOAPs) {
      setTotal(result.data.userPOAPs.totalPOAPs.toString());
    }
  }, [result.data]);

  if (result.error) {
    return null;
  }

  return (
    <Container>
      <Heading>
        <POAPCount>{`All POAPS: ${total}`}</POAPCount>
        <Sorting>
          <SortBy>{'Sort By: '}</SortBy>
          <Select
            data={selectOptions}
            value={sort}
            onChange={(sortValue: SortOptions) => {
              if (sortValue !== sort) {
                setSort(sortValue);
                setGitPOAPs([]);
                setPage(1);
              }
            }}
          />
        </Sorting>
      </Heading>
      <POAPs>
        {gitPOAPs &&
          gitPOAPs.map((gitPOAP) => {
            return (
              <POAPBadge
                key={gitPOAP.tokenId}
                id={gitPOAP.tokenId}
                name={gitPOAP.event.name}
                imgSrc={gitPOAP.event.image_url}
                href={`https://app.poap.xyz/token/${gitPOAP.tokenId}`}
              />
            );
          })}
      </POAPs>
      {result.data?.userPOAPs && result.data.userPOAPs?.totalPOAPs > gitPOAPs.length && (
        <ShowMore
          onClick={() => {
            if (!result.fetching) {
              setPage(page + 1);
            }
          }}
          leftIcon={<FaPlus />}
          variant="outline"
          loading={result.fetching}
        >
          {'Show more'}
        </ShowMore>
      )}
    </Container>
  );
};
