import React, { useState, useEffect,useRef } from 'react';
import { List,Text,Button } from 'react-native-paper';
import {Container,Row,Col} from 'react-bootstrap';
import { View, StyleSheet } from "react-native";
import { NavigationContainer,createStackNavigator ,useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    },
    top: {
      flex: 0.3,
      backgroundColor: "grey",
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    middle: {
      flex: 0.3,
      backgroundColor: "beige",
      borderWidth: 5,
    },
    signin: {
      backgroundColor: "00986b",
    },

  });
  const AccountScreen = ({ navigation }) => {
    return (
        <div>
          <Container>
            <List.Item
              title="Personal Infomation"
              left={props => <List.Icon {...props} icon="star" />}
            />
            <List.Item
              title="Payment Method"
              left={props => <List.Icon {...props} icon="folder" />}
            />
            <List.Item
              title="Address"
              left={props => <List.Icon {...props} icon="map" />}
            />
            <List.Item
              title="Pickups"
              left={props => <List.Icon {...props} icon="cart" />}
            />
            <Text variant="headlineSmall">Additional Menus</Text>
            <List.Item
              title="About Us"
              left={props => <List.Icon {...props} icon="folder" />}
            />
            <List.Item
              title="Help"
              left={props => <List.Icon {...props} icon="folder" />}
            />
            <Button icon="login" buttonColor="green" mode="contained" 
              onPress={() => navigation.navigate("ProfileScreen") } >
              Login In
            </Button>
          </Container>
        </div>
      );
  };
  
  export default AccountScreen;