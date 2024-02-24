import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardData_1 } from "./CardData_1";
// import { useUserAuth } from "../context/UserAuthContext";
import "./Button.css";
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
          <div class="relative flex w-80 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md" style={{background:"#fff"}}>
            <div style={{
               padding: "1rem",
               display: "flex",
               flexWrap: "wrap",
               rowGap: "1.2rem",
               columnGap: "1rem",
               justifyContent: "center",
               alignItems: "flex-start",
            }}>
            <img src={item.image} alt="" class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r object-contain" />
            </div>
            
            <div class="p-6">
              <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.header}
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {item.description}
              </p>
            </div>
            <div class="p-6 pt-0 flex justify-center">
              <button onClick={()=>handleClick(item.url)}
                data-ripple-light="true"
                type="button"
                class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {item.btntitle}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CardComponent;
