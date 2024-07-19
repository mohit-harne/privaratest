"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
import am1 from "../../public/img/amenities1.png";
import am2 from "../../public/img/amenities2.png";
import am3 from "../../public/img/amenities3.png";
import am4 from "../../public/img/amenities4.png";
import am5 from "../../public/img/amenities5.png";
import am6 from "../../public/img/amenities6.png";
import am7 from "../../public/img/amenities7.png";
import am8 from "../../public/img/amenities8.png";
import am9 from "../../public/img/amenities9.png";

export default function Widget() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContent = scrollContainerRef.current;
    const scrollStep = scrollContent.clientWidth / 3; // Width of three images
    let scrollAmount = 0;

    function autoScroll() {
      scrollAmount += scrollStep;
      if (
        scrollAmount >=
        scrollContent.scrollWidth - scrollContent.clientWidth
      ) {
        scrollAmount = 0;
        // Immediately jump to the beginning without smooth transition
        scrollContent.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "auto",
        });
      } else {
        scrollContent.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }

    const scrollInterval = setInterval(autoScroll, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="container pt-4">
      <div
        className="scroll-container overflow-hidden position-relative"
        ref={scrollContainerRef}
      >
        <div className="scroll-content d-flex">
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am1}
              alt="Entrance"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Entrance</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am9}
              alt="Playground"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Playground</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am3}
              alt="Drainage Line"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Drainage Line</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am6}
              alt="Sewerline"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Sewerline</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am7}
              alt="Fencing"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Fencing</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am8}
              alt="Electrification"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Electrification</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am4}
              alt="Water Source"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Water Source</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am5}
              alt="Cement Road"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Cement Road</p>
          </div>
          <div className="scroll-item flex-shrink-0">
            <Image
              src={am2}
              alt="Tree Plantation"
              className="img-fluid"
              height={35}
              width={35}
            />
            <p>Tree Plantation</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scroll-container {
          overflow-x: hidden;
        }
        .scroll-content {
          display: flex;
          width: max-content;
        }
        .scroll-item {
          flex: 0 0 calc(100% / 3);
          text-align: center;
          padding: 10px;
        }
        .img-fluid {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
