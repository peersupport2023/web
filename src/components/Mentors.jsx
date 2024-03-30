import React from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import {Icon} from "semantic-ui-react";
import { Link } from "react-router-dom";
import MentorCard from "./MentorCard";
import { useUserAuth } from "../context/UserAuthContext";

function Mentors() {
  const openGoogleForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfin6cC5iR1Q89zQTGAnDBQhpjAdv1k_rZ0q5Fxu2Igb9EYxQ/viewform", "_blank");
  };
  const { ment } = useUserAuth();

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
      <div className="heading" style={{ margin: "1rem 2rem " }}>
        <AnimatedTitle name="Our Mentors " />
      </div>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        {ment.slice(0, 4).map((item, index) => (
          <MentorCard key={index} item={item} index={index} />
        ))}
      </Box>

      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "0 2rem",
          columnGap:"5rem",
        }}
      >
        
          <button  onClick={()=>openGoogleForm()}
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Book A Mock Interview
          </button>
        

        <Link to="/MeetMentors">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Meet all our mentors
          </button>
        </Link>
      </Box>
    </>
  );
}

export default Mentors;
