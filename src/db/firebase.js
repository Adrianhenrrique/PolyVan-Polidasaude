import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDDHm3IkA50npCqS1MAkgP7PeVrl9x3IsQ",
  authDomain: "instituto-polyvan.firebaseapp.com",
  databaseURL: "https://instituto-polyvan-default-rtdb.firebaseio.com/",
  projectId: "instituto-polyvan",
  storageBucket: "instituto-polyvan.appspot.com",
  messagingSenderId: "1005735514490",
  appId: "1:1005735514490:web:a9c3a512182063d219c6c3",
  measurementId: "G-XC7WY1TR5K"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };