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
    borderRadius: 10,
    margin: 10,
  },
  conditionInput: {
    // borderWidth: 1,
    // borderRadius: 10,
    margin: 10,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  image: {
    overflow: 'hidden',
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  radioText: {
    fontSize: 16,
  },
  inputBox: {
    width: '90%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'center',
  },
});

export default EditBookStyles;
