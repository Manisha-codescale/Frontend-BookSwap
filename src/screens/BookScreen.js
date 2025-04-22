import {
  View,
  Image,
  Text,
  Touchable,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/BookStyles';
import {getBookById} from '../api/bookRoutes';

const BookScreen = () => {
  const route = useRoute();
  const {bookId} = route.params;
  
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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.name}>{book.name}</Text>
        <Text style={styles.isbn}>ISBN : {book.ISBN}</Text>
        <Text style={styles.author}>Author : {book.auther}</Text>

        <Image source={{uri: book.image}} style={styles.image} />

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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Seller</Text>
        </TouchableOpacity>

        <View style={styles.descriptionBox}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookScreen;
