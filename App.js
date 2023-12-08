import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Account, AddMenu, Detail, Discover, EditMenu} from './src/screens';
import Home from './src/screens/Home';
import {Home3, User} from 'iconsax-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00AA13',
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home3
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, color}) => (
            <User
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTab"
          component={BottomTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Discover"
          component={Discover}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddMenu"
          component={AddMenu}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditMenu"
          component={EditMenu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
