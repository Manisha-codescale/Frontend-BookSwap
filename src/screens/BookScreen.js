import {
  View,
  Image,
  Text,
  Touchable,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import styles from '../styles/BookStyles';
import {getBookById} from '../api/bookRoutes';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {deleteBook} from '../api/bookRoutes';

const BookScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {bookId} = route.params;
  const currentUser = auth().currentUser;
  const buyerId = currentUser?.uid;
  console.log('BuyerID:', buyerId);

  const [book, setBook] = useState([]);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const data = await getBookById(bookId);
        console.log('===============', data);
        setBook(data);
      } catch (error) {
        console.error('Error loading books:', error);
      }
    };

    loadBook();
  }, [bookId]);

  const DeleteBookById = async () => {
    try {
      const response = await deleteBook(bookId);
      console.log('Book deleted successfully!');
      navigation.navigate('TabNavigator', {
        screen: 'AddedBooksScreen',
      });
    } catch (error) {
      console.error('Error deleting book:', error);
      Alert.alert('Error', 'Failed to delete the book. Please try again.');
    }
  };

  const DeleteConfirm = () =>
    Alert.alert('Delete Book', 'Do you want to delete this book ?', [
      {
        text: 'Yes',
        onPress: DeleteBookById,
        //onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'No', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.name}>{book.name}</Text>
        <Text style={styles.isbn}>ISBN : {book.ISBN}</Text>
        <Text style={styles.author}>Author : {book.auther}</Text>

        <Image source={{uri: book.bookImage}} style={styles.image} />

        <View style={styles.infoBox}>
          <Text style={styles.label}>Category </Text>
          <Text style={styles.value}> {book.category}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Condition </Text>
          <Text style={styles.condition}>
            {book.isConditionUsed ? 'Used' : 'New'}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Price </Text>
          <Text style={styles.value}>US$ {book.price}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Age Limit</Text>
          <Text style={styles.value}>{book.age_limit}+</Text>
        </View>

        {/* {buyerId !== book.firebaseUID ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ThreadScreen', {
                buyerId: buyerId,
                sellerId: book.firebaseUID,
              });
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Contact Seller</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditBookScreen', {
                itemId: bookId,
              });
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Edit Book</Text>
          </TouchableOpacity>
        )} */}
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('ThreadScreen', {
              buyerId: buyerId,
              sellerId: book.firebaseUID,
            });
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Contact Seller</Text>
        </TouchableOpacity> */}

        <View style={styles.descriptionBox}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>
      </ScrollView>

      {buyerId !== book.firebaseUID ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ThreadScreen', {
              buyerId: buyerId,
              sellerId: book.firebaseUID,
            });
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Contact Seller</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditBookScreen', {
                itemId: bookId,
              });
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Edit Book</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={DeleteConfirm} style={styles.button}>
            <Text style={styles.buttonText}>Delete Book</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('ThreadScreen', {
              buyerId: buyerId,
              sellerId: book.firebaseUID,
            });
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Contact Seller</Text>
        </TouchableOpacity> */}
    </View>
  );
};

export default BookScreen;
