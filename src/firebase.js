import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDvsUpGMuERrI-4z1bfxo_1RqLobWvZEnE",
  authDomain: "whatsappclone-8923e.firebaseapp.com",
  projectId: "whatsappclone-8923e",
  storageBucket: "whatsappclone-8923e.appspot.com",
  messagingSenderId: "58295808310",
  appId: "1:58295808310:web:ffa3e5b78cfb8d30528397"
};
// Initialize Firebase
//this special line of code connects everything
const firebaseapp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
