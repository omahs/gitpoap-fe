import React from 'react';
import { GlobalStyles } from '../../src/styles/globalStyles';

export const withGlobalStyles = (storyFn: any) => {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
};
