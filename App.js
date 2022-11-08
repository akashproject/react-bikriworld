// In App.js in a new project
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnboardingScreen from './src/screens/onBoardingScreen';
import TabScreen from './src/screens/TabScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();
const nativeStack = createNativeStackNavigator();
const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };
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
      <PaperProvider  theme={theme} >
        <NavigationContainer>
          <TabScreen />
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
        </NavigationContainer>

      </PaperProvider>
    )
  );
};

export default App;