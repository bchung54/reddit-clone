import React, { useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from 'services/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmailHook(newEmail) {
    return updateEmail(currentUser, newEmail);
  }

  function updatePasswordHook(password) {
    return updatePassword(currentUser, password);
  }

  function reauthenticate(userProvidedPassword) {
    const credential = EmailAuthProvider.credential(
      currentUser.email,
      userProvidedPassword
    );
    return reauthenticateWithCredential(currentUser, credential);
  }

  function updateUsername(user, displayNameObject) {
    return updateProfile(user, displayNameObject);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authProviderValue = useMemo(
    () => ({
      currentUser,
      signup,
      login,
      logout,
      resetPassword,
      updateEmailHook,
      updatePasswordHook,
      reauthenticate,
      updateUsername,
    }),
    [currentUser]
  );

  return (
    <AuthContext.Provider value={authProviderValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
