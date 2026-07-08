import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

// SIGN UP
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// LOGIN
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// LOGOUT
export const logoutUser = () => {
  return signOut(auth);
};