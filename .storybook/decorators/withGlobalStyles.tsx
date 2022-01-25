import React from 'react';
import { GlobalStyles } from '../../src/styles/globalStyles';
import { StyledEngineProvider } from '@mui/material/styles';

export const withGlobalStyles = (storyFn: any) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <GlobalStyles />
        {storyFn()}
      </StyledEngineProvider>
    </>
  );
};
