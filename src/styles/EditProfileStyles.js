import {StyleSheet, Platform} from 'react-native';

const EditProfileStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 26,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  cameraIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#007bff',
    padding: 6,
    borderRadius: 50,
  },
  infoBox: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#444',
    width: '100%',
  },
  profilename: {
    borderRadius: 8,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#444',
    width: '90%',
    textAlign: 'right',
    marginBottom: 4,
  },
  infoBoxRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonCancel: {
    backgroundColor: '#6B7280',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
});

export default EditProfileStyles;
