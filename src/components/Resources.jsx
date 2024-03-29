import React from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import { CardContent, Card, Icon } from "semantic-ui-react";
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
  const [open, setOpen] = React.useState(false);
  const [curr, setCurrent] = React.useState();
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
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
      {CardData_5.map((item, index) => (
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
              <Card key={item.id} onClick={() => setCurrent(item)}>
                <CardContent header={item.header} />
                
                <CardContent extra>
                  <Icon name="plus" />
                  View More
                </CardContent>
              </Card>
            </motion.div>
          }
        >
          <ModalHeader>
          {curr && curr.header}
            <ModalActions style={{ position: "absolute", top: 10, right: 10 }}>
              <Icon link name="close" onClick={() => setOpen(false)} />
            </ModalActions>
          </ModalHeader>
          <ModalContent image scrolling>
            <ModalDescription>
              <p>{curr && curr.desc}</p>
            </ModalDescription>
          </ModalContent>
        </Modal>
      ))}
      </div>
    </>
  );
}

export default Resources;
