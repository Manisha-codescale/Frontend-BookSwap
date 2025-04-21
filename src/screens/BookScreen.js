import { View, Image,  Text, Touchable, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import styles from '../styles/BookStyles';

const BookScreen = () => {
    const book = {
        ISBN: 50505005050,
        name: 'Beyond the Ocean Door',
        author: 'Amisha Sathi',
        category: 'Tragedy',
        price: 44.5,
        age_limit: 16,
        description: 'The main character opens a door that only she can see through, sparking curiosity about what awaits her. Her glowing sword suggests both magic and danger, while the light pouring from the door has a liquid quality, hinting at its oceanic nature. Though digitally painted, I added texture and soft edges to give the illustration a traditional, hand-painted feel, enhancing its depth and atmosphere.',
        isConditionUsed: true,
        image: 'https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg',
      };
    return (
        <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.name}>{book.name}</Text> 
          <Text style={styles.isbn}>ISBN : {book.ISBN}</Text>
          <Text style={styles.author}>Author : {book.author}</Text>

          <Image source={{ uri: book.image }} style={styles.image} />

          <View style={styles.infoBox}>
              <Text style={styles.label}>Category </Text>
              <Text style={styles.value}> {book.category}</Text>
          </View>

          <View style={styles.infoBox}>
              <Text style={styles.label}>Condition </Text>
              <Text style={styles.condition}>{book.isConditionUsed ? 'Used' : 'New'}</Text>
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

  )
};

export default BookScreen;
