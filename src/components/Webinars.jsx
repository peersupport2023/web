import React from "react";
import AnimatedTitle from "./AnimTitle";

import PropTypes from "prop-types";
import { Box } from "@mui/material";

function Webinars({ webinars }) {
  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Webinars "></AnimatedTitle>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
        }}
      >
      {webinars.map((webinar, index) => (
        <div className="flex flex-wrap justify-center" key={index}>
          <div className="">
            <div className="card2">
              <div className="card-image2">
                <img
                  src={webinar.image}
                  alt="Webinar Image"
                  style={{
                    objectFit: "contain", 
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-screen">
            <div
              style={{
                display:"flex",
                flexDirection:"column",
                fontSize: "1rem",
                fontWeight: "200",
                textAlign: "start",
                padding: "0.7rem 2rem", // Add left padding for spacing between image and text
              }}
            >
              <div className="heading">
                <AnimatedTitle name={webinar.title}></AnimatedTitle>
                <h3>{webinar.subHeading}</h3>
              </div>
              
              {webinar.description.map((desc, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "1.2rem",
                    margin: "1rem",
                    padding:"0 0.4rem",
                    textTransform: "revert",
                    listStyle: "outside",
                  }}
                >
                  {desc}
                </li>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

Webinars.propTypes = {
  webinars: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Webinars;
