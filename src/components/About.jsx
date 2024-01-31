import React from "react";
import AnimatedTitle from "./AnimTitle";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <Box
        sx={{
          margin: "2rem",
        }}
      >
        <div className="heading">
          <AnimatedTitle name="Who Are We ."></AnimatedTitle>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDrection: { xs: "column", sm: "row" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: "20%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 60,
              delay: 0.5,
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "1.3rem", md: "1.3rem" },
                fontWeight: "400",
                textTransform: "capitalize",
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              molestias, omnis porro totam quasi odio sequi cumque, laboriosam
              praesentium asperiores ipsam ut, voluptatibus sunt cum tempore
              consequatur nihil sint reiciendis ducimus amet!
            </Box>
          </motion.div>
        </Box>
        <div className="heading">
          <AnimatedTitle name="Our Mission ."></AnimatedTitle>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDrection: { xs: "column", sm: "row" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: "20%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 60,
              delay: 0.5,
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "1.3rem", md: "1.3rem" },
                fontWeight: "400",
                textTransform: "capitalize",
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              molestias, omnis porro totam quasi odio sequi cumque, laboriosam
              praesentium asperiores ipsam ut, voluptatibus sunt cum tempore
              consequatur nihil sint reiciendis ducimus amet!
            </Box>
          </motion.div>
        </Box>
        <div className="heading">
          <AnimatedTitle name="Our Vision ."></AnimatedTitle>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDrection: { xs: "column", sm: "row" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: "20%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 60,
              delay: 0.5,
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "1.3rem", md: "1.3rem" },
                fontWeight: "400",
                textTransform: "capitalize",
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              molestias, omnis porro totam quasi odio sequi cumque, laboriosam
              praesentium asperiores ipsam ut, voluptatibus sunt cum tempore
              consequatur nihil sint reiciendis ducimus amet!
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default About;
