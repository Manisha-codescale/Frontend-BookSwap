import { StyleSheet } from 'react-native';

const SignUpstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    paddingLeft: 20,
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signInText: {
    textAlign: 'center',
    fontSize: 16,
  },
  signInLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default SignUpstyles;
