"use client";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true} style={{
      padding:"1rem",
      height:"50vh"
    }}>
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-1"
        height="60vh"  // 60% of the viewport height
        width="100%"   // 100% of the parent container's width
      />
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-2"
        height="60vh"  // 60% of the viewport height
        width="100%"   // 100% of the parent container's width
      />
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-3"
        height="60vh"  // 60% of the viewport height
        width="100%"   // 100% of the parent container's width
      />
      <img
        src="/images/IIM_Calcutta.jpg"
        alt="slider-4"
        height="60vh"  // 60% of the viewport height
        width="100%"   // 100% of the parent container's width
      />
    </Carousel>
  );
};
