import { StyleSheet } from "react-native";

const ChatRoomStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#007aff',
        textAlign: 'left',
      marginVertical: 20,
        paddingHorizontal: 20,
      },
    errorText: {
      fontSize: 16,
      color: '#ff3b30',
      marginBottom: 20,
      textAlign: 'center',
    },
    retryButton: {
      backgroundColor: '#007aff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
    },
    retryText: {
      color: '#ffffff',
      fontWeight: '600',
    },
    roomItem: {
      flexDirection: 'row',
      padding: 16,
      backgroundColor: '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      alignItems: 'center',
    },
    avatarContainer: {
      marginRight: 16,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    defaultAvatar: {
      backgroundColor: '#007aff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      color: '#ffffff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    contentContainer: {
      flex: 1,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    userName: {
      fontSize: 16,
      fontWeight: '600',
    },
    timestamp: {
      fontSize: 12,
      color: '#8e8e93',
    },
    lastMessage: {
      fontSize: 14,
      color: '#3c3c43',
      opacity: 0.6,
    },
    badge: {
      backgroundColor: '#007aff',
      height: 20,
      minWidth: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 6,
    },
    badgeText: {
      color: '#ffffff',
      fontSize: 12,
      fontWeight: '600',
    },
    emptyList: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyContainer: {
      padding: 20,
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 16,
      color: '#8e8e93',
    },
  });
  
export default ChatRoomStyles;