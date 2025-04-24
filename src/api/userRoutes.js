import axios from 'axios';
import {BASEURL} from '@env';

const axiosUserInstance = axios.create({
  baseURL: `${BASEURL}/api/users`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const addUser = async (userData) => {
  try {
    const response = await axiosUserInstance.post('/addUser', userData);
    console.log('User added:', response.data);
    return response.data;
  } catch (error) {
    console.log("Error adding user:", error.response?.data?.error || error.message);
    throw error;
  }
};

export const getUserById = async (firebaseUid) => {
    try {
    const userResponse = await axiosUserInstance.get(`/getUserbyId/${firebaseUid}`);
    console.log('userResponse :',userResponse.data);
      return userResponse.data;
  } catch (error) {
    console.log("error :", error.userResponse?.data?.error);
  }
};

export const updateUser = async (firebaseUid, userData, profileImage) => {
  const formData = new FormData();
  console.log('hit frontend api');
  
  formData.append('name', userData.name);
  formData.append('email', userData.email);
  formData.append('date_of_birth', userData.date_of_birth);
  
  if (profileImage && !profileImage.startsWith('http')) {
    formData.append('profileImage', {
      uri: profileImage,
      name: 'bookswapimg.jpg',
      type: 'image/jpeg',
    });
  }
  
  const response = await axios.put(
    `${BASEURL}/api/users/updateUser/${firebaseUid}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  
  return response.data;
};

/* export const updateUser = async (firebaseUid, updatedData) => {
    try {
    const userResponse = await axiosUserInstance.put(`/updateUser/${firebaseUid}`,updatedData);
    console.log('userResponse :',userResponse.data);
      return userResponse.data;
  } catch (error) {
    console.log("error :", error.userResponse?.data?.error);
  }
}; */

/* export const addUser = async (newUserData) => {
    try {
    const userResponse = await axiosUserInstance.post(`/addUser/`,newUserData);
    console.log('userResponse :',userResponse.data);
      return userResponse.data;
  } catch (error) {
    console.log("error :", error.userResponse?.data?.error);
  }
};
 */

/* export const getUsers = async () => {
    try {
    const userResponse = await axiosUserInstance.get(`/getUser`);
    console.log('userResponse :',userResponse.data);
      return userResponse.data;
  } catch (error) {
    console.log("error :", error.userResponse?.data?.error);
  }
}; */