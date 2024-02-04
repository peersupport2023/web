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
      <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: 0.5 }} style={{display:"inline-block"}}
            >
      <Box sx={{margin:"2rem",fontSize:{xs:"1.2rem",md:"1.2rem"},fontWeight:"100",textTransform:"capitalize",textAlign:"justify"}}>
      Welcome to Peer Support!
Peer Support is an educational consultation platform to connect aspiring students with peers currently enrolled in esteemed colleges. Within our user-friendly portal, mentors from diverse backgrounds come together, providing a unique opportunity for aspirants to connect and engage in meaningful interactions.

 
            </Box>
            </motion.div>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Our Mission ."></AnimatedTitle>
      </div>
      <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: 0.5 }} style={{display:"inline-block"}}
            >
      <Box sx={{margin:"2rem",fontSize:{xs:"1.2rem",md:"1.2rem"},fontWeight:"100",textTransform:"capitalize",textAlign:"justify"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores suscipit numquam corrupti, impedit maxime est expedita sapiente ad nam amet non autem voluptatum vero consequatur eos dolorum, iusto asperiores commodi minima praesentium assumenda voluptatem totam at doloremque. Tempora sunt quia consectetur reiciendis pariatur provident vero libero voluptatibus fugit, expedita hic non! Impedit, repellendus sint. Quaerat deleniti, et, saepe quos vitae laboriosam illo impedit mollitia voluptatum provident soluta dicta ipsam asperiores voluptatibus excepturi odit eligendi. Commodi, vitae asperiores! Maxime expedita qui, 
            </Box>
            </motion.div>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Our Vision ."></AnimatedTitle>
      </div>
      <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, type: "spring", stiffness: 80, delay: 0.5 }} style={{display:"inline-block"}}
            >
      <Box sx={{margin:"2rem",fontSize:{xs:"1.2rem",md:"1.2rem"},fontWeight:"100",textTransform:"capitalize",textAlign:"justify"}}>
      We've initiated this platform to minimize the information asymmetry among candidates aiming for various colleges. Beginning with our focus on MBA, we are committed to expanding our services into other domains to provide comprehensive support across diverse educational pursuits.
            </Box>
            </motion.div>
    </>
  );
}

export default About;
