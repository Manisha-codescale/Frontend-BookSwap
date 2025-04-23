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

export const getUserById = async (id) => {
    try {
    const userResponse = await axiosUserInstance.get(`/getUserbyId/${id}`);
    console.log('userResponse :',userResponse.data);
      return userResponse.data;
  } catch (error) {
    console.log("error :", error.userResponse?.data?.error);
  }
};

export const updateUser = async (id, updatedData) => {
    try {
    const userResponse = await axiosUserInstance.put(`/updateUser/${id}`,updatedData);
    console.log('userResponse :',userResponse.data);
      return userResponse.data;
  } catch (error) {
    console.log("error :", error.userResponse?.data?.error);
  }
};

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