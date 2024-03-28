import React, { useEffect } from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {Icon} from "semantic-ui-react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";

const MeetOurMentor = () => {
  const {ment} = useUserAuth();

  if (!ment) {
    // If services is undefined, return a loading state or an empty div
    return (
      <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
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
  console.log({ment})
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
            <Link to={`/services/item/${item._id}`}>
            <div className="card">
              <div className="profileImage">
                <img src={item.image} alt="" />
              </div>
              <div className="textContainer">
                <p className="name">{item.name}</p>
                <p className="profile">{item.college}</p>
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
            </Link>
          </motion.div>
        ))}
      </Box>
    </>
  );
};

export default MeetOurMentor;
