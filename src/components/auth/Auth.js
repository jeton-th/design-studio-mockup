import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebaseApp, { firestore } from '../../utils/firebaseApp';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        firestore.collection('users').doc(user.uid).get()
          .then((doc) => {
            setCurrentUser({
              uid: user.uid,
              email: user.email,
              name: doc.data().name,
              role: doc.data().role,
            });
            setUserLoading(false);
          });
      } else {
        setCurrentUser(null);
        setUserLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.shape),
};

AuthProvider.defaultProps = {
  children: null,
};
