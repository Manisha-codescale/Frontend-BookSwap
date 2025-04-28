import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {addBook} from '../api/bookRoutes';
import styles from '../styles/AddBookStyles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const AddBookScreen = () => {
  const navigation = useNavigation();
  const token = useSelector(state => state.user.token);
  const [bookData, setBookData] = useState({
    ISBN: '',
    name: '',
    auther: '',
    category: '',
    price: '',
    age_limit: '',
    description: '',
    isConditionUsed: false,
  });
  
  const [bookImage, setBookImage] = useState(null);

  const handleChange = (key, value) => {
    setBookData({...bookData, [key]: value});
  };
  
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(selected => {
        console.log('Selected image:', selected);
        setBookImage(selected);
      })
      .catch(err => {
        console.log('Image pick cancelled or error:', err);
      });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      
      Object.keys(bookData).forEach(key => {
        if (key === 'price') {
          formData.append(key, parseFloat(bookData[key]));
        } else if (key === 'age_limit') {
          formData.append(key, parseInt(bookData[key]));
        } else {
          formData.append(key, bookData[key]);
        }
      });
      
      if (bookImage) {
        formData.append('bookImage', {
          uri: bookImage.path,
          type: bookImage.mime,
          name: bookImage.path.split('/').pop()
        });
      }

      const response = await addBook(formData,token);
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
        });
        setBookImage(null);
        
        if (response.book && response.book._id) {
          navigation.navigate('TabNavigator', {
            screen: 'AddedBooksScreen',
            });
        }
      } else {
        Alert.alert('Error', 'Failed to add book');
      }
    } catch (err) {
      console.error('Submit error:', err);
      Alert.alert('Error', 'An error occurred while adding the book');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add New Book</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {bookImage ? (
          <Image source={{uri: bookImage.path}} style={styles.imagePreview} />
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