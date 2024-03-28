import React from "react";
import  NavbarComponent  from "./components/NavbarComponent";
import { CarouselComponent } from "./components/CarouselComponent";
import About from "./components/About";
import Services from "./components/Services";
import ModalExampleContentImage from "./components/RoadToMBA";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Footer from "./components/Footer";
// import FooterComponent from "./components/Footer";
import './App.css'
import MeetOurMentor from "./components/MeetOurMentor";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
    <UserAuthContextProvider>
      <Routes>
        <Route exact path="/" element={
          <>
        <NavbarComponent />
        <CarouselComponent />
        <About />
        <Services />
        <ModalExampleContentImage />
        <Footer/>
        </>
        }/>   
      <Route path="/MeetMentors" element={<MeetOurMentor/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
