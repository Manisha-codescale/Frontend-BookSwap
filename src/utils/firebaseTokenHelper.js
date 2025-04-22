import auth from '@react-native-firebase/auth';

export const getFirebaseToken = async () => {
  const user = auth().currentUser;
  if (user) {
    const token = await user.getIdToken();
    return token;
  }
  return null;
};
