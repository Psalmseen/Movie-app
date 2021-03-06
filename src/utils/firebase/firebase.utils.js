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

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { updateFavouriteItems } from "../../redux/favourite/favourites.action";

const config = {
  apiKey: "AIzaSyCNsNn0LGd_KhQb0KtV7S0qlztx31zKdq8",
  authDomain: "movie-app-eb5db.firebaseapp.com",
  projectId: "movie-app-eb5db",
  storageBucket: "movie-app-eb5db.appspot.com",
  messagingSenderId: "967114771143",
  appId: "1:967114771143:web:1232db9ff0cbd036cf0ce2",
  measurementId: "G-839ZWEK6Q8",
};

initializeApp(config);
const db = getFirestore();

// *********************** Auth Related Functions ********************

//           ********** Sign in with email and password ********
export const auth = getAuth();

const createUser = async ({ email, password }, additionalData) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
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
export const signUserOut = async (id, fav) => {
  await createUserFavourites(id, fav)
  await signOut(auth);
};

// ****************** Firestore Related functions ****************

//          ******** Creating new user *********

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  // Adds a user to our firestore
  const userRef = doc(db, `users`, `${userAuth.uid}`); // get userRef
  const userSnapshot = await getDoc(userRef); // get snapShot
  if (!userSnapshot.exists()) {
    // make sure user is not existing b4 adding
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    const newUser = {
      email,
      createdAt,
      displayName,
      ...additionalData,
      fav: [],
    };
    try {
      await setDoc(userRef, newUser);
    } catch (error) {
      console.error("Error creating document", error);
    }
  }

  return userRef;
};

//      ********** Creating UserFav array *********
export const createUserFavourites = async (id, fav) => {
  const userFavRef = doc(db, `users`, `${id}`);
  await updateDoc(userFavRef, { fav });
};

export default createUser;

// ************* Retriving UserFav Array *****

export const getUserFavourites = async (id) => {
  const userFavRef = doc(db, 'users', `${id}`)
  const userFavSnapshot = await getDoc(userFavRef)
  return updateFavouriteItems(userFavSnapshot.data().fav)
}