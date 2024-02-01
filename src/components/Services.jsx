import React from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import CardComponent from "./CardComponent";
function Services() {
  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Our Services ."></AnimatedTitle>
      </div>
      <Box
        sx={{
          padding: " 1rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <CardComponent />
      </Box>
    </>
  );
}

export default Services;
