import React, { useEffect } from "react";

import Footer from "./Footer";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  CardHeader,
  CardContent,
  Card,
  Image,
  CardDescription,
  Icon,
} from "semantic-ui-react";
import { useUserAuth } from "../context/UserAuthContext";
import { CardData_3 } from "./CardData_3";

const MeetOurMentor = () => {
  const {ment} = useUserAuth();

  if (!ment) {
    // If services is undefined, return a loading state or an empty div
    return (
      <div className="container">
        <p>Loading mentors...</p>
      </div>
    );
  }
  // const dataArray = CardData_3;
  useEffect(() => {
    // Scroll to the top when ComponentB mounts
    window.scrollTo({
      top: 0,
      // You can use 'smooth' for smooth scrolling
    });
  }, []);

  return (
    <>
      <div className="m-[2rem]">
        <AnimatedTitle name="Meet Our Mentors"></AnimatedTitle>
      </div>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "space-evenly",
        }}
      >
        {ment.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.1,
              type: "spring",
              stiffness: 80,
              delay: (index / 2) * 0.2 + 0.5,
            }}
          >
            <div class="card">
              <div class="profileImage">
                <img src={item.image} alt="" />
              </div>
              <div class="textContainer">
                <p class="name">{item.name}</p>
                <p class="profile">{item.college}</p>
              </div>
              <a
                    href={`https://www.linkedin.com/in/${item.linkedinUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="linkedin"
                      style={{ marginLeft: "auto", fontSize: "1.5rem" }}
                    />
                  </a>
            </div>
          </motion.div>
        ))}
      </Box>
    </>
  );
};

export default MeetOurMentor;
