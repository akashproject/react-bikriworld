import React, { useState, useEffect,useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
  } from 'react-native';
import CategoryComponent from '../components/category';

  const CategoryScreen = () => {
    return (
        <div>
          <CategoryComponent/>
        </div>
      );
  };
  
  export default CategoryScreen;