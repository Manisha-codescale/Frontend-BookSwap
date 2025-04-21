import {StyleSheet} from 'react-native';

const EditBookStyles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditBookStyles;