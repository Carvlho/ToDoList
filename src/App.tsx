import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';

import TabRoutes from './routes/tab.routes';

import theme from './global/styles/theme';
import {ThemeProvider} from 'styled-components';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />

        <TabRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
