import React from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import CardComponent from "./CardComponent";

function Services() {
  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Our Services "></AnimatedTitle>
      </div>
      <Box
        sx={{
          padding: "0.5rem",
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
      {/* Apply inline styles to make the iframe responsive */}
      <div style={{ width: "100%", maxWidth: "100%", height: "600px", overflow: "hidden" }}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQsmjbj-PpO6FuLY1nO0LHUFscMnRahyAXp-tfjjsFXhBPDfvXEuEvT2eCc33s8ArX7Lggly4a4F1Se/pubhtml?widget=true&amp;headers=false"
          title="Google Sheets Embed"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </div>
    </>
  );
}

export default Services;
