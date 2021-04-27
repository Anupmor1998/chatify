import React from "react";
import { auth, firebase } from "../../firebase/firebase";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign In With Google</button>;
}

export default SignIn;
