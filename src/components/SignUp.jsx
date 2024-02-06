import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ref, get, push, getDatabase } from "firebase/database";
import { database } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect,getRedirectResult } from "firebase/auth";
import { auth } from "../firebase";
const Signup = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    Name: "",
    email: "",
    password: "",
    cpassword: "",
    nos: "",
  });

  const handleChange = (e) => {
    let newValue = e.target.value;
  
    // If the input field is the contact number
    if (e.target.name === "nos") {
      // Remove non-numeric characters
      newValue = newValue.replace(/[^0-9]/g, "");
  
      // Limit the length to 10 digits
      newValue = newValue.slice(0, 10);
    }
  
    setValues({
      ...values,
      [e.target.name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if any required field is empty
    if (!values.Name || !values.email || !values.password || !values.nos) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    try {
      const db = database;
      const usersRef = ref(db, "users");
  
      // Check if the email is already registered
      const snapshot = await get(usersRef);
      let isEmailRegistered = false;
  
      // Iterate through the snapshot to check for existing email
      snapshot.forEach((childSnapshot) => {
        const email = childSnapshot.val().email;
  
        if (email === values.email) {
          isEmailRegistered = true;
        }
      });
  
      if (isEmailRegistered) {
        // Email is already registered, show alert
        alert("This email is already registered. Please use a different email.");
        return;
      }
  
      // Push user data to the 'users' node
      await push(usersRef, {
        Name: values.Name,
        email: values.email,
        password: values.password,
        contactNumber: values.nos,
      });
  
      console.log("User data submitted to Firebase:", values);
      navigate("/");
    } catch (error) {
      console.error("Error submitting user data to Firebase:", error);
    }
  };

  const googleSignIn = async () => {
    try {
      const googleAuthProvider = new GoogleAuthProvider();
      const result = await signInWithRedirect(auth, googleAuthProvider);

      console.log("Sign-in result:", result);

      // Check if the result object and its credential property exist
      if (result && result.user) {
        const accessToken = result.user.accessToken;

        // Store the accessToken in local storage
        localStorage.setItem("accessToken", accessToken);

        console.log(
          "Successfully signed in with Google. Access token:",
          accessToken
        );
        navigate("/");
      } else {
        console.error(
          "Error signing in with Google: Missing credential information"
        );
      }
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
  useEffect(() => {
    const handleSignInRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
  
        if (result && result.user) {
          const accessToken = result.user.accessToken;
          localStorage.setItem("accessToken", accessToken);
          console.log("Successfully signed in with Google. Access token:", accessToken);
          navigate("/");
        } else {
          console.error("Error signing in with Google: Missing user information");
        }
      } catch (error) {
        console.error("Error signing in with Google:", error.message);
      }
    };
  
    handleSignInRedirect();
  }, []); // Run once on component mount

  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row items-start">
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-full flex flex-col">
          <div className="absolute top-[20%] left-[10%] flex flex-col">
            <h1 className="text-lg md:text-4xl lg:text-5xl text-white font-bold my-4">
              Aspiration Meets Guidance
            </h1>
          </div>
          <img
            src="/images/IIM_Calcutta.jpg"
            alt="#"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2  mx-auto h-full bg-[#f5f5f5] flex flex-col p-4 md:p-8 lg:p-12 justify-between items-center">
          <h1 className="text-2xl md:text-xl lg:text-2xl text-[#060606] font-semibold mb-4">
            Peer Support
          </h1>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-4">
              <h3 className="text-lg md:text-3xl lg:text-4xl font-semibold mb-2">
                Sign Up
              </h3>
              <p className="text-base md:text-lg lg:text-xl mb-2">
                Welcome! Please enter your details
              </p>
            </div>

            <div className="w-full flex flex-col">
              <input
                name="Name"
                type="text"
                placeholder="Name"
                value={values.Name}
                onChange={handleChange}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                name="nos"
                type="number"
                placeholder="Contact Number"
                value={values.nos}
                onChange={handleChange}
                maxLength={10}
                className="w-full text-black py-3 my-2 bg-transparent outline-none focus:outline-none"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
            <div className="w-full flex items-center justify-between"></div>
            <div className="w-full flex flex-col my-4">
              <button
                className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-3 md:p-4 lg:p-5 text-center flex items-center justify-center cursor-pointer"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-base md:text-lg lg:text-xl absolute text-black/80 bg-[#f5f5f5]">
                or
              </p>
            </div>
            <button
              onClick={googleSignIn}
              className="w-full text-[#060606] my-2 font-semibold bg-[#f5f5f5] border border-black/40 rounded-md p-3 md:p-4 lg:p-5 text-center flex items-center justify-center cursor-pointer"
            >
              <img src="/images/google-icon.png" className="h-6 mr-2" />
              Sign Up With Google
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-base md:text-lg lg:text-xl font-normal text-[#060606]">
              Already have an account?{" "}
              <Link to="/login">
                <span className="font-semibold underline underline-offset-2 cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
