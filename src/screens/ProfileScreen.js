import {View,Image, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import styles from '../styles/ProfileStyles';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../context/UserContext';
import {getUserById} from '../api/userRoutes';

const ProfileScreen = () => {
  const {uid} = useContext(UserContext);
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!uid) return;

      try {
        const userData = await getUserById(uid);
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [uid]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading user profile...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>User not found or error occurred.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />
      <View style={styles.infoBox}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{user.name}</Text>
      </View>
      <View style={styles.infoBox}>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>
      </View>
      <View style={styles.infoBox}>
      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>{user.age}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfileScreen')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('ChangePasswordScreen')}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
