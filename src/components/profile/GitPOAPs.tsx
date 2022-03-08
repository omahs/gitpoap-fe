import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useQuery, gql } from 'urql';
import { GitPOAPGql } from '../../types';
import { GitPOAP as GitPOAPBadgeUI } from '../shared/compounds/GitPOAP';
import { ItemList, SelectOption } from '../shared/compounds/ItemList';

type Props = {
  address: string;
};

type SortOptions = 'date' | 'alphabetical';

const selectOptions: SelectOption<SortOptions>[] = [
  { value: 'date', label: 'Date of Claim' },
  { value: 'alphabetical', label: 'Alphabetical' },
];

const GitPOAPList = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${rem(50)};
`;

const GitPOAPBadge = styled(GitPOAPBadgeUI)`
  &:not(:last-child) {
    margin-right: ${rem(40)};
  }
  margin-top: ${rem(30)};
`;

const GitPOAPsQuery = gql`
  query gitPOAPs($address: String!, $sort: String, $page: Float, $perPage: Float) {
    userPOAPs(address: $address, sort: $sort, page: $page, perPage: $perPage) {
      gitPOAPs {
        claim {
          gitPOAP {
            repo {
              name
            }
          }
        }
        poap {
          event {
            name
            image_url
          }
          tokenId
        }
      }
    }
  }
`;

export const GitPOAPs = ({ address }: Props) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOptions>('date');
  const [gitPOAPs, setGitPOAPs] = useState<GitPOAPGql[]>([]);
  const [total, setTotal] = useState<number>();
  const perPage = 4;

  const [result] = useQuery<{
    userPOAPs: {
      totalGitPOAPs: number;
      gitPOAPs: GitPOAPGql[];
    };
  }>({
    query: GitPOAPsQuery,
    variables: {
      address,
      page,
      perPage,
      sort,
    },
  });

  /* Hook to append new data onto existing list of poaps */
  useEffect(() => {
    setGitPOAPs((prev: GitPOAPGql[]) => {
      if (result.data?.userPOAPs) {
        return [...prev, ...result.data.userPOAPs.gitPOAPs];
      }
      return prev;
    });
  }, [result.data]);

  /* Hook to set total number of poaps */
  useEffect(() => {
    if (result.data?.userPOAPs) {
      setTotal(result.data.userPOAPs.totalGitPOAPs);
    }
  }, [result.data]);

  if (result.error) {
    return null;
  }

  return (
    <ItemList
      title={`GitPOAPs: ${total}`}
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
      <GitPOAPList>
        {gitPOAPs &&
          gitPOAPs.map((gitPOAP) => {
            return (
              <GitPOAPBadge
                key={gitPOAP.claim.poap.tokenId}
                orgName={gitPOAP.claim.gitPOAP.repo.name}
                name={gitPOAP.claim.poap.event.name}
                imgSrc={gitPOAP.claim.poap.event.image_url}
              />
            );
          })}
      </GitPOAPList>
    </ItemList>
  );
};
