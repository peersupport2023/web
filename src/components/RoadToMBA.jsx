import React from "react";
import AnimatedTitle from "./AnimTitle";
import { Box } from "@mui/material";
import { CardData_1 } from "./CardData_1";
import { motion } from "framer-motion";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  Modal,
  Icon,
} from "semantic-ui-react";

function ModalExampleContentImage() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="heading" style={{ margin: "2rem" }}>
        <AnimatedTitle name="Our Services ."></AnimatedTitle>
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
      {CardData_1.map((item, index) => (
       
      <Modal
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
            <Card>
              <Image
                src={item.image}
                wrapped
                ui={false}
              />
              <CardContent>
                <CardHeader>{item.header}</CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
            </motion.div>
        }
      >
        <ModalHeader>
          {item.header}
          <ModalActions style={{ position: "absolute", top: 10, right: 10 }}>
            <Icon link name="close" onClick={() => setOpen(false)} />
          </ModalActions>
        </ModalHeader>
        <ModalContent image>
          <Image
            size="large"
            src={item.image}
            wrapped
          />
          <ModalDescription>
            <p>{item.description}</p>
          </ModalDescription>
        </ModalContent>
      </Modal>
      
       ))}
       </Box>
    </>
  );
}

export default ModalExampleContentImage;
