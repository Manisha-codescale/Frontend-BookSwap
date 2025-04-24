import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {addBook} from '../api/bookRoutes';
import styles from '../styles/AddBookStyles';

const AddBookScreen = () => {
  const [bookData, setBookData] = useState({
    ISBN: '',
    name: '',
    auther: '',
    category: '',
    price: '',
    age_limit: '',
    description: '',
    isConditionUsed: false,
    image: null,
  });

  const handleChange = (key, value) => {
    setBookData({...bookData, [key]: value});
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      handleChange('image', result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    try {
      const newBookData = {
        ISBN: bookData.ISBN,
        name: bookData.name,
        auther: bookData.auther,
        category: bookData.category,
        price: parseFloat(bookData.price),
        age_limit: parseInt(bookData.age_limit),
        description: bookData.description,
        isConditionUsed: bookData.isConditionUsed,
        image: bookData.image,
      };

      const response = await addBook(newBookData);
      if (response) {
        Alert.alert('Success', 'Book added successfully!');
        setBookData({
          ISBN: '',
          name: '',
          auther: '',
          category: '',
          price: '',
          age_limit: '',
          description: '',
          isConditionUsed: false,
          image: null,
        });
      } else {
        Alert.alert('Error', 'Failed to add book');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'An error occurred while adding the book');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Book</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {bookData.image ? (
          <Image source={{uri: bookData.image}} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imagePickerText}>Select Book Cover</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="ISBN"
        keyboardType="numeric"
        value={bookData.ISBN}
        onChangeText={text => handleChange('ISBN', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={bookData.name}
        onChangeText={text => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={bookData.auther}
        onChangeText={text => handleChange('auther', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={bookData.category}
        onChangeText={text => handleChange('category', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={bookData.price}
        onChangeText={text => handleChange('price', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age Limit"
        keyboardType="numeric"
        value={bookData.age_limit}
        onChangeText={text => handleChange('age_limit', text)}
      />

      <Text style={styles.label}>Is Condition Used?</Text>
      <View style={styles.radioRow}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => handleChange('isConditionUsed', true)}>
          <View style={styles.radioCircle}>
            {bookData.isConditionUsed && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => handleChange('isConditionUsed', false)}>
          <View style={styles.radioCircle}>
            {!bookData.isConditionUsed && <View style={styles.selectedRb} />}
          </View>
          <Text style={styles.radioText}>No</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.textArea}
        placeholder="Description"
        multiline
        value={bookData.description}
        onChangeText={text => handleChange('description', text)}
      />

      <TouchableOpacity style={styles.ButtonAdd} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

export default AddBookScreen;
