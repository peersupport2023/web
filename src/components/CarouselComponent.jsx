"use client";
import { Carousel } from "keep-react";

export const CarouselComponent = () => {
  // Calculate the aspect ratio dynamically based on the viewport width
  const aspectRatio = window.innerWidth >= 768 ? "16/9" : "4/3";

  return (
    <div style={{  overflow: "hidden", aspectRatio }}>
      <Carousel
        slideInterval={5000}
        showControls={true}
        indicators={true}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          objectFit:"contain"
        }}
      >
        <img
          src="/images/Website cat mba .png"
          alt="slider-1"
          style={{ objectFit: "contain" }}
        />
        <img
          src="/images/Website cat mba  (1).png"
          alt="slider-2"
          style={{ width: "100%", flex: "1", objectFit: "contain" }}
        />
        <img
          src="/images/Website cat mba .png"
          alt="slider-3"
          style={{ width: "100%", flex: "1", objectFit: "contain" }}
        />
        <img
          src="/images/Website cat mba  (1).png"
          alt="slider-4"
          style={{ width: "100%", flex: "1", objectFit: "contain" }}
        />
      </Carousel>
    </div>
  //   <div className="image-slider" style={{
  //     width: "100px",
  // height: "100px",
  // position: "relative",
  // backgroundColor: "red",
  // animationName: "example",
  // animationDuration: "4s",
      
  //   }}></div>
  );
};
