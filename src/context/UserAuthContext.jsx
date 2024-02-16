import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {auth} from '../firebase'

const userAuthContext = createContext();


export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [services,setServices] = useState("")

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
      const response = await fetch(`http://localhost:8000/api/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg)
      }
    } catch (error) {
      console.log(`services error ${error}`);
    }
  };

  useEffect(() => {
    getServices()
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
      value={{ user, logIn, signUp, logOut, googleSignIn,services }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}