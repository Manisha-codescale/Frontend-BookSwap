import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {UserContext} from '../context/UserContext';
import auth from '@react-native-firebase/auth';
import styles from '../styles/ChatRoomSTyles';

const ChatRoomsScreen = ({navigation, route}) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentUser = auth().currentUser;
  const currentUserId = currentUser?.uid;

  useFocusEffect(
    React.useCallback(() => {
      const fetchRooms = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `http://10.0.2.2:3000/api/chatrooms/${currentUserId}/rooms`,
          );
          setChatRooms(response.data);
          setError(null);
        } catch (err) {
          console.error('Error fetching chat rooms:', err);
          setError('Failed to load chat rooms');
        } finally {
          setLoading(false);
        }
      };

      fetchRooms();
      return () => {};
    }, [currentUserId]),
  );

  const formatTimestamp = timestamp => {
    if (!timestamp) return '';

    const date = new Date(timestamp);
    const now = new Date();

    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    }

    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], {month: 'short', day: 'numeric'});
    }

    return date.toLocaleDateString();
  };

  const navigateToChat = (roomId, otherUserId, otherUserName) => {
    navigation.navigate('ThreadScreen', {
      buyerId: currentUserId,
      sellerId: otherUserId,
      title: otherUserName,
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.roomItem}
      onPress={() =>
        navigateToChat(item.roomId, item.otherUserId, item.otherUserName)
      }>
      <View style={styles.avatarContainer}>
        {item.otherUserImage ? (
          <Image source={{uri: item.otherUserImage}} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.defaultAvatar]}>
            <Text style={styles.avatarText}>
              {item.otherUserName.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.userName}>{item.otherUserName}</Text>
          <Text style={styles.timestamp}>
            {formatTimestamp(item.timestamp)}
          </Text>
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
      {/* title */}
      <Text style={styles.title}>Chat</Text>
    <View style={styles.container}>
      
      <FlatList
        data={chatRooms}
        keyExtractor={item => item.roomId}
        renderItem={renderItem}
        contentContainerStyle={chatRooms.length === 0 ? styles.emptyList : null}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No conversations yet</Text>
          </View>
        }
        />
        </View>
    </View>
  );
};

export default ChatRoomsScreen;
