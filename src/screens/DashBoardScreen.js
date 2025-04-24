import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles/DashBoardStyles';
import {useNavigation} from '@react-navigation/native';
import {getBooks} from '../api/bookRoutes';
import {searchBookByNameAuthor} from '../api/bookRoutes';

// const DATA = [
//   {
//     _id: '67f68a0d85bb57e4530ed112',
//     ISBN: '9780439139601.0',
//     name: 'Secrets of the Forgotten Realm',
//     url: 'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22HarryPotter.jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-04-10T07%3A36%3A17.418Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F3f2f2f70f92541e2%2FHarryPotter.jpg%3FExpires%3D1838964977%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3Dk5yauhl4g5yQPzfq5zGnnm4DFsJ3gU7pWg2ubQn0IiaACVecqwx5Nd2kWaZ6yLIMlX6ZDE4gJXKITPED8hmbTIJmWCnDtuLwF5WVCsw9K2Jc9wbVhM7X9lt2fKKwdJEf~wSrVLXe-ITOBC9MN1~4KiEJeDGVCQjNY8wJE1vmXL-8PSQqt2A35sGH~JLXLVy9VK5VQFruxc3OZqGY6SfDRcva67CQC7XIPOon-fv3YvA660ysPXixKP8drVHcBuIgkw3OyBgDVyu~suXqIbYZTVWM15Z19zUKGIKUOr0nePaeIslvM6e0VlkEfFhTvjPYpFcZFl4FBOOCrMSAMItdhQ__%22%7D',
//     auther: '67890',
//     category: 'Fantasy',
//     price: '24.5',
//     age_limit: '16',
//     description:
//       'A magical journey through an ancient realm where secrets can change the fate of kingdoms.',
//     condition: true,
//   },
//   {
//     _id: '67f68a0d85bb57e4530ed11',
//     ISBN: '9780439139601.0',
//     name: 'Secrets of the Forgotten Realm',
//     auther: '67890',
//     category: 'Fantasy',
//     price: '24.5',
//     age_limit: '16',
//     description:
//       'A magical journey through an ancient realm where secrets can change the fate of kingdoms.',
//     condition: false,
//   },
//   {
//     _id: '67f68a0d85bb57e4530ed1',
//     ISBN: '9780439139601.0',
//     name: 'Secrets of the Forgotten Realm',
//     auther: '67890',
//     category: 'Fantasy',
//     price: '24.5',
//     age_limit: '16',
//     description:
//       'A magical journey through an ancient realm where secrets can change the fate of kingdoms.',
//     condition: true,
//   },
//   {
//     _id: '67f68a0d85bb57e4530ed1',
//     ISBN: '9780439139601.0',
//     name: 'Secrets of the Forgotten Realm',
//     auther: '67890',
//     category: 'Fantasy',
//     price: '24.5',
//     age_limit: '16',
//     description:
//       'A magical journey through an ancient realm where secrets can change the fate of kingdoms.',
//     condition: false,
//   },
//   {
//     _id: '67f68a0d85bb57e4530ed1',
//     ISBN: '9780439139601.0',
//     name: 'Secrets of the Forgotten Realm',
//     auther: '67890',
//     category: 'Fantasy',
//     price: '24.5',
//     age_limit: '16',
//     description:
//       'A magical journey through an ancient realm where secrets can change the fate of kingdoms.',
//   },
//   {
//     _id: '67f68a0d85bb57e4530ed1',
//     ISBN: '9780439139601.0',
//     name: 'Secrets of the Forgotten Realm',
//     auther: '67890',
//     category: 'Fantasy',
//     price: '24.5',
//     age_limit: '16',
//     description:
//       'A magical journey through an ancient realm where secrets can change the fate of kingdoms.',
//   },
// ];

const DashBoardScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error loading books:', error);
      } 
    };

    loadBooks();
  }, []);

  const filteredBooks = async () => {
    try{
      const data = await searchBookByNameAuthor(searchQuery);
      setBooks(data);
     
    }catch (error) {
      console.error('Error loading books:', error);
    }
    

  }
  

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Book Store</Text>
        {/* <Text>{data}</Text> */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search by name or author"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          // onSubmitEditing={() => {
          //   console.log('Search query:', searchQuery);
          // }}
          onSubmitEditing={filteredBooks}
        />
      </View>

      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Category</Text>
        </TouchableOpacity>
      </ScrollView> */}

      <FlatList
        data={books}
        keyExtractor={item => item._id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            // onPress={() => navigation.navigate('BookScreen')}
            onPress={() => navigation.navigate('BookScreen', {bookId: item._id})}
          >
            <Image source={{uri: item.bookImage}} style={styles.image} />
            {/* <Image source={{uri: item.url}} style={styles.image} /> */}
            <View style={styles.detailsContainer}>
            
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.text}>Author: {item.auther}</Text>
              <Text style={styles.text}>ISBN: {item.ISBN}</Text>
              <Text style={styles.price}>Price: {item.price}</Text>
              <View style={styles.conditionContainer}>
                <View
                  style={[
                    styles.circle,
                    {backgroundColor: item.condition ? '#28a745' : '#007bff'},
                  ]}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        
      />
    </View>
  );
};

export default DashBoardScreen;
