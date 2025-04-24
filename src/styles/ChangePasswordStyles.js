import {StyleSheet} from 'react-native';

const ChangePasswordStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    color: '#1d3557',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPw: {
    borderColor: '#ccc',
    textAlign: 'right',
    marginTop: 20,
    marginBottom: 20,
  },
  forgotPwText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ChangePasswordStyles;
