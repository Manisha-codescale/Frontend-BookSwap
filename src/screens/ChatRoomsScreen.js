import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from '../styles/ChatRoomStyles';
import { BASEURL } from '@env';

const ChatRoomsScreen = ({ navigation }) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentUserId = auth().currentUser?.uid;
  //const apiURL = `${BASEURL}/api/chatrooms/${currentUserId}/rooms`;

  // Fetch chat rooms when the screen comes into focus
  const fetchChatRooms = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASEURL}/api/chatrooms/${currentUserId}/rooms`);
      setChatRooms(response.data);
      setError(null);
    } catch (err) {
      console.error('Error loading chat rooms:', err);
      setError('Failed to load chat rooms');
    } finally {
      setLoading(false);
    }
  }, [currentUserId]);
  
  useFocusEffect(
    React.useCallback(() => {
      fetchChatRooms();
      return () => {};
    }, [fetchChatRooms])
  );
  

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const now = new Date();

    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
    return date.toLocaleDateString();
  };

  const openChatRoom = (roomId, userId, userName) => {
    navigation.navigate('ThreadScreen', {
      buyerId: currentUserId,
      sellerId: userId,
      title: userName,
    });
  };

  const renderChatRoom = ({ item }) => (
    <TouchableOpacity
      style={styles.roomItem}
      onPress={() => openChatRoom(item.roomId, item.otherUserId, item.otherUserName)}
    >
      <View style={styles.avatarContainer}>
        {item.otherUserImage ? (
          <Image source={{ uri: item.otherUserImage }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.defaultAvatar]}>
            <Text style={styles.avatarText}>
              {item.otherUserName?.[0]?.toUpperCase()}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.userName}>{item.otherUserName}</Text>
          <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>

      {item.unreadCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.unreadCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchChatRooms}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <FlatList
        data={chatRooms}
        keyExtractor={(item) => item.roomId}
        renderItem={renderChatRoom}
        contentContainerStyle={chatRooms.length === 0 ? styles.emptyList : null}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No conversations yet</Text>
          </View>
        }
      />
    </View>
  );
};

export default ChatRoomsScreen;