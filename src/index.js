
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
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
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// init services
const analytics = getAnalytics(app);
const db = getFirestore();

// collection ref
const colRef = collection(db, 'spotifydata');

//get collection data
getDocs(colRef).then((snapshot) => {
  console.log(snapshot);
  let songData = [];
  snapshot.docs.forEach((doc) => {
    songData.push({ ...doc.data(), id: doc.id });
  })
})
.catch(err => {
  console.log(err.message);
});



// const docRef = doc(db, "spotifydata");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
