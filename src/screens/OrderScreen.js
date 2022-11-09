import React, { useState, useEffect,useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
  } from 'react-native';
import OrderComponent from '../components/orders';

  const OrderScreen = () => {
    return (
      <OrderComponent/>
    );
  };
  
  export default OrderScreen;