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
        </>
        }/>      
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
