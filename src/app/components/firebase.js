import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCjOkFqUQzIar6A8inJIb_uJ3qtuSu08Co",
  authDomain: "arduino-eecfa.firebaseapp.com",
  databaseURL: "https://arduino-eecfa-default-rtdb.firebaseio.com",
  projectId: "arduino-eecfa",
  storageBucket: "arduino-eecfa.appspot.com",
  messagingSenderId: "776774397988",
  appId: "1:776774397988:web:e61ab24b3388d2f14168b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
