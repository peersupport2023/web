import React from "react";
import AnimatedTitle from "./AnimTitle";
import { CardData_3 } from "./CardData_3";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  Modal,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Mentors() {
  // const {ment} = useUserAuth();

  // if (!ment) {
  //   // If services is undefined, return a loading state or an empty div
  //   return (
  //     <div className="container">
  //       <p>Loading mentors...</p>
  //     </div>
  //   );
  // }
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
        {CardData_3.slice(0, 4).map((item, index) => (
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
          <Link to="/">
          <button data-ripple-light="true"
                type="button"
                class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Book A Mock Interview
          </button>
          </Link>
          
          <Link to="/MeetMentors">
            <button data-ripple-light="true"
                type="button"
                class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Meet all our mentors
            </button>
          </Link>
        </Box>
        
      </Box>
    </>
  );
}

export default Mentors;
