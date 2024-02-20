// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAijsdKl-KN2dpgMnosZ_CjkewFWlPqAY4",
  authDomain: "realtor-clone-react-2b2a9.firebaseapp.com",
  projectId: "realtor-clone-react-2b2a9",
  storageBucket: "realtor-clone-react-2b2a9.appspot.com",
  messagingSenderId: "875363560406",
  appId: "1:875363560406:web:f852208fa6ea03c2b5d277"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()