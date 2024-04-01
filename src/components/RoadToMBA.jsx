import React, { useState, useEffect } from "react";
import AnimatedTitle from "./AnimTitle";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { CardData_2 } from "./CardData_2";
import ModalCard from "./RoadToMbaPage";

function RoadToMba({ isHomePage }) {
  const [open, setOpen] = useState(false);
  const [curr, setCurrent] = useState();
  const dataArray = CardData_2;
  useEffect(() => {
    // Scroll to the top when ComponentB mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'smooth' for smooth scrolling
    });
  }, []);

  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Road To MBA "></AnimatedTitle>
      </div>
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <Grid container spacing={1} justifyContent="center" rowGap='2rem' columnGap="1rem">
          {isHomePage
            ? dataArray
                .slice(0, 4)
                .map((item, index) => (
                  <ModalCard
                    key={index}
                    item={item}
                    index={index}
                    open={open}
                    setOpen={setOpen}
                    setCurrent={setCurrent}
                    curr={curr}
                  />
                ))
            : dataArray.map((item, index) => (
                <ModalCard
                  key={index}
                  item={item}
                  index={index}
                  open={open}
                  setOpen={setOpen}
                  setCurrent={setCurrent}
                  curr={curr}
                />
              ))}
              </Grid>
          {!isHomePage ? (
            <>
              <div>
                <div className="heading" style={{ margin: "2rem" }}>
                  <AnimatedTitle name="Videos"></AnimatedTitle>
                </div>
                <div className="video-container">
                  <div className="card3">
                    <div className="card-image3">
                      <iframe
                        className="video-iframe"
                        src="https://www.youtube.com/embed/iDYHSHKFB0k"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        
      </Box>
    </>
  );
}

export default RoadToMba;
