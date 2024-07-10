// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import{ getStorage} from "firebase/storage";
const firebaseConfig = {
    
  apiKey: "AIzaSyARaZpYfJuK2HZfk3ls_09nO9T8TDJ2nzU",
  authDomain: "chatapp-fbeee.firebaseapp.com",
  projectId: "chatapp-fbeee",
  storageBucket: "chatapp-fbeee.appspot.com",
  messagingSenderId: "561394368503",
  appId: "1:561394368503:web:fe53efc7206d8c11da38f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db=getFirestore();
export  const storage=getStorage();