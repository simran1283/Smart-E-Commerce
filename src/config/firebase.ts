import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3ZaiH82XQd7nlolNJ2v894XOci_yDrF4",
  authDomain: "smart-e-commerce-app-a7d82.firebaseapp.com",
  projectId: "smart-e-commerce-app-a7d82",
  storageBucket: "smart-e-commerce-app-a7d82.firebasestorage.app",
  messagingSenderId: "991848679149",
  appId: "1:991848679149:web:18c1a985568f746b5beee4",
  measurementId: "G-9XMW400T0P"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

export { auth, db }
