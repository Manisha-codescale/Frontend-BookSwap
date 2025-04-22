import {StyleSheet} from 'react-native';

const SignInstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Signin: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputBox: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleContent: {
    backgroundColor: '#007BF3',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  googleLogo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  signIn: {
    backgroundColor: '#1d3557',
    paddingVertical: 15,
    alignItems: 'center',
    //paddingHorizontal: 135,
    width:'80%',
    borderRadius: 5,
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPw: {
    borderColor: '#ccc',
    textAlign: 'right',
    marginBottom: 40,
  },
  forgotPwText: {
    color: '#007BFF',
    //textDecorationLine: 'underline',
  },
  pressed: {
    opacity: 0.5,
  },
});
export default SignInstyles;
