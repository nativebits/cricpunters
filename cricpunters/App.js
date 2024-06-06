import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './components/profile/ProfileScreen'
import MatchesScreen from './components/Matches/MatchesScreen'


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Create the Drawer Navigator component
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Matches" component={MatchesScreen} />
    </Tab.Navigator>
  );
}
// Drawer Navigator Component
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Matches" component={MatchesScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Fixtures" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;