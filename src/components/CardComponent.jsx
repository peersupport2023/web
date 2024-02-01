// import React from "react";
// import { Card } from "semantic-ui-react";
import { CardData_1 } from "./CardData_1";
import { motion } from "framer-motion";

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
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const CardComponent = () => (
  <>
  {CardData_1.map((item,index) =>(
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
  <Card>
    <Image src={item.image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{item.header}</CardHeader>
      <CardDescription>
        {item.description}
      </CardDescription>
    </CardContent>
  </Card>
  </motion.div>
  ))}
  </>
)

export default CardComponent
