import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import FirebaseConfiger from "../../FireHooks/FirebaseConfiger";
import { useState } from "react";

// Initialize Firebase
FirebaseConfiger();

const useAuth = () => {
  //All useState define
  const [users, setUsers] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  // Google provider function
  const Googlehandle = (data) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUsers(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Get the currently signed-in user

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid;
      setUsers(user);
    } else {
      // User is signed out
    }
  });

  // Delete a user function
  const SignOutHandle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUsers("");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // log in existed user function handle
  const existedLogHandle = (data) => {
    console.log(data.email, typeof data.password);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUsers(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return {
    Googlehandle,
    SignOutHandle,
    users,
    error,
    setUsers,
    existedLogHandle,
    setError,
  };
};
export default useAuth;
