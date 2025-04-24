import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  MaterialIcons,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/AddedBooksStyles';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {AddedBook} from '../api/bookRoutes';

const AddedBooksScreen = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await AddedBook();
        setBooks(data);
      } catch (error) {
        console.error('Error loading books:', error);
      }
    };

    loadBooks();
  }, []);
  console.log('AddedBooksList:', books);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Books</Text>

      <FlatList
        data={books}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate('BookScreen', {bookId: item._id})
            }>
            <Image source={{uri: item.bookImage}} style={styles.image} />
            <View style={styles.detailsContainer}>
              <View style={styles.rowBetween}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.text}>Author: {item.auther}</Text>
                  <Text style={styles.text}>ISBN: {item.ISBN}</Text>
                  <Text style={styles.price}>Price: {item.price}</Text>
                </View>
              </View>
              <View
                style={[
                  styles.conditionContainer,
                  {
                    backgroundColor: item.isConditionUsed
                      ? '#cce5ff'
                      : '#d4edda',
                  },
                ]}>
                <Text
                  style={[
                    styles.conditionText,
                    {
                      color: item.isConditionUsed ? '#004085' : '#155724',
                    },
                  ]}>
                  {item.isConditionUsed ? 'Used' : 'New'}
                </Text>
              </View>
            </View>
            
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EditBookScreen', {itemId: item._id})
                }>
                <Icon style={styles.iconLeft} name="pencil" size={20} color="#555" />
              </TouchableOpacity>
           
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddBookScreen')}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddedBooksScreen;
