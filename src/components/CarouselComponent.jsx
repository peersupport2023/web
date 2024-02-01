"use client";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true} style={{
      height: "100vh",
    }}>
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-1"
        style={{ width: "100vw", height: "100%", objectFit: "contain" }}
      />
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-2"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-3"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-4"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Carousel>
  );
};
