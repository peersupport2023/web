import React from "react"
import { NavbarComponent } from "./components/NavbarComponent"
import { CarouselComponent } from "./components/CarouselComponent"
import About from "./components/About"
import Services from "./components/Services"
import ModalExampleContentImage from "./components/RoadToMBA"
function App() {

  return (
    <>
     <NavbarComponent/>
     <CarouselComponent/>
     <About/>
     <Services/>
     <ModalExampleContentImage/>
    </>
  )
}

export default App
