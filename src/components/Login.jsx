import React, { useState,useEffect } from "react";
import { ref, get, getDatabase } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { signInWithRedirect,GoogleAuthProvider,getRedirectResult } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
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



  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.name === "reg") {
      const inputValue = e.target.value.replace(/[^0-9]/g, "");
      // Limit to 10 characters
      inputValue.slice(0, 10);
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = values.email;
      const password = values.password;

      // Check if the provided email exists in the database
      const userRef = ref(getDatabase(), "users");
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const users = snapshot.val();

        // Find the user with the provided email
        const userWithEmail = Object.values(users).find(
          (user) => user.email === email
        );

        if (userWithEmail && userWithEmail.password === password) {
          // Authentication successful
          console.log("User logged in successfully:", userWithEmail);

          // Set the user token in localStorage (you might want to use a more secure method for tokens)
          localStorage.setItem("userToken", userWithEmail.email);

          // Redirect to the home page
          navigate("/");
        } else {
          // Handle invalid credentials (show an alert, set an error state, etc.)
          console.error("Invalid email or password");
          alert("Invalid Credentials");
        }
      } else {
        // Handle no users in the database
        console.error("No users found in the database");
        alert("No users found in the database");
      }
    } catch (error) {
      // Handle login error (show an alert, set an error state, etc.)
      console.error("Error logging in:", error.message);
      alert("Error logging in");
    }
  };
  console.log(values);
  return (
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
      <h1 className="text-base md:text-xl lg:text-2xl text-[#060606] font-semibold mb-4">
        Peer Support
      </h1>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col mb-4">
          <h3 className="text-lg md:text-3xl lg:text-4xl font-semibold mb-2">
            Login
          </h3>
          <p className="text-base md:text-lg lg:text-xl mb-2">
            Welcome back! Please enter your details
          </p>
        </div>
  
        <div className="w-full flex flex-col">
          <input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          <input
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            type="password"
            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <p className="text-sm md:text-base lg:text-lg">Remember me</p>
          </div>
          <p className="text-sm md:text-base lg:text-lg font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
            Forgot Password
          </p>
        </div>
        <div className="w-full flex flex-col my-4">
          <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-3 md:p-4 lg:p-5 text-center flex items-center justify-center cursor-pointer" onClick={handleLogin}>
            Log In
          </button>
          <Link to='/signup'>
          <button className="w-full text-[#060606] my-2 font-semibold bg-[#f5f5f5] border border-black rounded-md p-3 md:p-4 lg:p-5 text-center flex items-center justify-center cursor-pointer" >
            Register
          </button>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="text-base md:text-lg lg:text-xl absolute text-black/80 bg-[#f5f5f5]">or</p>
        </div>
        <button onClick={googleSignIn} className="w-full text-[#060606] my-2 font-semibold bg-[#f5f5f5] border border-black/40 rounded-md p-3 md:p-4 lg:p-5 text-center flex items-center justify-center cursor-pointer">
          <img src="/images/google-icon.png" className="h-6 mr-2" />
          Sign In With Google
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-base md:text-lg lg:text-xl font-normal text-[#060606]">
          Don't have an account?{" "}
          <Link to='/signup'>
          <span className="font-semibold underline underline-offset-2 cursor-pointer">
            Signup
          </span>
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;
