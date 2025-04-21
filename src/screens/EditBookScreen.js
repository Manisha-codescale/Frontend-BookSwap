import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../styles/EditBookStyles';

const EditBookScreen = () => {
  const navigation = useNavigation();

  const [isbn, setIsbn] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [ageLimit, setAgeLimit] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [image, setImage] = useState(
    'https://www.w3.org/Icons/w3c_home.png',
  );

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(selected => {
        setImage(selected.path);
      })
      .catch(err => {
        console.log('Image pick cancelled or error:', err);
      });
  };

  return (
    <View style={{flex: 1, padding: 16}}>
      <Text style={styles.title}>Edit details</Text>

      <View style={styles.imageContainer}>
        <ImageBackground source={{uri: image}} style={styles.image}>
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

      <TextInput style={styles.input} placeholder="ISBN" value={isbn} onChangeText={setIsbn} />
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Author" value={author} onChangeText={setAuthor} />
      <TextInput style={styles.input} placeholder="Category" value={category} onChangeText={setCategory} />
      <TextInput style={styles.input} placeholder="Price" value={price} onChangeText={setPrice} />
      <TextInput style={styles.input} placeholder="Age Limit" value={ageLimit} onChangeText={setAgeLimit} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Condition" value={condition} onChangeText={setCondition} />

      <CustomButton title="Update Book" onPress={() => navigation.navigate('TabNavigator')} />
    </View>
  );
};

export default EditBookScreen;