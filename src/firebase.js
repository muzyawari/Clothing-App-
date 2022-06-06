import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk7FUPMpDf4MIjTvqLF8rbFgX-irYqRFQ",
  authDomain: "clothing-app-db-a2bb5.firebaseapp.com",
  projectId: "clothing-app-db-a2bb5",
  storageBucket: "clothing-app-db-a2bb5.appspot.com",
  messagingSenderId: "899675987266",
  appId: "1:899675987266:web:25ca179c92dd939b5e7cdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const registerWithEmailAndPassword = async (name, email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const logInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

const colRef = collection(db, "collections");

export const getProductData = async () => {
  let products = [];
  await getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
  });
  return products;
};
