import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

const ChatThreadItem = ({ item, onPress, styles }) => {
  return (
    <TouchableOpacity
      style={styles.threadItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.threadUser}>{item._id}</Text>
        <Text style={styles.threadMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
      <Text style={styles.threadTime}>
        {item.lastTime ? moment(item.lastTime).fromNow() : 'Just now'}
      </Text>
    </TouchableOpacity>
  );
};


export default ChatThreadItem;
