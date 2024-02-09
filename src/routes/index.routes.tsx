import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import TabRoutes from './tab.routes';

import SignIn from '@screens/Perfil/SignIn';

type Routes = {
  Home: undefined;
  SignIn: undefined;
};

export type AppRoutesNavigationProps = NativeStackNavigationProp<Routes>;

const Stack = createNativeStackNavigator<Routes>();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
