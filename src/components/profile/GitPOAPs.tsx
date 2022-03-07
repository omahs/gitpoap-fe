import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useQuery, gql } from 'urql';
import { Header } from '../shared/elements/Header';
import { GitPoap } from '../../types';
import { Button } from '../shared/elements/Button';
import { Text } from '../shared/elements/Text';
import { TextGray } from '../../colors';
import { Select } from '../shared/elements/Select';
import { FaPlus } from 'react-icons/fa';
import { GitPOAP as GitPOAPBadgeUI } from '../shared/compounds/GitPOAP';

type Props = {
  gitPOAPs?: GitPoap[];
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

const Count = styled(Header)`
  font-size: ${rem(30)};
  line-height: ${rem(42)};
`;

const Sorting = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

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

const GitPOAPsQuery = gql`
  query gitPOAPs {
    userPOAPs(address: "peebeejay.eth") {
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

export const GitPOAPs = ({ gitPOAPs }: Props) => {
  const [result] = useQuery<{
    userPOAPs: {
      gitPOAPs: {
        claim: {
          gitPOAP: {
            repo: {
              name: string;
            };
          };
          poap: {
            event: {
              name: string;
              image_url: string;
            };
            tokenId: string;
          };
        };
      }[];
    };
  }>({
    query: GitPOAPsQuery,
  });

  const selectOptions: { value: SortOptions; label: string }[] = [
    { value: SortOptions.Date, label: 'Date of Claim' },
    { value: SortOptions.Alphabetical, label: 'Alphabetical' },
  ];

  return (
    <Container>
      <Heading>
        <Count>{`GitPOAPs: ${gitPOAPs?.length ?? ''}`}</Count>
        <Sorting>
          <SortBy>{'Sort By: '}</SortBy>
          <Select data={selectOptions} value={SortOptions.Date} />
        </Sorting>
      </Heading>
      <GitPOAPList>
        {gitPOAPs &&
          gitPOAPs.map((gitPOAP) => {
            return (
              <GitPOAPBadge
                key={gitPOAP.id}
                orgName={gitPOAP.orgName}
                name={gitPOAP.name}
                imgSrc={gitPOAP.imgSrc}
              />
            );
          })}
      </GitPOAPList>
      <ShowMore leftIcon={<FaPlus />} variant="outline">
        {'Show more'}
      </ShowMore>
    </Container>
  );
};
