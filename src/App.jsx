import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import NavbarComponent from "./components/NavbarComponent";
import { CarouselComponent } from "./components/CarouselComponent";
import About from "./components/About";
import Services from "./components/Services";
import ModalExampleContentImage from "./components/RoadToMBA";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Footer from "./components/Footer";
// import FooterComponent from "./components/Footer";
import './App.css'
import MeetOurMentor from "./components/MeetOurMentor";
import Webinars from "./components/Webinars";
import Mentors from "./components/Mentors";
import RoadToMba from "./components/RoadToMbaPage";
import Resources from "./components/Resources";
function App() {
  useEffect(() => {
    // Scroll to the top when ComponentB mounts
    window.scrollTo({
      top: 0,
      behavior:"smooth" // You can use 'smooth' for smooth scrolling
    });
  }, []);
  return (
    <UserAuthContextProvider>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={
          <>
        
        <CarouselComponent />
        <About />
        <Services />
        <ModalExampleContentImage />
        <Mentors/>
        
        </>
        }/> 
        <Route path="/webinars" element={<Webinars/>}/>
      <Route path="/MeetMentors" element={<MeetOurMentor/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/roadtomba" element={<RoadToMba/>}/>
      <Route path="/resources" element={<Resources/>}/>
      </Routes>
      <Footer/>
    </UserAuthContextProvider>
  );
}

export default App;
