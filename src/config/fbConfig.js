import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const config = {
  apiKey: "AIzaSyCdRw-CjKs1cayz-a0URg9UKjL75EQlFFg",
  authDomain: "get-ninja-marioplan.firebaseapp.com",
  projectId: "get-ninja-marioplan",
  storageBucket: "get-ninja-marioplan.appspot.com",
  messagingSenderId: "787970997335",
  appId: "1:787970997335:web:0a81c3a9b0b2ed78837712",
  measurementId: "G-5ZCDK2ZNS9",
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(config);

export default firebase 