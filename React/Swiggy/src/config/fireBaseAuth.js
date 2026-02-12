
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBEcy-73VljBnujs4p3U8GZbPBFgxe7XY8",
  authDomain: "swiggy-ui-project.firebaseapp.com",
  projectId: "swiggy-ui-project",
  storageBucket: "swiggy-ui-project.firebasestorage.app",
  messagingSenderId: "1050698080383",
  appId: "1:1050698080383:web:1c760798e50b3858585f4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}