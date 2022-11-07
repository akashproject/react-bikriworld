// In App.js in a new project
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/onBoardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import TabScreen from './src/screens/TabScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    (async () => {
      const appData = localStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
      setIsAppFirstLaunched(true);
        localStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    })();
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="Tab" component={TabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;