import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from 'urql';
import { useDebouncedValue } from '@mantine/hooks';
import { FaSearch } from 'react-icons/fa';
import { Loader } from '@mantine/core';
import { rem } from 'polished';
import { Input } from '../shared/elements/Input';
import { SearchItem } from './SearchItem';
import { BackgroundPanel } from '../../colors';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

type Props = {
  className?: string;
};

type Result = {
  id: number;
  text: string;
  href: string;
  name?: string;
};

const SearchQuery = gql`
  query searchForString($text: String!) {
    search(text: $text) {
      profilesByAddress {
        id
        address
      }
      profileByENS {
        profile {
          id
          address
        }
        ens
      }
    }
  }
`;

type ProfileWithENS = {
  profile: {
    id: number;
    address: string;
  };
  ens: string;
};

export type SearchQueryRes = {
  search: {
    profilesByAddress: {
      id: number;
      address: string;
    }[];
    profileByENS: ProfileWithENS | null;
  };
};

const Container = styled.div`
  position: relative;
`;

const Results = styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  bottom: ${rem(-55)};
  left: 0;
  min-width: ${rem(198)};
  padding: ${rem(6)} ${rem(6)} ${rem(6)} ${rem(6)};
  background-color: ${BackgroundPanel};
  z-index: 1;
  border-radius: ${rem(6)};
`;

const SearchIcon = styled(FaSearch)``;

export const SearchBox = ({ className }: Props) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [areResultsVisible, setAreResultsVisible] = useState<boolean>(false);
  const [{ data, fetching }, refetch] = useQuery<SearchQueryRes>({
    query: SearchQuery,
    pause: true,
    requestPolicy: 'network-only',
    variables: {
      text: debouncedQuery,
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([inputRef, resultsRef], () => setAreResultsVisible(false));

  useEffect(() => {
    let results: Result[] = [];
    if (data?.search.profilesByAddress) {
      const profilesByAddress = data.search.profilesByAddress.map(
        (profile): Result => ({
          id: profile.id,
          text: profile.address,
          href: `/p/${profile.address}`,
        }),
      );

      results = [...profilesByAddress];
    }
    if (data?.search.profileByENS) {
      const profileByENSData = data?.search.profileByENS;
      const profileByENS = {
        id: profileByENSData.profile.id,
        text: profileByENSData.profile.address,
        href: `/p/${profileByENSData.ens}`,
        name: profileByENSData.ens,
      };

      results = [profileByENS, ...results];
    }

    setSearchResults(results);
  }, [query, data]);

  useEffect(() => {
    if (debouncedQuery.length > 3 && refetch) {
      refetch();
    }
    if (debouncedQuery.length == 0) {
      console.log('clearing results');
      setSearchResults([]);
    }
  }, [debouncedQuery, refetch]);

  return (
    <Container className={className} onFocus={() => setAreResultsVisible(true)}>
      <Input
        inputRef={inputRef}
        placeholder={'SEARCH...'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={fetching ? <Loader size={18} /> : <FaSearch />}
      />

      {areResultsVisible && searchResults.length > 0 && debouncedQuery.length > 0 && (
        <Results ref={resultsRef}>
          {searchResults.map((profile, i) => {
            return (
              <SearchItem
                key={i}
                href={profile.href}
                text={profile.name ?? profile.text}
                onClick={() => {
                  console.log('calling the ONCLICK');
                  setQuery('');
                  setAreResultsVisible(false);
                  setSearchResults([]);
                }}
              />
            );
          })}
        </Results>
      )}
    </Container>
  );
};
