import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {useTheme} from 'styled-components';

import {useAuth} from '@hooks/auth';

import TabRoutes from './tab.routes';

import SignIn from '@screens/Perfil/SignIn';
import AddTask from '@screens/AddTask';
import SignUp from '@screens/Perfil/SignUp';

type Routes = {
  Home: undefined | any;
  SignIn: undefined;
  SignUp: undefined;
  AddTask: undefined;
};

export type AppRoutesNavigationProps = NativeStackNavigationProp<Routes>;

const Stack = createNativeStackNavigator<Routes>();

export const Routes: React.FC = () => {
  const {user, setUser} = useAuth();
  const theme = useTheme();

  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing)
    return <ActivityIndicator size="large" color={theme.colors.primary} />;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user !== null ? 'Home' : 'SignIn'}>
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
