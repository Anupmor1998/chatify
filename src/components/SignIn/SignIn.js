import React from "react";
import { auth, firebase } from "../../firebase/firebase";
import google from "../../images/google.png";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button className="sign-in" onClick={signInWithGoogle}>
      Sign In With Google &nbsp; <img src={google} alt="google" />
    </button>
  );
}

export default SignIn;
