import React from "react"
import { NavbarComponent } from "./components/NavbarComponent"
import { CarouselComponent } from "./components/CarouselComponent"
import About from "./components/About"
import Services from "./components/Services"
function App() {

  return (
    <>
     <NavbarComponent/>
     <CarouselComponent/>
     <About/>
     <Services/>
    </>
  )
}

export default App
