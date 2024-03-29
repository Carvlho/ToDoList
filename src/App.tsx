import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';

import {Routes} from '@routes/index.routes';

import {AuthProvider} from '@hooks/auth';
import {TasksProvider} from '@hooks/tasks';

import theme from '@global/styles/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TasksProvider>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" />

          <Routes />
        </TasksProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
