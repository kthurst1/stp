
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC17ZK7zVyj0BrG7f3jk7fTPrGxMKwgraw",
  authDomain: "stpcomp225project.firebaseapp.com",
  projectId: "stpcomp225project",
  storageBucket: "stpcomp225project.appspot.com",
  messagingSenderId: "697691202665",
  appId: "1:697691202665:web:fe7635aa7850fe540deef8",
  measurementId: "G-VX71CP1G4X"
};

// init app
const app = initializeApp(firebaseConfig);
//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// init services
//const analytics = getAnalytics(app);
const db = getFirestore();

// collection ref
const colRef = collection(db, 'spotifydata');

//get collection data


// const data = await getDocs(collection(db, "spotifydata"));
// let songData = [];
// data.forEach((doc) => {
//   songData.push(doc.data());
// })

const spotifydata = doc(db, "spotifydata/00Th9LffyzEEqICCin7G");
const doc1 = await getDoc(spotifydata);
if (!doc1.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc1.data());
}

