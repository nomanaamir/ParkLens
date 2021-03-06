/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  LogBox
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import LandingScreen from './src/screens/landing-screen/index';
import DashboardScreen from './src/screens/dashboard-screen/index';
import PayForSpaceScreen from './src/screens/pay-for-space/index';
import PaidScreen from './src/screens/paid-screen/index';
LogBox.ignoreLogs(['Reanimated 2']);
const Stack = createStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false, cardStyleInterpolator: forFade, }} />
        <Stack.Screen name="dashboard" component={DashboardScreen} options={{ headerShown: false, cardStyleInterpolator: forFade, }} />
        <Stack.Screen name="payForSpace" component={PayForSpaceScreen} options={{ headerShown: false, cardStyleInterpolator: forFade, }} />
        <Stack.Screen name="paid" component={PaidScreen} options={{ headerShown: false, cardStyleInterpolator: forFade, }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
