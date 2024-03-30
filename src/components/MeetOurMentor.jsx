import React, { useEffect } from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MentorCard from "./MentorCard";
import { useUserAuth } from "../context/UserAuthContext";

const MeetOurMentor = () => {
  const { ment } = useUserAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  if (!ment) {
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
          <MentorCard key={index} item={item} index={index} />
        ))}
      </Box>
    </>
  );
};

export default MeetOurMentor;
