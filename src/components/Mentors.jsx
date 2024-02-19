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

function Mentors() {
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
            <Card style={{ height: "20rem", width: "300px" }}>
              <Image
                src={item.image}
                ui={false}
                style={{ height: "75%", objectFit: "contain" }}
              />
              <CardContent style={{ height: "40%" }}>
                <CardHeader>{item && item.name}</CardHeader>
                <CardDescription
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {item.college}
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
                </CardDescription>
              </CardContent>
            </Card>
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
          }}
        >
          <button className="text-blacks my-2 font-semibold bg-custom-blue rounded-md p-3 md:p-4 lg:p-3 text-center cursor-pointer">
            Book A Call
          </button>
          <Link to="/MeetMentors">
            <button className="text-blacks my-2 font-semibold bg-custom-blue rounded-md p-3 md:p-4 lg:p-3 text-center cursor-pointer">
              Meet all our mentors
            </button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Mentors;
