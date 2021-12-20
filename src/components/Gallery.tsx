import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { useWeb3Context } from '../wallet/Web3ContextProvider';
import { POAPItem, POAP } from './POAPItem';

const Container = styled.div`
  margin: 40px 350px;
`;
const POAPGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Gallery = () => {
  const { isConnected, address } = useWeb3Context();
  const { data, error } = useSWR<POAP[]>(
    isConnected ? `https://api.poap.xyz/actions/scan/${address}` : null,
    (url: string) =>
      fetch(url, { headers: { Accept: 'application/json' } }).then((res) => res.json()),
  );

  return (
    <Container>
      <POAPGallery>
        {data &&
          !error &&
          data.map((poap) => {
            return <POAPItem poap={poap} key={poap.tokenId} />;
          })}
      </POAPGallery>
    </Container>
  );
};
