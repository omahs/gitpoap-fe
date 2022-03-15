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
  justify-content: flex-start;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  margin-top: ${rem(14)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ClaimBlock = ({ imgSrc, name, orgName, description }: Props) => {
  return (
    <Wrapper>
      <GitPOAP imgSrc={imgSrc} name={name} orgName={orgName} description={description} />
      <ButtonWrapper>
        <Button onClick={() => console.warn('clicking claim')}>{'Claim'}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
