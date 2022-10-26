import React, { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { useState, useEffect } from "react";

// creating context API
const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  //   for signup functionality
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   for signin functionality
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   for logout functionality
  const logOut = () => {
    return signOut(auth);
  };

  //   to check user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <userContext.Provider value={{ createUser, loginUser, logOut, user }}>
      {children}
    </userContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(userContext);
};
