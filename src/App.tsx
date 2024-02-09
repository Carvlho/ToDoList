import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import TabRoutes from './routes/tab.routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <TabRoutes />
    </NavigationContainer>
  );
}

export default App;
