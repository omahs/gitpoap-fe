import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Button } from '../elements/Button';
import { GitPOAP } from './GitPOAP';

type Props = {
  imgSrc: string;
  name: string;
  orgName: string;
  description: string;
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClaimButton = styled(Button)`
  margin-top: ${rem(36)};
`;

export const ClaimBlock = ({ imgSrc, name, orgName, description }: Props) => {
  return (
    <Wrapper>
      <GitPOAP imgSrc={imgSrc} name={name} orgName={orgName} description={description} />
      <ClaimButton>{'Claim'}</ClaimButton>
    </Wrapper>
  );
};
