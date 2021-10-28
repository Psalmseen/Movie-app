// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
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
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

const createUser = async ({ email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const emailSignIn = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

export const checkUserSession = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      alert("so sad");
    }
  });
};

export const signUserOut = async () => {
  await signOut(auth);
};

/*

    ************************ METHOD 1*******************
   
(email, password, displayName) =>
createUserWithEmailAndPassword(auth, email, password).then(
(userCredentials) => {
  const { user } = userCredentials;
  updateProfile(auth.currentUser, {
    displayName: [displayName]
  }).then(() => {
      console.log('displayName was set')
  });
  console.log(user);
}
);
    ******************  METHOD 2 **************** 

const createUser = async ({ email, password, displayName }) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const { user } = userCredentials;

  console.log("just created user", user);
  await updateProfile(auth.currentUser, {
    displayName: [displayName],
  });
};
*/
export default createUser;
