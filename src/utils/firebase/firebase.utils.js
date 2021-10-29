// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCNsNn0LGd_KhQb0KtV7S0qlztx31zKdq8",
  authDomain: "movie-app-eb5db.firebaseapp.com",
  projectId: "movie-app-eb5db",
  storageBucket: "movie-app-eb5db.appspot.com",
  messagingSenderId: "967114771143",
  appId: "1:967114771143:web:1232db9ff0cbd036cf0ce2",
  measurementId: "G-839ZWEK6Q8",
};

// Initialize Firebase
// const app =
initializeApp(config);
const db = getFirestore();
// const analytics = getAnalytics(app);

// *********************** Auth Related Functions ********************

//           ********** Sign in with email and password ********
export const auth = getAuth();

const createUser = async ({ email, password }, additionalData) => {
  const {user} = await createUserWithEmailAndPassword(auth, email, password);
   await createUserDocument(user, additionalData);
};

export const emailSignIn = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

//          ************ Sign in with google ****************

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => signInWithPopup(auth, provider);

//           ********** Sign out ***************
export const signUserOut = async () => {
  await signOut(auth);
};

// ****************** Firestore Related functions ****************

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) {return};
  // Adds a user to our firestore
  const userRef = doc(db, `users`, `${userAuth.uid}`); // get userRef
  const userSnapshot = await getDoc(userRef); // get snapShot
  if (!userSnapshot.exists()) {
    // make sure user is not existing b4 adding
    const {  email, displayName } = userAuth;
    const createdAt = new Date();
    const newUser = {
      email,
      createdAt,
      displayName,
      ...additionalData
    }
    try {
      await setDoc(userRef, newUser);
    } catch (error) {
      console.error("Error creating document", error);
    }
  }

  return userRef;
};

export default createUser;
