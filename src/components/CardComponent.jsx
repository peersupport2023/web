import React from "react";
import { Card } from "semantic-ui-react";
import { CardData_1 } from "./CardData_1";
import { motion } from "framer-motion";
const CardComponent = () => (
  <>
    {CardData_1.map((item, index) => (
      <motion.div
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
          image={item.image}
          heading={item.heading}
          description={item.description}
        />
      </motion.div>
    ))}
  </>
);

export default CardComponent;
