import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {useTheme} from 'styled-components';

import {useAuth} from '@hooks/auth';

import TabRoutes from './tab.routes';

import SignIn from '@screens/Perfil/SignIn';

type Routes = {
  Home: undefined;
  SignIn: undefined;
};

export type AppRoutesNavigationProps = NativeStackNavigationProp<Routes>;

const Stack = createNativeStackNavigator<Routes>();

export const Routes: React.FC = () => {
  const {setUser} = useAuth();
  const theme = useTheme();

  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return <ActivityIndicator size="large" color={theme.colors.primary} />;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
