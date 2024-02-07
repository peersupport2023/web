import React from "react";
import AnimatedTitle from "./AnimTitle";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

function Webinars() {
  return (
    <>
      <NavbarComponent />
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Webinars "></AnimatedTitle>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Switch to column layout for phone view
          padding: "1rem", // Adjust padding for better spacing
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start", // Align items at the top
          }}
        >
          <Box
            className="card"
            sx={{
              borderRadius: "0.5rem",
              border: "0.1rem solid #0f1922",
              width: "70rem",
              height: "11rem",
              background: `url(/images/IIM_Calcutta.jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></Box>
          <Box
        sx={{
          fontSize: "1rem",
          fontWeight: "200",
          textAlign: "justify",
          paddingLeft: "1rem", // Add left padding for spacing between image and text
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
        suscipit numquam corrupti, impedit maxime est expedita sapiente ad nam
        amet non autem voluptatum vero consequatur eos dolorum, iusto
      </Box>
        </Box>
      </Box>
      
      <Footer />
    </>
  );
}

export default Webinars;
