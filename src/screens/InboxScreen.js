import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { getChatThreads } from '../api/chatRoutes';
import styles from '../styles/InboxStyles';
import ChatThreadItem from '../components/ChatThreadComponent';

const InboxScreen = ({ navigation }) => {
    const userId = 'user123'; 
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let intervalId;
    const fetchThreads = async () => {
      try {
        const chatThreads = await getChatThreads(userId);
        setThreads(chatThreads);
      } catch (error) {
        console.error('Error fetching chat threads:', error);
        setErrorMsg('Could not load inbox.');
      } finally {
        setLoading(false);
      }
    };

    fetchThreads();
    intervalId = setInterval(fetchThreads, 5000);

    return () => clearInterval(intervalId); 
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#1d3557" />
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={threads}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <ChatThreadItem
          item={item}
          onPress={() => navigation.navigate('ChatScreen', { otherUserId: item._id })}
          styles={styles}
        />
      )}
      ListHeaderComponent={<Text style={styles.screenTitle}>Inbox</Text>}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default InboxScreen;
