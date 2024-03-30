import React from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Card,
  Image,
  Icon,
} from "semantic-ui-react";

function ModalCard({ item, index, open, setOpen, setCurrent, curr }) {
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
          <Card
            style={{
              height: 220,
            }}
            onClick={() => setCurrent(item)}
          >
            <Image src={item.image} ui={false} />
            <Card.Content>
              <Card.Header>{item && item.header}</Card.Header>
            </Card.Content>
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
      <ModalContent scrolling>
        <ModalDescription>
          <p>{mappedDesc}</p>
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
}

export default ModalCard;
