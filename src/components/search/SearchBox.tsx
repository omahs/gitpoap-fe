import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { getHotkeyHandler, useDebouncedValue } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import { Loader } from '../shared/elements/Loader';
import { rem } from 'polished';
import { Input } from '../shared/elements/Input';
import { GitPOAPBadgeSearchItem, NoResultsSearchItem, ProfileSearchItem } from './SearchItem';
import { BackgroundPanel2, TextGray } from '../../colors';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useWeb3Context } from '../wallet/Web3ContextProvider';
import {
  useOrgSearchByNameQuery,
  useRepoSearchByNameQuery,
  useSearchForStringQuery,
} from '../../graphql/generated-gql';
import { Text } from '@mantine/core';
import { BREAKPOINTS } from '../../constants';
import { isAddress } from 'ethers/lib/utils';

const Container = styled.div<{ isActive: boolean }>`
  margin-right: ${rem(25)};
  width: ${rem(300)};
  position: relative;
  min-width: ${rem(240)};
  transition: width 200ms ease-in-out;

  @media (max-width: ${rem(BREAKPOINTS.lg)}) {
    width: ${rem(240)};
  }

  @media (max-width: ${rem(BREAKPOINTS.md)}) {
    width: 100%;
  }

  /* Any screen width ABOVE breakpoint XL */
  @media (min-width: ${rem(BREAKPOINTS.xl)}) {
    ${({ isActive }) => (isActive ? `width: ${rem(400)};` : null)}
  }
`;

const SearchInput = styled(Input)`
  width: inherit;
  min-width: inherit;
  .mantine-TextInput-input {
    &::placeholder {
      color: ${TextGray};
      text-transform: uppercase;
    }
  }
`;

const Results = styled.div`
  padding: ${rem(10)} 0;
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  top: ${rem(45)};
  left: 0;
  width: inherit;
  min-width: inherit;
  background-color: ${BackgroundPanel2};
  z-index: 1;
  border-radius: ${rem(6)};
`;

const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:first-child) {
    margin-top: ${rem(15)};
  }
`;

const SectionTitle = styled(Text)`
  padding-left: ${rem(10)};
  font-family: 'PT Mono';
  line-height: ${rem(15)};
  color: ${TextGray};
  font-size: ${rem(11)};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${rem(5)};
  letter-spacing: ${rem(2)};
`;

type ProfileResult = {
  id: number;
  address: string;
  href: string;
  ensName?: string;
};

type Props = {
  className?: string;
};

export const SearchBox = ({ className }: Props) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const { web3Provider, infuraProvider } = useWeb3Context();
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [profileResults, setProfileResults] = useState<ProfileResult[]>([]);
  const [areResultsLoading, setAreResultsLoading] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [cursor, setCursor] = useState<number>(-1);
  const isSlashPressed = useKeyPress({ targetKey: '/' });

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([inputRef, resultsRef], () => setIsSearchActive(false));
  const [result, refetchProfiles] = useSearchForStringQuery({
    pause: true,
    variables: {
      text: debouncedQuery.trim(),
    },
  });
  const [repoResults] = useRepoSearchByNameQuery({
    variables: { search: debouncedQuery.trim() },
  });
  const [orgResults, refetchOrgs] = useOrgSearchByNameQuery({
    pause: true,
    variables: { search: debouncedQuery.trim() },
  });

  const repos = repoResults.data?.repos;
  const orgs = orgResults.data?.organizations;
  const isLoading =
    result.fetching || repoResults.fetching || orgResults.fetching || areResultsLoading;
  const hasAnyResults =
    profileResults.length > 0 || (repos && repos?.length > 0) || (orgs && orgs?.length > 0);

  /* Sort orgs based on the most recent repo update time */
  const sortedOrgs = orgs?.sort((a, b) => {
    if (a.repos[0].lastPRUpdatedAt < b.repos[0].lastPRUpdatedAt) {
      return 1;
    }
    if (a.repos[0].lastPRUpdatedAt > b.repos[0].lastPRUpdatedAt) {
      return -1;
    }
    return 0;
  });

  /* auto complete list counts */
  const profilesCount = profileResults.length < 4 ? profileResults.length : 4;
  const reposCount = repos?.length ?? 0;
  const orgsCount = orgs?.length ?? 0;
  const orgStartIndex = profilesCount + reposCount;
  const totalCount = profilesCount + reposCount + orgsCount;

  /* This hook is used to transform the search results into a list of SearchItems & store the results in state */
  useEffect(() => {
    const prepareResults = async () => {
      if (debouncedQuery.length > 0) {
        setAreResultsLoading(true);
        let results: ProfileResult[] = [];
        if (result.data?.search.profilesByAddress) {
          const profilesByAddress = result.data.search.profilesByAddress.map((profile) => ({
            id: profile.id,
            address: profile.address,
            href: `/p/${profile.address}`,
          }));

          results = [...profilesByAddress];
        }
        if (result.data?.search.profileByENS) {
          const profileByENSData = result.data?.search.profileByENS;
          const profileByENS = {
            id: profileByENSData.profile.id,
            address: profileByENSData.profile.address,
            href: `/p/${profileByENSData.ens}`,
            ensName: profileByENSData.ens,
          };

          results = [profileByENS, ...results];
        }

        /* Deal with the situation of an .eth name OR address that isn't explicitly found in the search results */
        if (results.length === 0) {
          if (debouncedQuery.endsWith('.eth')) {
            const address = await (web3Provider ?? infuraProvider)?.resolveName(debouncedQuery);
            const ensName = debouncedQuery;
            if (address) {
              results = [
                {
                  id: 0,
                  address,
                  ensName: ensName,
                  href: `/p/${ensName}`,
                },
              ];
            }
          } else if (isAddress(debouncedQuery)) {
            const address = debouncedQuery;
            results = [
              {
                id: 0,
                address,
                href: `/p/${address}`,
              },
            ];
          }
        }
        setAreResultsLoading(false);
        setProfileResults(results);
      }
    };

    prepareResults();
  }, [debouncedQuery, result.data, web3Provider, infuraProvider]);

  /* This hook is used to refetch search data when the debounced query changes */
  useEffect(() => {
    if (debouncedQuery.length >= 1) {
      if (refetchProfiles) {
        refetchProfiles();
      }
      if (refetchOrgs) {
        refetchOrgs();
      }
    }
  }, [debouncedQuery, refetchProfiles, refetchOrgs]);

  /* This hook is used to clear stored results to ensure no random autocomplete flashes - urql caches results ~ so 🤪 */
  useEffect(() => {
    setProfileResults([]);
    setCursor(-1);
  }, [query, debouncedQuery]);

  /* This hook is used to set focus on search input */
  useEffect(() => {
    if (isSlashPressed) {
      setCursor(-1);
      inputRef.current?.focus();
    }
  }, [isSlashPressed]);

  /* Handle keydown on search input box */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // arrow up/down button should select next/previous list element
      if (e.code === 'ArrowUp' && cursor > -1) {
        setCursor((prevCursor) => prevCursor - 1);
        e.preventDefault();
      } else if (e.code === 'ArrowDown' && cursor < totalCount - 1) {
        setCursor((prevCursor) => prevCursor + 1);
        e.preventDefault();
      } else if (e.code === 'Enter' && cursor > -1) {
        setQuery('');
        setIsSearchActive(false);
        setProfileResults([]);

        /* profile is selected */
        if (cursor < profilesCount) {
          inputRef.current?.blur();
          router.push(profileResults[cursor].href);
        } else if (cursor < orgStartIndex) {
          inputRef.current?.blur();
          /* repo is selected */
          const repoIndex = cursor - profilesCount;
          const repo = repos && repos[repoIndex];
          router.push(`/gh/${repo?.organization.name}/${repo?.name}`);
        } else {
          inputRef.current?.blur();
          /* org is selected */
          const orgIndex = cursor - orgStartIndex;
          const org = orgs && orgs[orgIndex];
          router.push(`/gh/${org?.name}`);
        }
        e.preventDefault();
      }
    },
    [cursor, profilesCount, orgStartIndex, totalCount],
  );

  return (
    <Container
      className={className}
      onFocus={() => setIsSearchActive(true)}
      onKeyDown={getHotkeyHandler([
        [
          'Escape',
          () => {
            setIsSearchActive(false);
            inputRef.current?.blur();
          },
        ],
      ])}
      isActive={isSearchActive}
    >
      <SearchInput
        inputRef={inputRef}
        placeholder={'POAP.ETH OR 0xf6B6...'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={isLoading ? <Loader size={18} /> : <FaSearch />}
        onKeyDown={handleKeyDown}
      />

      {isSearchActive && (
        <Results ref={resultsRef}>
          {profileResults.length > 0 && (
            <ResultsSection>
              <SectionTitle>{'Profiles:'}</SectionTitle>
              {profileResults.slice(0, 4).map((profile, index) => {
                return (
                  <ProfileSearchItem
                    key={profile.id}
                    href={profile.href}
                    address={profile.address}
                    ensName={profile.ensName}
                    onClick={() => {
                      setQuery('');
                      setIsSearchActive(false);
                      setProfileResults([]);
                    }}
                    isSelected={cursor === index}
                  />
                );
              })}
            </ResultsSection>
          )}
          {repos && repos?.length > 0 && (
            <ResultsSection>
              <SectionTitle>{'Repos:'}</SectionTitle>
              {repos.map((repo, index) => {
                return (
                  <GitPOAPBadgeSearchItem
                    key={repo.id}
                    href={`/gh/${repo.organization.name}/${repo.name}`}
                    text={repo.name}
                    subText={repo.organization.name}
                    repoId={repo.id}
                    onClick={() => {
                      setQuery('');
                      setIsSearchActive(false);
                      setProfileResults([]);
                    }}
                    isSelected={cursor === profilesCount + index}
                  />
                );
              })}
            </ResultsSection>
          )}
          {sortedOrgs && sortedOrgs?.length > 0 && (
            <ResultsSection>
              <SectionTitle>{'Orgs:'}</SectionTitle>
              {sortedOrgs.map((org, index) => {
                return (
                  <GitPOAPBadgeSearchItem
                    key={org.id}
                    href={`/gh/${org.name}`}
                    text={org.name}
                    onClick={() => {
                      setQuery('');
                      setIsSearchActive(false);
                      setProfileResults([]);
                    }}
                    repoId={org.repos[0].id}
                    isSelected={cursor === orgStartIndex + index}
                  />
                );
              })}
            </ResultsSection>
          )}
          {!isLoading && !hasAnyResults && debouncedQuery.length > 1 && (
            <ResultsSection>
              <NoResultsSearchItem />
            </ResultsSection>
          )}
        </Results>
      )}
    </Container>
  );
};
