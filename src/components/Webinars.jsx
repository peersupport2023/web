import React from "react";
import AnimatedTitle from "./AnimTitle";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

function Webinars() {
  const aspectRatio = window.innerWidth >= 768 ? "16/9" : "4 / 3";
  const widthRatio = window.innerWidth >= 768 ? "auto":"80rem"
  return (
    <>
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
              width:`${widthRatio}`, // Adjusted width for responsiveness
              height: "15rem", // Adjusted height for responsiveness
              aspectRatio, // 16:9 aspect ratio for responsive image
              position: "relative", // Ensure aspect ratio works
              overflow: "hidden", // Prevent image overflow
            }}
          >
            <img
              src="/images/IIM_Calcutta.jpg"
              alt="Webinar Image"
              style={{
                
                width: "100%", // Ensure image covers entire container
                height: "100%", // Ensure image covers entire container
                objectFit: "contain", // Maintain aspect ratio and cover container
              }}
            />
          </Box>
          <Box
            sx={{
              fontSize: "1rem",
              fontWeight: "200",
              textAlign: "justify",
              paddingLeft: "1rem", // Add left padding for spacing between image and text
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            suscipit numquam corrupti, impedit maxime est expedita sapiente ad
            nam amet non autem voluptatum vero consequatur eos dolorum, iusto
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start", // Align items at the top
            padding:"1rem 0"
          }}
        >
          <Box
            className="card"
            sx={{
              borderRadius: "0.5rem",
              border: "0.1rem solid #0f1922",
              width:`${widthRatio}`, // Adjusted width for responsiveness
              height: "15rem", // Adjusted height for responsiveness
              aspectRatio, // 16:9 aspect ratio for responsive image
              position: "relative", // Ensure aspect ratio works
              overflow: "hidden", // Prevent image overflow
            }}
          >
            <img
              src="/images/IIM_Calcutta.jpg"
              alt="Webinar Image"
              style={{
                
                width: "100%", // Ensure image covers entire container
                height: "100%", // Ensure image covers entire container
                objectFit: "contain", // Maintain aspect ratio and cover container
              }}
            />
          </Box>
          <Box
            sx={{
              fontSize: "1rem",
              fontWeight: "200",
              textAlign: "justify",
              paddingRight: "1rem", // Add left padding for spacing between image and text
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            suscipit numquam corrupti, impedit maxime est expedita sapiente ad
            nam amet non autem voluptatum vero consequatur eos dolorum, iusto
          </Box>
        </Box>
      </Box>

    </>
  );
}

export default Webinars;
