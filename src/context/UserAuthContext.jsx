import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [services, setServices] = useState("");
  const [ment, setMentors] = useState("");

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  const getServices = async () => {
    try {
      const response = await fetch(`https://backend-l7yw.onrender.com/api/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services error ${error}`);
    }
  };

  const getMentors = async () => {
    try {
      const response = await fetch(`https://backend-l7yw.onrender.com/ment/mentor`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg); // Log the entire data to check the structure
        setMentors(data.msg); // Set mentors state with the fetched data
      }
    } catch (error) {
      console.log(`mentors error:- ${error}`);
    }
  };
  

  useEffect(() => {
    getServices();
    getMentors();
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, services, ment }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
