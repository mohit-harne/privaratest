"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import header from "../../../../../public/img/property_top_bg.png";
import p1 from "../../../../../public/img/carousel-6.jpg";
import Slideshow from "../../../../Components/Slideshow";
import VIHAR_5 from "../../../../../public/img/property_logo/VIHAR_5.png";
import Qr from "@mui/icons-material/QrCode2";
import TabsBox from "../../../../Components/TabsBox";
import Ams from "../../../../Components/Amslider";
import "../../../../styles/bootstrap.min.css";
import "../../../../styles/common.css";
import "../../../../styles/style.css";
import styles from "../../../../Components/Slideshow.module.css";
import Privara_Vihar_5_Rera_Code from "../../../../../public/img/RERA/Privara_Vihar_5_Rera_Code.jpg";

function Property5() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { image: p1 },
    { video: "https://www.youtube.com/embed/Ey5xZPAGF_Q?autoplay=1&mute=1" },
  ];

  const tabs = [
    {
      label: "Introduction",
      content: (
        <div className="Child1">
          <h3>Privara Vihar 5</h3>
          <a className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="25px"
              height="25px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <strong>Wathoda Nagpur</strong>
          </a>
          <div className="d-flex flex-column text-dark mt-3">
            <p>
              <b>Plot Area:</b> 2.25 ACRES
            </p>
            <p>
              <b>Number Of Plots:</b> 36
            </p>
          </div>
          <p className="text-dark mb-2 text-align-justify">
            Discover the essence of harmonious living at Privara Vihar 5 in
            Tarodi, Nagpur. This exclusive residential enclave features 36
            strategically positioned plots, with state-of-the-art amenities to
            enhance the quality of life for its residents.
          </p>
        </div>
      ),
    },
    {
      label: "Proximity",
      content: (
        <div className="pt-2">
          <p className="card-title text-dark top_heading pt-2">
            <b>Proximity</b>
          </p>
          <ol className="list-outline">
            <li>PM Awas Yojana – 1 KM</li>
            <li>Shri Swaminarayan Mandir – 5.2 KM</li>
            <li>Symbiosis University – 1.5 KM</li>
          </ol>
        </div>
      ),
    },
    {
      label: "RERA Code",
      icon: <Qr />,
      content: (
        <div className="d-flex justify-content-center">
          <a href="#">
            <Image
              className="item-align-center"
              src={Privara_Vihar_5_Rera_Code}
              alt="RERA Code"
              height={300}
              width={300}
            />
          </a>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 100000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdf/PRIVARA_VIHAR_5_BROCHURE.pdf"; // Correct path inside the public folder
    link.download = "PRIVARA_VIHAR_5_BROCHURE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Header */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="breadbox mt-4 pt-4 text-center">
            <h1 className="mt-5 pt-5 text-white prophead">Property Location</h1>
          </div>
          <div className="flex animated fadeIn">
            <Image
              className="pbanner img-fluid"
              src={header}
              alt="Header Image"
              priority
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid py-3">
        <div className="container">
          <div
            className=" text-center mx-auto mt-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <div className="logo-container ">
              <Image src={VIHAR_5} alt="Logo" className="logoprop mt-5" />
            </div>
          </div>
          <div className="m-3">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn py-2" data-wow-delay="0.1s">
                <div className="propslider mt-4 pt-4">
                  <div className="contain">
                    <div className={styles.slideshowContainer}>
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          className={`${styles.mySlides} ${styles.fade}`}
                          style={{
                            display: slideIndex === index ? "block" : "none",
                          }}
                        >
                          {slide.image ? (
                            <Image
                              src={slide.image}
                              className={styles.propimage}
                              alt={`Slide ${index + 1}`}
                            />
                          ) : (
                            <iframe
                              width="100%"
                              height="300"
                              src={slide.video}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={`Slide ${index + 1}`}
                            />
                          )}
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
                          onClick={() => handleDotClick(index)}
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="pb-2">
                  <TabsBox tabs={tabs} />
                </div>
              </div>
            </div>
            <Ams />
            <div className="m-4 p-2 d-flex justify-content-center align-items-center">
              <a
                href="tel:+919970955354"
                className="btn btn-primary py-2 px-3 me-2"
              >
                <i className="fa fa-phone-alt me-2" />
                Make A Call
              </a>
              <button
                className="btn btn-primary py-2 px-3 me-2"
                onClick={downloadPDF}
              >
                <i className="fa fa-download-alt me-2" />
                Download Brochure
              </button>
              <a href="#" className="btn btn-dark py-2 px-3">
                <i className="fa fa-calendar-alt me-2" />
                Get Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="d-flex justify-content-center align-items-center pt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.288959010053!2d79.025224!3d21.021120999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzE2LjAiTiA3OcKwMDEnMzAuOCJF!5e0!3m2!1sen!2sin!4v1718886190684!5m2!1sen!2sin"
          width={1200}
          height={300}
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(17, 157, 212, 0.2), 0 6px 20px 0 rgba(17, 157, 212, 0.19)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Property5;
