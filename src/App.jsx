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
import "./App.css";
import Mentors from "./components/Mentors";
import Webinars from "./components/Webinars";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarComponent />
              <CarouselComponent />
              <About />
              <Services />
              <ModalExampleContentImage />
              <Mentors />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/webinars" element={<Webinars />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
