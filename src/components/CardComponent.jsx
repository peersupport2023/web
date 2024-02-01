// import React from "react";
// import { Card } from "semantic-ui-react";
import { CardData_1 } from "./CardData_1";
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// function truncate(string, n) {
//   return string?.length > n ? string.substr(0, n - 1) + '...' : string;
// }

// const CardComponent = () => (
  
//   <>
//     {CardData_1.map((item, index) => (
      // <motion.div
      //   initial={{ opacity: 0, y: 50 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: true }}
      //   transition={{
      //     duration: 0.1,
      //     type: "spring",
      //     stiffness: 80,
      //     delay: (index / 2) * 0.2 + 0.5,
      //   }}
      // >
//         <Card
//           image={item.image}
//           header={item.header}
//           description={truncate(item.description)}
//         />
//       </motion.div>
//     ))}
//   </>
// );

// export default CardComponent;

import React from 'react'


// import {
//   CardMeta,
//   CardHeader,
//   CardDescription,
//   CardContent,
//   Card,
//   Icon,
//   Image,
// } from 'semantic-ui-react'

const CardComponent = () => (
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
         <Card sx={{ width: 345, height:500 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
    </Card>
      </motion.div>
    ))}
  </>
)

export default CardComponent
