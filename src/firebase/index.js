import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCspnFzdIob_LNfvOg3DBXhkrcmYP3g8K0",
  authDomain: "tastify-98b58.firebaseapp.com",
  projectId: "tastify-98b58",
  storageBucket: "tastify-98b58.appspot.com",
  messagingSenderId: "192290167762",
  appId: "1:192290167762:web:61e6cdc2145c9dd1b5460b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
