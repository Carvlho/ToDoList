import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {Routes} from '@routes/index.routes';

import theme from '@global/styles/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Routes />
    </ThemeProvider>
  );
}

export default App;
