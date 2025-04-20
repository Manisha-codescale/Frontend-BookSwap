import React, {useState} from 'react';
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


const EditProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(
    'https://1857756846.rsc.cdn77.org/static/features/ai-face-generator/man1-swap-2.jpeg',
  );

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

  const [user, setUser] = useState({
    username: 'Alan777',
    name: 'Alan Ray',
    email: 'alanray@email.com',
    date_of_birth: '2000-02-07',
    address: 'No. 43, Park Street, Paris',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      handleChange('date_of_birth', formattedDate);
    }
  };

  const handleChange = (field, value) => {
    setUser({...user, [field]: value});
  };

  const handleSaveChanges = () => {
    if (!validateEmail(user.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    console.log('Changes saved', user);
    Alert.alert('Changes saved successfully!');
  };

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

      {[
        {label: 'Username', field: 'username', keyboard: 'default'},
        {label: 'Name', field: 'name', keyboard: 'default'},
        {label: 'Email', field: 'email', keyboard: 'email-address'},
        {label: 'Date of Birth', field: 'date_of_birth', keyboard: 'default'},
        {label: 'Address', field: 'address', keyboard: 'default'},
      ].map((item, index) => (
        <View key={index} style={styles.infoBox}>
          <Text style={styles.label}>{item.label}</Text>

          {item.field === 'date_of_birth' ? (
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
              <Text>{user.date_of_birth || `Select ${item.label}`}</Text>
            </TouchableOpacity>
          ) : (
            <TextInput
              style={styles.input}
              value={user[item.field]}
              keyboardType={item.keyboard}
              placeholder={`Enter ${item.label}`}
              onChangeText={(val) => handleChange(item.field, val)}
            />
          )}
        </View>
      ))}

      {showDatePicker && (
        <DateTimePicker
          value={user.date_of_birth ? new Date(user.date_of_birth) : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Edit Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfileScreen;
