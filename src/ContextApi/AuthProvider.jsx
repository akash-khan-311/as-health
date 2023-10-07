import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const loginGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateNmae = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user paichi", currentUser);
    });
    return () => unSubcribe();
  }, []);

  const info = {
    user,
    loginGoogle,
    loginGithub,
    registerUser,
    loginUser,
    updateNmae,
    logOut,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
