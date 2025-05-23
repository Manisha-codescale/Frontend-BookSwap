import axios from 'axios';
import {BASEURL} from '@env';
//import {BASEURL} from './apis';
import { getFirebaseToken } from '../utils/firebaseTokenHelper';
import {useSelector} from 'react-redux';

export const axiosBookInstance = axios.create({
  baseURL: `${BASEURL}/api/book`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBookById = async (id) => {
  try {
    const bookResponse = await axiosBookInstance.get(`/listBook/${id}`);
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error:', error.bookResponse?.data?.error);
  }
};

export const getBooks = async () => {
  try {
    const bookResponse = await axiosBookInstance.get(`/listbook`);
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error :', error.bookResponse?.data?.error);
  }
};

/* export const updateBook = async (id,updatedData, bookImage) => {
  try {
    const token = await getFirebaseToken();
    console.log(token);
    const bookResponse = await axiosBookInstance.put(`/updateBook/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error :', error.bookResponse?.data?.error);
  }
} */

  export const updateBook = async (id, updatedData, bookImage,token) => {
    try {
      //const token = await getFirebaseToken();
      // const token = useSelector(state => state.user.token);
      console.log('---------------------------------Sending with token:', token);
      const formData = new FormData();
      
      Object.keys(updatedData).forEach(key => {
        formData.append(key, updatedData[key]);
      });
      
      if (bookImage && !bookImage.startsWith('http')) {
        formData.append('bookImage', {
          uri: bookImage,
          name: 'bookswapimg.jpg',
          type: 'image/jpeg',
        });
      }

      const bookResponse = await axiosBookInstance.put(`/updateBook/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
      });
      
      console.log('bookResponse:', bookResponse.data);
      return bookResponse.data;
    } catch (error) {
      console.log('error:', error.response?.data?.error || error.message);
      throw error; 
    }
  }
  
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
  
// export const updateBook = async (id, updatedData) => {
//   try {
//     const bookResponse = await axiosBookInstance.put(
//       `/updateBook/${id}`,
//       updatedData,
//     );
//     console.log('bookResponse :', bookResponse.data);
//     return bookResponse.data;
//   } catch (error) {
//     console.log('error :', error.bookResponse?.data?.error);
//   }
// };

// export const addBook = async newBookData => {
//   try {
//     const bookResponse = await axiosBookInstance.post(`/addBook/`, newBookData);
//     console.log('bookResponse :', bookResponse.data);
//     return bookResponse.data;
//   } catch (error) {
//     console.log('error :', error.bookResponse?.data?.error);
//   }
// };
export const axiosCreateBookInstance = axios.create({
  baseURL: `${BASEURL}/api/book`,
});

export const addBook = async (formData,token) => {
  try {
    //const token = await getFirebaseToken();
    //const token = useSelector(state => state.user.token);
    console.log('----------------------------Sending with token:', token);
    
    const bookResponse = await axiosCreateBookInstance.post('/addbook', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    
    console.log('Book added successfully:', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.error('Error adding book:', error.response?.data || error.message);
    return null;
  }
};

export const AddedBook = async (token) => {
  try {
    //const token = await getFirebaseToken();
    //const token = useSelector(state => state.user.token);
    console.log('----------------------------Sending with token:', token);
    const bookResponse = await axiosBookInstance.get(`/listAddedbooks/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('----------------------------------AddedbookResponse :', bookResponse.data);
    return bookResponse.data;
  }catch(error){
    console.log('error :', error.bookResponse?.data?.error);
  }
}
export const deleteBook = async (id) => {
  try {
    const bookResponse = await axiosBookInstance.delete(`/deleteBook/${id}`);
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error:', error.bookResponse?.data?.error);
  }
};

export const filterbook = async ({
  isConditionUsed,
  minimum_price,
  maximum_price,
  minimum_age,
  maximum_age,
  category,
}) => {
  try {
    const bookResponse = await axiosBookInstance.get(`/filterbook/`, {
      params: {
        isConditionUsed,
        minimum_price,
        maximum_price,
        minimum_age,
        maximum_age,
        category,
      },
    });
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error:', error.bookResponse?.data?.error);
  }
};

export const searchBookByNameAuthor = async (searchKeyword) => {
  try {
    const response = await axiosBookInstance.get(`/filterBookAuthName`, {
      params: { search: searchKeyword },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered books:', error.response?.data?.message || error.message);
    throw new Error('Failed to filter books');
  }
};