// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC17ZK7zVyj0BrG7f3jk7fTPrGxMKwgraw",
  authDomain: "stpcomp225project.firebaseapp.com",
  projectId: "stpcomp225project",
  storageBucket: "stpcomp225project.appspot.com",
  messagingSenderId: "697691202665",
  appId: "1:697691202665:web:fe7635aa7850fe540deef8",
  measurementId: "G-VX71CP1G4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);