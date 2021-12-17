import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { SubHeader } from '../shared/SubHeader';
import { Gray6 } from '../../colors';

const SubHeaderStyled = styled(SubHeader)`
  margin-bottom: ${rem(30)};
  display: flex;
`;

const Underscore = styled.div`
  color: ${Gray6};
`;

export const SectionHeader = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <SubHeaderStyled className={props.className}>
        <Underscore>{'_'}</Underscore>
        {props.children}
      </SubHeaderStyled>
    </>
  );
};
