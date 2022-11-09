import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    Image
  } from 'react-native';
const OrderComponent = () => {
  
  return (
    <Container>
        <Row>
            <Col xs={4}>
                <Image source={require('../assets/icon/motorcycle.png')}  style={{width: 60, height: 60}} />
            </Col>
            <Col xs={4}>
                <Text>Double and Single Tap Gesture Handler</Text>
            </Col>
            <Col xs={4} ><Text>Double and Single Tap Gesture Handler</Text></Col>
        </Row>
    </Container>
  );
};

export default OrderComponent;