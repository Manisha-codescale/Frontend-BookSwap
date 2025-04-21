import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  MaterialIcons,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/AddedBooksStyles';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';

const books = [
  {
    ISBN: '97804373565',
    name: 'Frankenstein',
    author: 'F. Scott Fitzgerald',
    category: 'Classics',
    price: 10.0,
    isConditionUsed: true,
    age_limit: 16,
    image:
      'https://blog-cdn.reedsy.com/directories/gallery/235/large_0837bd13c2fb31d4b3ee904a0eaaf0af.jpg',
  },
  {
    ISBN: '9780061120084',
    name: 'Junior Year Bites',
    author: 'Harper Lee',
    category: 'Fiction',
    price: 8.0,
    isConditionUsed: false,
    age_limit: 3,
    image:
      'https://blog-cdn.reedsy.com/directories/gallery/231/large_dd77074591fde734d9147ffaa936f4e1.jpg',
  },
  {
    ISBN: '9780451524935',
    name: 'Half A cup of Sand and Sky',
    author: 'George Orwell',
    category: 'Dystopian',
    price: 5.0,
    isConditionUsed: true,
    age_limit: 12,
    image:
      'https://blog-cdn.reedsy.com/directories/gallery/232/large_c965f30130bbc034d036cea530f8c30c.jpg',
  },
];

const AddedBooksScreen = () => {
   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Added Books</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {books.map((book, index) => (
          <View key={index} style={styles.card}>
            {/* <TouchableOpacity style={styles.editIcon} onPress={'EditBookScreen'}>
              <Icon name="create-outline" size={20} color="555" />
            </TouchableOpacity> */}
            <Image source={{uri: book.image}} style={styles.bookImage} />
            <View style={styles.bookInfo}>
              <Text style={styles.name}>{book.name}</Text>
              <Text style={styles.isbn}>ISBN {book.ISBN}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text style={styles.details}>{book.category}</Text>
              <View style={styles.textGap}>
                <View style={styles.column}>
                  <Text style={styles.details}>
                    US$ {book.price}
                    {'\u2003\u2003\u2003\u2003'}{' '}
                  </Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.details}>
                    {' '}
                    Age : {book.age_limit}+{'\u2003\u2003\u2003\u2003\u2003'}
                  </Text>
                </View>
                <View style={styles.column}>
                  {' '}
                  <Text style={styles.condition}>
                    {book.isConditionUsed ? 'Used' : 'New'}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('EditBookScreen')}} style={styles.editIcon}>
              <Icon name="pencil" size={20} color="#333"/>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddedBooksScreen;
