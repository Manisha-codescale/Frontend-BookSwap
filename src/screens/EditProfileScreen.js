import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/EditProfileStyles.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import {UserContext} from '../context/UserContext';
import {getUserById, updateUser} from '../api/userRoutes';
import {useNavigation} from '@react-navigation/native';
import ResetPasswordScreen from './ResetPasswordScreen.js';

const EditProfileScreen = () => {
  const {uid} = useContext(UserContext);
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [originalUser, setOriginalUser] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserById(uid);
        if (fetchedUser) {
          const initialUserData = {
            name: fetchedUser.name || '',
            email: fetchedUser.email || '',
            date_of_birth: fetchedUser.date_of_birth?.split('T')[0] || '',
          };
          setUser(initialUserData);
          setOriginalUser(initialUserData);

          const initialImage =
            fetchedUser.profileImage ||
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
          setProfileImage(initialImage);
          setOriginalImage(initialImage);
        }
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [uid]);

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        setProfileImage(image.path);
      })
      .catch(err => {
        console.log('Image pick cancelled or error:', err);
      });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      handleChange('date_of_birth', formattedDate);
    }
  };

  const handleChange = (field, value) => {
    setUser({...user, [field]: value});
  };

  const handleCancelChanges = () => {
    setUser(originalUser);
    setProfileImage(originalImage);
  };

  const handleSaveChanges = async () => {
    if (!validateEmail(user.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      await updateUser(uid, {...user, profileImage});
      Alert.alert('Success', 'Changes saved successfully!');
      navigation.navigate('TabNavigator', {
        screen: 'ProfileScreen',
      });
    } catch (error) {
      console.log('Error updating user:', error);
      Alert.alert('Error', 'Failed to save changes.');
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading user profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePick} style={styles.imageWrapper}>
          <Image source={{uri: profileImage}} style={styles.profileImage} />
          <View style={styles.cameraIcon}>
            <Icon name="camera" size={22} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBoxRow}>
        <Text style={styles.label}>Email</Text>
        <Text
          style={styles.profilename} keyboardType="email-address"
          placeholder="Enter Email"
         >
        {user.email}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={user.name}
          keyboardType="default"
          placeholder="Enter Name"
          onChangeText={val => handleChange('name', val)}
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.dateInput}>
          <Text>{user.date_of_birth || 'Select Date of Birth'}</Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={user.date_of_birth ? new Date(user.date_of_birth) : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity
        style={styles.buttonCancel}
        onPress={handleCancelChanges}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(ResetPasswordScreen)}>
        <Text style={styles.buttonText}>Edit Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfileScreen;
