import axios from 'axios';
import {BASEURL} from '@env';

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
    const bookResponse = await axiosBookInstance.get(`/listBook`);
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error :', error.bookResponse?.data?.error);
  }
};

export const updateBook = async (id, updatedData) => {
  try {
    const bookResponse = await axiosBookInstance.put(
      `/updateBook/${id}`,
      updatedData,
    );
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error :', error.bookResponse?.data?.error);
  }
};

export const addBook = async newBookData => {
  try {
    const bookResponse = await axiosBookInstance.post(`/addBook/`, newBookData);
    console.log('bookResponse :', bookResponse.data);
    return bookResponse.data;
  } catch (error) {
    console.log('error :', error.bookResponse?.data?.error);
  }
};

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