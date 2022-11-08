import React, { useState, useEffect,useRef } from 'react';
import { createBottomTabNavigator,MaterialCommunityIcons } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import AccountScreen from './AccountScreen';
import OrderScreen from './OrderScreen';
import GlobalStyles from '../../GlobalStyleSheet';

const TabScreen = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home';
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline'
                break;  
              case 'category':
                iconName = focused ? 'apps-outline' : 'apps-outline'
                break;        
              case 'account':
                iconName = focused ? 'person-circle-outline' : 'person-circle-outline'
                break;  
              case 'order':
                iconName = focused ? 'cart' : 'cart'
                break;  
              default:
                break;
            }
            // You can return any component that you like here!
            return <IonIcon name={iconName} size={20} color={GlobalStyles.siteMainColor} />;
          },
        })}
        >
         <Tab.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
         <Tab.Screen name="category" component={CategoryScreen} options={{ title: 'Category' }} />
         <Tab.Screen name="account" component={AccountScreen} options={{ title: 'Account' }} />
         <Tab.Screen name="order" component={OrderScreen} options={{ title: 'Order' }} />
        </Tab.Navigator>
      );
}

export default TabScreen;