import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { GitPOAPBadge } from '../elements/GitPOAPBadge';
import { Title } from '../elements/Title';
import { TextLight } from '../../../colors';

type Props = {
  imgSrc: string;
  name: string;
  orgName: string;
  description?: string;
  className?: string;
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${rem(150)};
`;

const TitleStyled = styled(Title)`
  margin-top: ${rem(10)};
  text-align: center;
`;

const OrgName = styled.div`
  font-family: PT Mono;
  font-style: normal;
  font-weight: bold;
  font-size: ${rem(11)};
  line-height: ${rem(18)};
  text-align: center;
  letter-spacing: ${rem(1.2)};
  text-transform: uppercase;
  color: ${TextLight};
  margin-top: ${rem(8)};
`;

const Description = styled.div`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem(11)};
  line-height: ${rem(14)};
  text-align: center;
  letter-spacing: ${rem(-0.1)};
  color: ${TextLight};
  margin-top: ${rem(8)};
`;

export const GitPOAP = ({ className, imgSrc, name, orgName, description }: Props) => {
  return (
    <Wrapper className={className}>
      <GitPOAPBadge size="sm" imgUrl={imgSrc} />
      <Info>
        <TitleStyled>{name}</TitleStyled>
        <OrgName>{orgName}</OrgName>
        {description && <Description>{description}</Description>}
      </Info>
    </Wrapper>
  );
};
