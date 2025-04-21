import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {getUserById, updateUser} from '../api/userRoutes';
import {
  searchBookByNameAuthor,
  getBookById,
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  filterbook,
} from '../api/bookRoutes';

const UserTestScreen = () => {
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleGetUser = async () => {
    try {
      const userData = await getUserById('67f64e0240819b939025286f');
      setResult(userData);
    } catch {
      setErrorMsg('Error fetching user');
    }
  };

  const handleUpdateUser = async () => {
    try {
      const updatedUser = await updateUser('67f64e0240819b939025286f', {
        name: 'Noah Updated Again',
        age: 20,
      });
      setResult(updatedUser);
    } catch {
      setErrorMsg('Error updating user');
    }
  };

  const handleGetBookById = async () => {
    try {
      const bookData = await getBookById('67f8a47e8782ef0369089b5f');
      setResult(bookData);
    } catch {
      setErrorMsg('Error fetching book by ID');
    }
  };

  const handleGetBooks = async () => {
    try {
      const bookData = await getBooks();
      setResult(bookData);
    } catch {
      setErrorMsg('Error fetching books');
    }
  };

  const handleAddBook = async () => {
    try {
      const newBookdata = await addBook({
        ISBN: 60606060606,
        name: 'City of Fire',
        auther: 'Evelyn Rosett',
        category: 'Drama',
        price: 59.99,
        age_limit: 27,
        description: 'A gripping tale of survival in a crumbling society.',
        isConditionUsed: 'false',
      });
      setResult(newBookdata);
    } catch {
      setErrorMsg('Error adding book');
    }
  };

  const handleUpdateBook = async () => {
    try {
      const updateBook = await updateBook('67f68a0d85bb57e4530ed112', {
        description: 'Updated New description',
        price: 25.0,
      });
      setResult(updateBook);
    } catch {
      setErrorMsg('Error updating book');
    }
  };

  const handleDeleteBook = async () => {
    try {
      const deletebook = await deleteBook('67f68a0d85bb57e4530ed112');
      setResult(deletebook);
    } catch {
      setErrorMsg('Error deleting book');
    }
  };

  const handleFilterBooks = async () => {
    try {
      const data = await filterbook({
        isConditionUsed: true,
        minimum_price: 10,
        maximum_price: 100,
        minimum_age: 10,
        maximum_age: 40,
        category: '',
      });
      setResult(data);
    } catch {
      setErrorMsg('Error filtering books');
    }
  };

  const handleSearchBooks = async () => {
    try {
      const filteredBooks = await searchBookByNameAuthor('village');
      setResult(filteredBooks);
    } catch {
      setErrorMsg('Error searching books ');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Routes</Text>
      <Button title="Get User by ID" onPress={handleGetUser} />
      <Button title="Update User" onPress={handleUpdateUser} />

      <Text style={styles.header}>Book Routes</Text>
      <Button title="Get Book by ID" onPress={handleGetBookById} />
      <Button title="Get All Books" onPress={handleGetBooks} />
      <Button title="Add Book" onPress={handleAddBook} />
      <Button title="Update Book" onPress={handleUpdateBook} />
      <Button title="Delete Book" onPress={handleDeleteBook} />
      <Button title="Filter Books" onPress={handleFilterBooks} />
      <Button title="Search Books" onPress={handleSearchBooks} />

      {result && (
        <Text style={styles.result}>
          Result: {JSON.stringify(result, null, 2)}
        </Text>
      )}
      {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 14,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default UserTestScreen;