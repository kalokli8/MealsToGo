import firebase from "firebase/app";
import "firebase/auth";

export const loginRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
