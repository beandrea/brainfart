import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "brainfart-83cc4.firebaseapp.com",
    databaseURL: "https://brainfart-83cc4.firebaseio.com",
    projectId: "brainfart-83cc4",
    storageBucket: "brainfart-83cc4.appspot.com",
    messagingSenderId: "106322462222478724836",
    appId: "1:530808334788:web:f5504cf15e5e6e88e95c91"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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