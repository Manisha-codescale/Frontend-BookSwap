import { StyleSheet } from "react-native";

const BookStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
      paddingTop: 30,
    },
    isbn: {
      fontSize: 14,
      color: '#555',
      marginBottom: 4,
    },
    name: {
      fontSize: 30,
      fontWeight: '700',
        textAlign: 'center',
        marginBottom: 8,
        color: '#1d3557',
    },
    author: {
      fontSize: 18,
      color: '#666',
      marginBottom: 10,
    },
    image: {
      width: 160,
      height: 240,
      resizeMode: 'contain',
      marginVertical: 16,
      borderRadius: 10,
    },
    infoBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginVertical: 4,
      borderBottomWidth: 0.5,
      borderBottomColor: '#ccc',
      paddingBottom: 4,
    },
    label: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    value: {
      fontSize: 18,
      color: '#555',
    },
    condition: {
        fontSize: 18,
        color: '#dc143c',
      },
    button: {
      backgroundColor: '#1d3557',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    descriptionBox: {
      marginTop: 20,
      width: '100%',
    },
    description: {
      fontSize: 15,
      color: '#444',
      marginTop: 4,
      lineHeight: 22,
    },
  });

export default BookStyles;
