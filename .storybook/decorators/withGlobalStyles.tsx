import React from 'react';
import { GlobalStyles } from '../../src/styles/globalStyles';
import { MantineProvider } from '@mantine/core';

export const withGlobalStyles = (storyFn: any) => {
  return (
    <>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <GlobalStyles />
        {storyFn()}
      </MantineProvider>
    </>
  );
};
