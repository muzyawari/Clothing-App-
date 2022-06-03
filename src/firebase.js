import { initializeApp } from "firebase/app";

import { getAuth, signInWithCustomToken } from "firebase/auth";

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
