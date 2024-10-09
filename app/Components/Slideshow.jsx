// components/Slideshow.js
"use client";
import { useEffect, useState } from "react";
import styles from "./Slideshow.module.css";
import Image from "next/image";

const Slideshow = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Automatically change slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="contain">
      <div className={styles.slideshowContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.mySlides} ${styles.fade}`}
            style={{ display: slideIndex === index ? "block" : "none" }}
          >
            <Image
              src={slide.image}
              className={styles.propimage}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              slideIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)} // Add click handler
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
