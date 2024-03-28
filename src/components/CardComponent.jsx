import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useUserAuth } from "../context/UserAuthContext";
import "./Button.css";

const CardComponent = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const { services } = useUserAuth();
  const LazyCard = lazy(() => import("./LazyCard")); // Importing the module lazily

  if (!services) {
    // If services is undefined, return a loading state or an empty div
    return (
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    );
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {services.map((item, index) => (
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
            <LazyCard item={item} handleClick={handleClick} />
          </motion.div>
        ))}
      </Suspense>
    </>
  );
};

export default CardComponent;
