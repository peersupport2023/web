import React, { useState } from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
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
import { CardData_2 } from "./CardData_2";

function RoadToMba() {
  const [open, setOpen] = React.useState(false);
  const [curr, setCurrent] = useState();
  const dataArray = CardData_2;

  let mappedDesc;
  if (curr) {
    mappedDesc = curr.description.map((desc, index) => (
      <li
        key={index}
        style={{
          fontSize: "1.2rem",
          margin: "1rem 0",
          textTransform: "none",
          listStyle: "none",
          fontWeight: index % 2 === 1 ? "800" : "500",
        }}
      >
        {desc}
      </li>
    ));
  }

  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Road To MBA "></AnimatedTitle>
      </div>
      <Box
        sx={{
          padding:"1rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "start",
          alignItems: "flex-start",
        }}
      >
        {dataArray.map((item, index) => (
          <Modal
            key={index}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
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
               <Card style={{
                  height: 220,
                }} onClick={() => setCurrent(item)}>
                  <Image src={item.image} ui={false} />
                  <CardContent>
                    <CardHeader>{item && item.header}</CardHeader>
                  </CardContent>
                </Card>
          
              </motion.div>
            }
          >
            <ModalHeader>
              {curr && curr.header}
              <ModalActions
                style={{ position: "absolute", top: 10, right: 10 }}
              >
                <Icon link name="close" onClick={() => setOpen(false)} />
              </ModalActions>
            </ModalHeader>
            <ModalContent  scrolling>
              
              <ModalDescription>
                <p>{mappedDesc}</p>
              </ModalDescription>
            </ModalContent>
          </Modal>
        ))}
      </Box>
    </>
  );
}

export default RoadToMba;
