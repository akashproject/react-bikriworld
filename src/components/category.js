import React, { useEffect, useState } from 'react';
import { Appbar } from 'react-native-paper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import GlobalStyleSheet from '../../GlobalStyleSheet';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    ActivityIndicator,
    Image
  } from 'react-native';
const CategoryComponent = () => {
    const [isLoading, setLoading] = useState(true);
    const [categoryList, setData] = useState([]);
  
    const getMovies = async () => {
        try {
         const response = await fetch('https://bikriworld.com/api/categories');
         const data = await response.json();
         setData(data);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }
   
     useEffect(() => {
       getMovies();
     }, []);

  return (
    <Container style={GlobalStyleSheet.appPaddingTop}>
        {isLoading ? <ActivityIndicator/> : (
        <Row >
            {categoryList.map((item,key) => {
                return (
                <Col xs={6} key={key} style={GlobalStyleSheet.appPadding} >
                    <Image source={require('../assets/icon/'+item.icon+'.png')}  style={{width: 60, height: 60}} />
                </Col>
                );
            })}   
        </Row>
        )}
    </Container>
  );
};

export default CategoryComponent;