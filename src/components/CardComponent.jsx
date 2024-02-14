import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import { CardData_1 } from "./CardData_1";

const CardComponent = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {CardData_1.map((item, index) => (
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
          <Card sx={{ width: 300, height: 500, position: "relative" }}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.header}
            />
            <CardContent sx={{ position: "absolute", bottom: 0, right: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.header}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Button onClick={() => handleClick(item.url)}>{item.btntitle}</Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </>
  );
};

export default CardComponent;
