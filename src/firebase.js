import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZOZBNBrPNgmlhHjcOVE9uTob3emeCNb0",
  authDomain: "clone-project-33e88.firebaseapp.com",
  projectId: "clone-project-33e88",
  storageBucket: "clone-project-33e88.appspot.com",
  messagingSenderId: "515732849754",
  appId: "1:515732849754:web:9b20992443ac58200cc463",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
