import React, { useState, useEffect,useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CategoryScreen from './CategoryScreen';
import { Ionic } from 'react-native-vector-icons/Ionicons';
const TabScreen = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
          screenOptions={({route})=> ({
            tabBarIcon:({focused,size,colour}) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline'
                  break;  
                case 'Category':
                  iconName = focused ? 'apps-outline' : 'apps-outline'
                  break;        
                default:
                  break;
              }
              return <Ionic name={iconName} size={size} color={colour} />
            }
          })}>
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Category" component={CategoryScreen} />

         <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      );
}

export default TabScreen;