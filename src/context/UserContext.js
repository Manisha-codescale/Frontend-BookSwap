import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ uid }}>
      {children}
    </UserContext.Provider>
  );
};
