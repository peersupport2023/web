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
      <div className="webinars-container">
        {webinars.map((webinar, index) => (
          <div className="webinar-card" key={index}>
            <div className="card2">
              <div className="card-image2">
                <img src={webinar.image} alt="Webinar Image" style={{ objectFit: "contain" }} />
              </div>
            </div>
            <div className="webinar-content">
              <div className="webinar-title">
                <AnimatedTitle name={webinar.title}></AnimatedTitle>
                <h3>{webinar.subHeading}</h3>
              </div>
              <ul className="webinar-description">
                {webinar.description.map((desc, index) => (
                  <li key={index} style={{ fontSize: "1.2rem", textTransform: "revert", listStyle: "outside" }}>
                    {desc}
                  </li>
                ))}
              </ul>
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