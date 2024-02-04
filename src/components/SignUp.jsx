import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext"
import { ref, get,push, getDatabase } from "firebase/database";
import { database } from "../firebase";
const Signup = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
      const navigate = useNavigate();
      const [values, setValues] = useState({
          Name: '',
          email: '',
          password: '',
          cpassword: "",
          nos: "",
      });
      const [checked, setChecked] = React.useState(true);
      const handleChange2 = (event) => {
          setChecked(event.target.checked);
      };
  
      const [showPassword, setShowPassword] = React.useState(false);
  
      const handleClickShowPassword = () => setShowPassword((show) => !show);
  
      const handleMouseDownPassword = (event) => {
          event.preventDefault();
      };
  
      const handleChange = (e) => {
          if (e.target.name === "nos") {
              const inputValue = e.target.value.replace(/[^0-9]/g, '');
              // Limit to 10 characters
              inputValue.slice(0, 10);
          }
  
          setValues({
              ...values,
              [e.target.name]: e.target.value,
          });
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              const db = database;
              const usersRef = ref(db, 'users');
      
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
                  handleClickOpen();
                  return;
              }
      
              // Push user data to the 'users' node
              await push(usersRef, {
                  Name: values.Name,
                  email: values.email,
                  password: values.password,
                  contactNumber: values.nos,
              });
      
              console.log('User data submitted to Firebase:', values);
              navigate('/login');
          } catch (error) {
              console.error('Error submitting user data to Firebase:', error);
          }
      };
      
      console.log(values)

  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row items-start">
    <div className="relative w-full md:w-1/2 h-[50vh] md:h-full flex flex-col">
      <div className="absolute top-[20%] left-[10%] flex flex-col">
        <h1 className="text-lg md:text-4xl lg:text-5xl text-white font-bold my-4">
          Turn Your Ideas Into Reality
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white font-normal">
          Start for free and get attractive offers from the community
        </p>
      </div>
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="#"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full md:w-1/2 max-w-[500px] mx-auto h-full bg-[#f5f5f5] flex flex-col p-4 md:p-8 lg:p-12 justify-between items-center">
      <h1 className="text-base md:text-xl lg:text-2xl text-[#060606] font-semibold mb-4">
        Interactive Brand
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
            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
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
        <div className="w-full flex items-center justify-between">          
        </div>
        <div className="w-full flex flex-col my-4">
          <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-3 md:p-4 lg:p-5 text-center flex items-center justify-center cursor-pointer" onClick={handleSubmit}>
            Register
          </button>
        </div>
        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="text-base md:text-lg lg:text-xl absolute text-black/80 bg-[#f5f5f5]">or</p>
        </div>
        <div className="w-full text-[#060606] my-2 font-semibold bg-[#f5f5f5] border border-black/40 rounded-md p-3 md:p-4 lg:p-5 text-center flex items-center justify-center cursor-pointer">
          <img src="/images/google-icon.png" className="h-6 mr-2" />
          Sign Up With Google
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-base md:text-lg lg:text-xl font-normal text-[#060606]">
          Already have an account?{" "}
          <Link to='/login'>
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