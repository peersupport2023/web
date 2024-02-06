import React from "react";
import AnimatedTitle from "./AnimTitle";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="heading" style={{ margin: "1rem 2rem " }}>
        <AnimatedTitle name="Who Are We "/>
      </div>
      
        <Box
        sx={{
          margin: "0 2rem",
          fontSize: { xs: "1.2rem", md: "1.2rem" },
          fontWeight: "100",
          textTransform: "capitalize",
          textAlign: "justify",
          
        }}
          
        >
          Welcome to Peer Support! Peer Support is an educational consultation
          platform to connect aspiring students with peers currently enrolled in
          esteemed colleges. Within our user-friendly portal, mentors from
          diverse backgrounds come together, providing a unique opportunity for
          aspirants to connect and engage in meaningful interactions.
        </Box>
      
      <div className="heading" style={{ margin: "1rem 2rem " }}>
        <AnimatedTitle name="Our Vision "></AnimatedTitle>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 80,
          delay: 0.5,
        }}
        style={{ display: "inline-block" }}
      >
        <Box
          sx={{
            margin: "0 2rem",
            fontSize: { xs: "1.2rem", md: "1.2rem" },
            fontWeight: "100",
            textTransform: "capitalize",
            textAlign: "justify",
          }}
        >
          We've initiated this platform to minimize the information asymmetry
          among candidates aiming for various colleges. Beginning with our focus
          on MBA, we are committed to expanding our services into other domains
          to provide comprehensive support across diverse educational pursuits.
        </Box>
      </motion.div>
      <div className="heading" style={{ margin: "1rem 2rem " }}>
        <AnimatedTitle
          name="What do we do?
"
        ></AnimatedTitle>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 80,
          delay: 0.5,
        }}
        style={{ display: "inline-block" }}
      >
        <Box
          sx={{
            margin: "0 2rem",
            fontSize: { xs: "1.2rem", md: "1.2rem" },
            fontWeight: "100",
            textTransform: "capitalize",
            textAlign: "justify",
          }}
        >
          Navigating the challenging journey of exam preparation for college
          admission often leaves aspirants with numerous questions. Whether it's
          about devising an effective preparation strategy or understanding the
          intricacies of interviews and college life, the need for guidance is
          paramount. This is where our platform steps in.
        </Box>
        <Box
          sx={{
            margin: "2rem",
            fontSize: { xs: "1.2rem", md: "1.2rem" },
            fontWeight: "100",
            textTransform: "capitalize",
            textAlign: "justify",
          }}
        >
          <b>
          Welcome to our website, your go-to destination for connecting with
          experienced mentors who have successfully navigated the same path
          you're on. Our mentors, drawn from recent batches of your dream
          college, are here to share their insights and help you navigate
          through your queries. These mentors offer valuable guidance and
          clarification on various aspects of exam preparation, interviews, and
          college life. Currently, our platform specializes in providing
          services tailored to the field of MBA.</b> 
        </Box>
      </motion.div>
    </>
  );
}

export default About;
