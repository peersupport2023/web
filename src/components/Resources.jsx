import React,{useEffect, useState} from "react";
import AnimatedTitle from "./AnimTitle";
import { Box, Paper } from "@mui/material";
import { CardContent, Card, Icon, Button } from "semantic-ui-react";
import { motion } from "framer-motion";
import { CardData_4 } from "./CardData_4";
import { CardData_5 } from "./CardData_5";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  CardHeader,
  CardDescription,
  Image,
  Modal,
} from "semantic-ui-react";

function Resources() {
  const dataArray = CardData_4;
  const [open, setOpen] = useState(false);
  const [curr, setCurrent] = useState(null);

  const handleOpen = (item) => {
    setCurrent(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    // Scroll to the top when ComponentB mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'smooth' for smooth scrolling
    });
  }, []);
  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Resources"> </AnimatedTitle>
      </div>
      <hr
        style={{
          border: "1px solid #ccc", // Change color and style as needed
          width: "50vw",
          margin: "2rem", // Adjust margin as needed
        }}
      />
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Syllabus For MBA"> </AnimatedTitle>
      </div>

      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        {dataArray.slice(0, 3).map((item, index) => (
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
            <Card key={item.id}>
              <CardContent header={item.header} />
              <CardContent description />
              <CardContent extra>
                <Icon name="plus" />
                View More
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <hr
        style={{
          border: "1px solid #ccc", // Change color and style as needed
          width: "50vw",
          margin: "2rem ", // Adjust margin as needed
          display: "flex",
          alignItems: "flex-start",
        }}
      />
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Exam Pattern"> </AnimatedTitle>
      </div>
      <hr
        style={{
          border: "1px solid #ccc", // Change color and style as needed
          width: "50vw",
          margin: "2rem ", // Adjust margin as needed
          display: "flex",
          alignItems: "flex-start",
        }}
      />
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Transcripts"> </AnimatedTitle>
      </div>
      <hr
        style={{
          border: "1px solid #ccc", // Change color and style as needed
          width: "50vw",
          margin: "2rem ", // Adjust margin as needed
          display: "flex",
          alignItems: "flex-start",
        }}
      />
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {CardData_5.map((item, index) => (
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
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                border: "0.1rem solid black",
                width: { xs: "24rem", md: "25rem" },
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                margin: "1rem",
              }}
              key={index}
              onClick={() => handleOpen(item)}
            >
              <div style={{ fontWeight: "600", fontSize: "1.6rem" }}>
                {item.header}
              </div>
            </Paper>
          </motion.div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>{curr && curr.header}</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <iframe
              title={curr && curr.header}
              src={curr && curr.url}
              width="100%"
              height="600px"
              style={{ border: "none" }}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default Resources;
