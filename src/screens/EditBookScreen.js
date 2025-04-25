import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../styles/EditBookStyles';
import {getBookById} from '../api/bookRoutes';
import {useRoute} from '@react-navigation/native';
import {updateBook} from '../api/bookRoutes';

const EditBookScreen = () => {
  const route = useRoute();
  const {itemId} = route.params;
  console.log('-----------Book ID:', itemId);

  const navigation = useNavigation();
  const [isbn, setIsbn] = useState(null);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [ageLimit, setAgeLimit] = useState();
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState(false);
  const [bookImage, setBookImage] = useState('');

  useEffect(() => {
    const loadBook = async () => {
      try {
        const data = await getBookById(itemId);
        console.log('--------------------Book data:', data);
        setIsbn(data.ISBN);
        setName(data.name);
        setAuthor(data.auther);
        setCategory(data.category);
        setPrice(data.price);
        setAgeLimit(data.age_limit);
        setDescription(data.description);
        setCondition(data.isConditionUsed);
        setBookImage(data.bookImage);
      } catch (error) {
        console.error('Error loading book:', error);
      }
    };

    loadBook();
  }, [itemId]);

  const handleUpdateBook = async () => {
    try {
      const updatedBookData = {
        ISBN: isbn,
        name: name,
        auther: author,
        category: category,
        price: parseFloat(price),
        age_limit: parseInt(ageLimit),
        description: description,
        isConditionUsed: condition,
        //bookImage: bookImage,
      };
      console.log('-----------------------------------Updated Book Data:', updatedBookData);
      const response = await updateBook(itemId, updatedBookData, bookImage);
      console.log('Updated Book Data:', response);
      if (response) {
        Alert.alert('Success', 'Book updated successfully!');
        setIsbn(null);
        setName('');
        setAuthor('');
        setCategory('');
        setPrice(0);
        setAgeLimit(0);
        setDescription('');
        setCondition(false);
        setBookImage('');

      } else {
        Alert.alert('Error', 'Failed to update book');
      }

      navigation.navigate('BookScreen', {bookId: itemId})
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  // const [isbn, setIsbn] = useState('');
  // const [name, setName] = useState('');
  // const [author, setAuthor] = useState('');
  // const [category, setCategory] = useState('');
  // const [price, setPrice] = useState('');
  // const [ageLimit, setAgeLimit] = useState('');
  // const [description, setDescription] = useState('');
  // const [condition, setCondition] = useState('');
  // const [image, setImage] = useState(
  //   'https://www.w3.org/Icons/w3c_home.png',
  // );

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(selected => {
        setBookImage(selected.path);
      })
      .catch(err => {
        console.log('Image pick cancelled or error:', err);
      });
  };

  return (
    <View style={{flex: 1, padding: 16}}>
      <Text style={styles.title}>Edit details</Text>

      <View style={styles.imageContainer}>
        <ImageBackground source={{uri: bookImage}} style={styles.image}>
          <View style={styles.imageOverlay}>
            <Icon
              name="camera"
              size={35}
              color="#fff"
              onPress={handleImagePick}
            />
          </View>
        </ImageBackground>
      </View>
      <ScrollView >
        <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="ISBN"
          value={isbn?.toString() ?? ''}
          onChangeText={setIsbn}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Price"
          value={price?.toString() ?? ''}
          onChangeText={setPrice}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Age Limit"
          value={ageLimit?.toString() ?? ''}
          onChangeText={setAgeLimit}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        {/* <TextInput style={styles.input} placeholder="Condition" value={condition} onChangeText={setCondition} /> */}
        <View style={styles.conditionInput}>
          <Text style={styles.label}>Is Condition Used?</Text>
          <View style={styles.radioRow}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setCondition(true)}>
              <View style={styles.radioCircle}>
                {condition === true && <View style={styles.selectedRb} />}
              </View>
              <Text style={styles.radioText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setCondition(false)}>
              <View style={styles.radioCircle}>
                {condition === false && <View style={styles.selectedRb} />}
              </View>
              <Text style={styles.radioText}>No</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>
      </ScrollView>
      <CustomButton title="Update Book" onPress={handleUpdateBook} />
    </View>
  );
};

export default EditBookScreen;
