"use client";
import React from "react";
import Image from "next/image";
import ab from "../../public/img/RERA/home page.png";
import h2 from "../../public/img/RERA/hb2.png";
import "../styles/common.css";

const Header = () => {
  return (
    <>
      {/* Header Start */}
      <div className="container-full header bg-white position-relative">
        <div className="row g-0 align-items-center flex-md-row">
          <div className="Headerslider bg-white">
            {/* Bootstrap carousel */}
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                {" "}
                {/* Set a fixed height here */}
                {/* Video slide */}
                <div
                  className="carousel-item active"
                  style={{ height: "100%" }}
                >
                  <video
                    className="d-block w-100"
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                    style={{ height: "100%", objectFit: "cover" }} // Ensure video covers full height
                  >
                    <source src="./videos/H.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Image slides */}
                <div className="carousel-item" style={{ height: "100%" }}>
                  <Image
                    className="d-block w-100"
                    src={ab}
                    alt="Carousel Slide 1"
                    loading="lazy"
                    style={{ height: "100%", objectFit: "cover" }} // Ensure image covers full height
                  />
                </div>
                <div className="carousel-item" style={{ height: "100%" }}>
                  <Image
                    className="d-block w-100"
                    src={h2}
                    alt="Carousel Slide 2"
                    loading="lazy"
                    style={{ height: "100%", objectFit: "cover" }} // Ensure image covers full height
                  />
                </div>
              </div>

              {/* Text content over the carousel */}
              <div className="sample-text">
                <h1 className="animated fadeIn prophead2">
                  Find A <span className="text-primary">Perfect Plot</span> To{" "}
                  <br />
                  Build Your Home
                </h1>
                <p className="fw-semibold text-dark prophead2">
                  If you don’t own a home, buy one. If you own a home, buy
                  another one. If you <br />
                  own two homes, buy a third. And lend your relatives the money
                  to buy a home.
                  <br />
                  <br />- John Paulson
                </p>
                <div className="home-buttons ">
                  <a
                    href="/Property"
                    className=" btn btn-primary py-3 px-5 fadeIn"
                  >
                    Get Started
                  </a>
                  <a
                    href="tel:+91 99709 55354"
                    className="btn btn-primary px-4 py-3 fadeIn"
                  >
                    Schedule Meeting
                  </a>
                </div>
                {/* Custom carousel controls */}
                <div
                  className="carousel-controls bottom-5 end-5 p-3"
                  style={{ zIndex: 1000 }}
                >
                  <button
                    className="carousel-control-prev "
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.5)", // Background color for visibility
                    }}
                  >
                    <span
                      className="carousel-control-prev-icon custom-prev-icon"
                      aria-hidden=""
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.5)", // Background color for visibility
                    }}
                  >
                    <span
                      className="carousel-control-next-icon custom-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </>
  );
};

export default Header;
