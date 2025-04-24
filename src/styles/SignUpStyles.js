import { StyleSheet } from 'react-native';

const SignUpstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    paddingLeft: 20,
    fontSize: 16,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
    //paddingHorizontal: 135,
    width:'100%',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signInText: {
    color: '#1d3557',
    fontSize: 16,
    textAlign: 'center',
  },
  signInLink: {
    color: '#1d3557',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUpstyles;
