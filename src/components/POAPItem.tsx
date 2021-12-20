import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  poap: POAP;
};

export type POAP = {
  created: string;
  owner: string;
  tokenId: string;
  event: {
    city: string;
    country: string;
    description: string;
    end_date: string;
    event_url: string;
    expiry_date: string;
    fancy_id: string;
    id: number;
    image_url: string;
    name: string;
    start_date: string;
    supply: number;
    year: number;
  };
};

const Container = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  max-width: ${rem(180)};
  height: ${rem(180)};
  border-radius: 50%;
`;

export const POAPItem = (props: Props) => {
  const { poap } = props;
  return (
    <Container>
      <Image src={poap.event.image_url} alt={poap.event.description} />
    </Container>
  );
};
