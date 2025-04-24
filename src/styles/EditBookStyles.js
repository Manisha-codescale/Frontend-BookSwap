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
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
  ButtonAdd: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
    //paddingHorizontal: 135,
    width:'80%',
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default EditBookStyles;