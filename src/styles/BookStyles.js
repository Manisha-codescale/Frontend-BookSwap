import {StyleSheet} from 'react-native';

const BookStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 30,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Leave space for the button
  },
  isbn: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    alignSelf: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: '#007bff',
  },
  author: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    alignSelf: 'center',
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 4,
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 18,
    color: '#555',
  },
  condition: {
    fontSize: 18,
    color: '#dc143c',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
    textAlign: 'center',
    //position: 'absolute',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',  // Position absolutely within the parent container
    bottom: 22,           // Distance from bottom
    left: 0,
    right: 0,
    //alignItems: 'center', // Center the button horizontally
    //justifyContent: 'center',
    zIndex: 999, 
  },
  descriptionBox: {
    marginTop: 20,
    width: '100%',
  },
  description: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
    lineHeight: 22,
  },
});

export default BookStyles;