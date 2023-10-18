// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcCpjQGduuDstDEyvmVRuJRtmDOrmI_O8",
  authDomain: "job-listing-878ee.firebaseapp.com",
  projectId: "job-listing-878ee",
  storageBucket: "job-listing-878ee.appspot.com",
  messagingSenderId: "292683012862",
  appId: "1:292683012862:web:06ffdd98531f1c677ca3af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }