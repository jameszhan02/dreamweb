import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC4Spv92NKO6DKEqCAVSDwne-FPPbQMc-I",
  authDomain: "chinesegang-4e5a4.firebaseapp.com",
  databaseURL: "https://chinesegang-4e5a4.firebaseio.com",
  projectId: "chinesegang-4e5a4",
  storageBucket: "chinesegang-4e5a4.appspot.com",
  messagingSenderId: "640987329775",
  appId: "1:640987329775:web:fd6c8aeaacc8d38881971a",
  measurementId: "G-MM1G8Q6KJS"
};

const  auth = firebase.initializeApp(firebaseConfig).auth();
export default auth;

