import React, { useState, useEffect,useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
  } from 'react-native';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { LongPressGestureHandler, State,TapGestureHandler,Swipeable } from 'react-native-gesture-handler';

const HomeScreen = () => {
    const [count, setCount] = useState(0);
    const [likeColour, setLikeColour] = useState('#28b5b5');
    const doubleTapRef = useRef(null);
    const LeftContent = props => <Avatar.Icon {...props} icon="star" />

    const todoList = [
        { id: '1', text: 'Learn JavaScript' },
        { id: '2', text: 'Learn React' },
        { id: '3', text: 'Learn TypeScript' },
    ];
    const Separator = () => <View style={styles.itemSeparator} />;

    const onLongPress = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
          alert("I've been pressed for 800 milliseconds");
        }
    };
    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
          console.log("I've been Click Single Time");
        }
    };

    const onDoubleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
          likeColour === '#28b5b5'
            ? setLikeColour('red')
            : setLikeColour('#28b5b5');
        }
    };
    const styles = StyleSheet.create({
        box: {
          width: '100',
          height: '100',
          backgroundColor: '#28b5b5',
          marginTop: 22,
          marginBottom: 22,
        },
        square: {
            width: 150,
            height: 150,
            backgroundColor: likeColour,
            marginTop: 22,
            marginBottom: 22,
        },
      });
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <Container>
         <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
         
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Row>
          <Col xs={4}><Text>Double and Single Tap Gesture Handler</Text></Col>
          <Col xs={4}><Text>Double and Single Tap Gesture Handler</Text></Col>
          <Col xs={4} ><Text>Double and Single Tap Gesture Handler</Text></Col>
        </Row>
        
        <TapGestureHandler
            ref={doubleTapRef}
            onHandlerStateChange={onDoubleTapEvent}
            numberOfTaps={2}
            >
            <View style={styles.square} />
        </TapGestureHandler>
        </Container>
      );
};

export default HomeScreen;