
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

// init services
const analytics = getAnalytics(app);
const db = getFirestore();

// collection ref
const colRef = collection(db, 'spotifydata');

// get collection data
getDocs(colRef).then((snapshot) => {
  console.log(snapshot);
  let spotifydata = [];
  snapshot.docs.forEach((doc) => {
    spotifydata.push({ ...doc.data(), id: doc.id });
  })
})
.catch(err => {
  console.log(err.message);
});