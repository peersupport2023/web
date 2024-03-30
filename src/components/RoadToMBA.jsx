import React, { useState } from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { CardData_2 } from "./CardData_2";
import ModalCard from "./RoadToMbaPage";

function RoadToMba({ isHomePage }) {
  const [open, setOpen] = useState(false);
  const [curr, setCurrent] = useState();
  const dataArray = CardData_2;

  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Road To MBA "></AnimatedTitle>
      </div>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "start",
          alignItems: "flex-start",
        }}
      >
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
        {!isHomePage ? (
          <div className="heading" style={{ margin: "2rem" }}>
            <AnimatedTitle name="Videos "></AnimatedTitle>
          </div>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}

export default RoadToMba;
