import { StyleSheet } from "react-native";

const ThreadStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
      messageContainer: {
        marginVertical: 5,
        maxWidth: '70%',
        padding: 10,
        borderRadius: 10,
      },
      left: {
        alignSelf: 'flex-start',
        backgroundColor: '#007aff',
      },
      right: {
        alignSelf: 'flex-end',
        backgroundColor: '#007aff',
      },
      message: {
        color: 'white',
      },
      sender: {
        fontWeight: 'bold',
        color: 'white',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginTop: 10,
        borderRadius: 8,
      },
});

export default ThreadStyles;