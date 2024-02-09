import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

import {CircleUserRoundIcon, ListTodo} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#D73035',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          height: 80,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          paddingTop: 12,
          paddingBottom: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
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
