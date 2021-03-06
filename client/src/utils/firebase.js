import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
  const auth = firebase.auth();
  if (user) {
    localStorage.setItem('uid', auth.currentUser.uid)
  } else {
    localStorage.setItem('uid', null)
    const page = window.location.pathname
    if (page !== "/signin") {
      window.location.href = "/signin"
    }
  }
});

export const signOut = () => {
  firebase.auth().signOut();
}

// export const isSignedIn = () => {
//   const auth = firebase.auth();
//   if (auth.currentUser !== null) {
//     // const uid = auth.currentUser.uid
//     return console.log("user is signed in")
//   }
//   else {
//     console.log("user is signed out")
//     window.location.href = "/signin"
//   }
// }

export const getUserId = () => {
  return localStorage.getItem('uid')
}















export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider);
// };

// export const generateUserDocument = async (user, additionalData) => {
//   if (!user) return;

//   const userRef = firestore.doc(`users/${user.uid}`);
//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { email, displayName, photoURL } = user;
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         photoURL,
//         ...additionalData
//       });
//     } catch (error) {
//       console.error("Error creating user document", error);
//     }
//   }
//   return getUserDocument(user.uid);
// };

// const getUserDocument = async uid => {
//   if (!uid) return null;
//   try {
//     const userDocument = await firestore.doc(`users/${uid}`).get();

//     return {
//       uid,
//       ...userDocument.data()
//     };
//   } catch (error) {
//     console.error("Error fetching user", error);
//   }
// };