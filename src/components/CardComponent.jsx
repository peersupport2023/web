import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardData_1 } from "./CardData_1";
// import { useUserAuth } from "../context/UserAuthContext";

const CardComponent = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  // const {services} = useUserAuth();

  // if (!services) {
  //   // If services is undefined, return a loading state or an empty div
  //   return (
  //     <div className="container">
  //       <p>Loading services...</p>
  //     </div>
  //   );
  // }

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
          <Card sx={{ position: "relative", width: 300, height: 500 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.header}
            />
            <CardContent sx={{ position: "relative", bottom: 0, right: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.header}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActionArea
              onClick={() => handleClick(item.url)}
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "start",
                bottom: "0",
                right: "0",
                color: "#179090",
                padding: "0.5rem 1rem",
              }}
            >
              {item.btntitle}
            </CardActionArea>
          </Card>
        </motion.div>
      ))}
    </>
  );
};

export default CardComponent;
