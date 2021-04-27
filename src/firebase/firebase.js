import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAC8j9BG0XBP_RRqoYEAJsCLVuoWhhAVFc",
  authDomain: "chatify-80ef7.firebaseapp.com",
  projectId: "chatify-80ef7",
  storageBucket: "chatify-80ef7.appspot.com",
  messagingSenderId: "254523801955",
  appId: "1:254523801955:web:512c43282ea626313e1356",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore, firebase };
