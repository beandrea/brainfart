import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyDIxYkUsIoBTFs24-yTGbGsQM9qltj0NfE",
  // apiKey: process.env.apiKey,
  authDomain: "brainfart-83cc4.firebaseapp.com",
  databaseURL: "https://brainfart-83cc4.firebaseio.com",
  projectId: "brainfart-83cc4",
  storageBucket: "brainfart-83cc4.appspot.com",
  messagingSenderId: "996619792238",
  appId: "1:996619792238:web:cd2a898554294ca2aa1b7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const signupWithEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`Error code: ${errorCode}`);
      console.log(`Error message: ${errorMessage}`);
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      // console.log("true")
    console.log("user is signed in")
    // window.location.href = "/"
  } else {
    // const page = window.location.pathname
    // console.log(page)
    // if (page !== "/signin") {
    //   window.location.href = "/signin"
    // }
    // console.log("user is signed out")
  }
});


export const signOut = () => {
  firebase.auth().signOut();
}

export const isSignedIn = () => {
  const auth = firebase.auth();
  if (auth.currentUser !== null) {
    // const uid = auth.currentUser.uid
    return console.log("user is signed in")
  }
  else {
    window.location.href = "/signin"
    console.log("user is signed out")
  }
}

export const getUserId = () => {
  const auth = firebase.auth();
  return auth.currentUser.uid
}















export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};