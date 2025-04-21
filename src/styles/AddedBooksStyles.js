import { StyleSheet } from "react-native";

const AddedBooksStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 22,
      fontWeight: '700',
      paddingHorizontal: 16,
      marginBottom: 10,
      color: '#1d3557',
    },
    scrollContent: {
      paddingHorizontal: 16,
      paddingBottom: 100,
        },
    card: {
      flexDirection: 'row',
      backgroundColor: '#fafafa',
      padding: 10,
      marginBottom: 12,
      borderRadius: 12,
      elevation: 1,
      alignItems: 'center',
        },
        column: {
            flex: 1,
            alignItems: 'center',
        },
    textGap: {
        flexDirection: 'row',
        width: ' 100%',
        fontSize: 13,
        color: '#555',
        marginTop: 2,
        justifyContent: 'space-between',
        marginVertical: 8,
        },
    bookImage: {
      width: 60,
      height: 90,
      borderRadius: 6,
      resizeMode: 'cover',
    },
    bookInfo: {
      flex: 1,
      marginLeft: 12,
    },
    isbn: {
      fontSize: 12,
      color: '#777',
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1d3557',
    },
    author: {
      fontSize: 14,
      color: '#444',
    },
    details: {
        fontSize: 13,
        color: '#555',
      marginTop: 2,
        },
    viewRow: {
            fontSize: 13,
            color: '#555',
          marginTop: 2,
            },
    condition: {
            //fontSize: 13,
        color: '#dc143c',
        textAlign: 'center' ,
            //marginTop: 2,
    },
    editIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        padding: 5,
      },
    fab: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#1d3557',
      width: 56,
      height: 56,
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    fabText: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    });
    
    export default AddedBooksStyles;
    