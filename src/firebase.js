// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE24l8Ua75-0kv71Hc0jIZJ21w9cFWTNA",
  authDomain: "arabicireland-61fc8.firebaseapp.com",
  projectId: "arabicireland-61fc8",
  storageBucket: "arabicireland-61fc8.appspot.com",
  messagingSenderId: "115946098378",
  appId: "1:115946098378:web:1d252b8c6f6583b961ae33",
  measurementId: "G-QEXV0B4QH0"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase Analytics
const analytics = firebase.analytics();

export { analytics };
