import {StyleSheet} from 'react-native';

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: 160,
    height: 160, 
    resizeMode: 'cover',
    marginVertical: 16,
    borderRadius: 80, 
    borderColor: '#ccc',
    marginBottom: 40,
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
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    color: '#333',
    fontSize: 16,
  },
  value: {
    color: '#555',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  logoutButton: {
    backgroundColor: '#6B7280',
  },
  secondaryButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileStyles;
