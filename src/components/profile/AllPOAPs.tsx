import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useQuery, gql } from 'urql';
import { POAP } from '../../types';
import { POAPBadge as POAPBadgeUI } from '../shared/elements/POAPBadge';
import { ItemList, SelectOption } from '../shared/compounds/ItemList';

type Props = {
  address: string;
};

type SortOptions = 'date' | 'alphabetical';

const selectOptions: SelectOption<SortOptions>[] = [
  { value: 'date', label: 'Date of Claim' },
  { value: 'alphabetical', label: 'Alphabetical' },
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

export const AllPOAPs = ({ address }: Props) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOptions>('date');
  const [gitPOAPs, setGitPOAPs] = useState<POAP[]>([]);
  const [total, setTotal] = useState<number>();
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

  /* Hook to append new data onto existing list of poaps */
  useEffect(() => {
    setGitPOAPs((prev: POAP[]) => {
      if (result.data?.userPOAPs) {
        return [...prev, ...result.data.userPOAPs.poaps];
      }
      return prev;
    });
  }, [result.data]);

  /* Hook to set total number of poaps */
  useEffect(() => {
    if (result.data?.userPOAPs) {
      setTotal(result.data.userPOAPs.totalPOAPs);
    }
  }, [result.data]);

  if (result.error) {
    return null;
  }

  return (
    <ItemList
      title={`All POAPs: ${total ?? ''}`}
      selectOptions={selectOptions}
      selectValue={sort}
      onSelectChange={(sortValue) => {
        if (sortValue !== sort) {
          setSort(sortValue as SortOptions);
          setGitPOAPs([]);
          setPage(1);
        }
      }}
      isLoading={result.fetching}
      hasShowMoreButton={!!total && gitPOAPs.length < total}
      showMoreOnClick={() => {
        if (!result.fetching) {
          setPage(page + 1);
        }
      }}
    >
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
    </ItemList>
  );
};
