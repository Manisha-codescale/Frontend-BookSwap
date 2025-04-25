import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import io from 'socket.io-client';
import styles from '../styles/ThreadStyles';
import {BASEURL} from '@env';

const socket = io(BASEURL);

const ThreadScreen = ({route}) => {
  const {buyerId, sellerId} = route.params;
  const roomId = [buyerId, sellerId].sort().join('_');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (!socket.connected) {
        socket.connect();
      }

      socket.emit('join_room', roomId);

      const handleHistory = history => {
        setMessages(history.reverse()); 
      };

      const handleReceive = data => {
        setMessages(prev => [...prev, data]);
      };

      socket.on('chat_history', handleHistory);
      socket.on('receive_message', handleReceive);

      return () => {
        socket.off('chat_history', handleHistory);
        socket.off('receive_message', handleReceive);
      };
    }, [roomId]),
  );

  const sendMessage = () => {
    socket.emit('send_message', {
      roomId,
      message,
      senderId: buyerId,
    });
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          const isSender = item.senderId === buyerId;
          return (
            <View style={[styles.messageContainer, isSender ? styles.right : styles.left]}>
              <Text style={styles.message}>
                {/* <Text style={styles.sender}>{item.senderId}: </Text> */}
                {item.message}
              </Text>
            </View>
          );
        }}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

export default ThreadScreen;
