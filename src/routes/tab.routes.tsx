import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import ToDo from '@screens/ToDo';
import Perfil from '@screens/Perfil';

import {CircleUserRoundIcon, ListTodo} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.bold,
          fontSize: 12,
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.background,
          borderTopWidth: 0,
          paddingTop: 12,
          paddingBottom: 12,
        },
      }}>
      <Tab.Screen
        name="ToDo"
        component={ToDo}
        options={{
          title: 'ToDo',
          tabBarIcon: ({color}) => {
            return <ListTodo color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Perfil',
          tabBarIcon: ({color}) => {
            return <CircleUserRoundIcon color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
