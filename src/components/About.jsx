import React from "react";
import AnimatedTitle from "./AnimTitle";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Who Are We ."></AnimatedTitle>
      </div>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Our Mission ."></AnimatedTitle>
      </div>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Our Vision ."></AnimatedTitle>
      </div>
    </>
  );
}

export default About;
