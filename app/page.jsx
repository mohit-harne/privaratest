import React from "react";
import Image from "next/image";
import Header from "./Components/Header";
import FeatureProject from "./Components/FeatureProject";
import p1 from "../public/img/nk.png";
import p2 from "../public/img/nku.png";
import p3 from "../public/img/np3.png";
import p4 from "../public/img/np4.png";
import p5 from "../public/img/np5.png";
import p6 from "../public/img/np6.png";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import "./styles/common.css";

export default function Home() {
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* Search Start */}
      <div className="con">
        <div
          className="container-fluid mb-5 wow fadeIn p-3 "
          data-wow-delay="0.1s"
          style={{ padding: 35 }}
        >
          <div className="container">
            <div className="row g-3">
              <div className="col-md-15">
                <center>
                  <div className="section">
                    <div className="col-md-4 p-2 ">
                      <h4>7,500 Plot Sold</h4>
                    </div>
                    <div className="dash"></div>

                    <div className="col-md-4 p-2">
                      <h4>15 Years Experience</h4>
                    </div>

                    <div className="dash"></div>

                    <div className="col-md-4 p-2">
                      <h4> 395 Projects Completed</h4>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search End */}
      {/* Property Start */}
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <div style={{ justifyContent: "flex" }} />
          <h1 className="mb-0 pb-2">Property Location</h1>
          <span className="txt">
            {" "}
            EXPLORE PROJECTS IN YOUR DESIRED LOCATIONS
          </span>
          <hr />
        </div>
        <div className="tab-contain">
          <div className=" tab-pane fade show p-0 active">
            <div className="row g-5">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="rounded overflow-hidden outstand">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <Image className="img-fluid" src={p1} alt="" />
                    </a>
                  </div>
                  <div className="p-4 pb-0 d-flex justify-content-between align-items-center">
                    {" "}
                    {/* Added flex properties */}
                    <div>
                      <a
                        className="d-block h5 mb-2"
                        href="Property/KrishnaNagari"
                      >
                        KRISHNA NAGARI
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        JAMTHA NAGPUR
                      </p>
                    </div>
                    <a href="Property/KrishnaNagari">
                      <button
                        className="btn btn-primary"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </button>
                    </a>
                  </div>

                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      22 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      321 Plots
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-flag text-primary me-2" />
                      Completed
                    </small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="rounded overflow-hidden outstand">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <Image className="img-fluid" src={p2} alt="" />
                    </a>
                  </div>
                  <div className="p-4 pb-0 d-flex justify-content-between align-items-center">
                    {" "}
                    {/* Added flex properties */}
                    <div>
                      <a
                        className="d-block h5 mb-2"
                        href="Property/KuhaasaResidency"
                      >
                        KUHAASA RESIDENCY
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        SHANKARPUR NAGPUR
                      </p>
                    </div>
                    <a href="Property/KuhaasaResidency">
                      <button
                        className="btn btn-primary py-2 px-1"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </button>
                    </a>
                  </div>

                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1.39 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      31 Plots
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-flag text-primary me-2" />
                      Ongoing
                    </small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="rounded overflow-hidden outstand">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <Image className="img-fluid" src={p3} alt="" />
                    </a>
                  </div>

                  <div className="p-4 pb-0">
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      {/* Flex container for title and button */}
                      <div>
                        <a
                          className="d-block h5 mb-2 position-relative"
                          href="Property/PrivaraVihar3"
                        >
                          PRIVARA VIHAR – 3
                        </a>
                        <p>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          JAMTHA NAGPUR
                        </p>
                      </div>
                      <a href="Property/PrivaraVihar3">
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1.49 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      24 Plots
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-flag text-primary me-2" />
                      Ongoing
                    </small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="rounded overflow-hidden outstand">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <Image className="img-fluid" src={p4} alt="" />
                    </a>
                  </div>
                  <div className="p-4 pb-0">
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      {/* Flex container for title and button */}
                      <div>
                        <a
                          className="d-block h5 mb-2 position-relative"
                          href="Property/PrivaraVihar4"
                        >
                          PRIVARA VIHAR – 4
                        </a>
                        <p>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          JAMTHA NAGPUR
                        </p>
                      </div>
                      <a href="Property/PrivaraVihar4">
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      2.75 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      44 Plots
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-flag text-primary me-2" />
                      Ongoing
                    </small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="rounded overflow-hidden outstand">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <Image className="img-fluid" src={p5} alt="" />
                    </a>
                  </div>
                  <div className="p-4 pb-0">
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      {/* Flex container for title and button */}
                      <div>
                        <a
                          className="d-block h5 mb-2 position-relative"
                          href="Property/PrivaraVihar5"
                        >
                          PRIVARA VIHAR – 5
                        </a>
                        <p>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          TARODI NAGPUR
                        </p>
                      </div>
                      <a href="Property/PrivaraVihar5">
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1.36 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      36 Plots
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-flag text-primary me-2" />
                      Ongoing
                    </small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="rounded overflow-hidden outstand">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <Image className="img-fluid" src={p6} alt="" />
                    </a>
                  </div>
                  <div className="p-4 pb-0">
                    <div className="d-flex justify-content-between align-items-center">
                      {" "}
                      {/* Flex container for title and button */}
                      <div>
                        <a
                          className="d-block h5 mb-2 position-relative"
                          href="Property/PrivaraVihar6"
                        >
                          PRIVARA VIHAR – 6
                        </a>
                        <p>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          LONARA NAGPUR
                        </p>
                      </div>
                      <a href="Property/PrivaraVihar6">
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1.64 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      49 Plots
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-flag text-primary me-2" />
                      Ongoing
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Property End */}
      {/* Category Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <div style={{ justifyContent: "flex" }} />
            <h1 className="mb-0 pb-2">Feature Location</h1>
            <span className="txt">
              {" "}
              LATEST PROJECTS IN YOUR DESIRED LOCATIONS
            </span>
            <hr />
          </div>
          <div className="row g-4 fw-bold">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp "
              data-wow-delay="0.1s"
            >
              <a
                className="cat-item d-block bg-light text-center  rounded p-3"
                href=""
              >
                <div className="jamtha  p-4">
                  <h6 className="fs-4">Jamtha</h6>
                  <span className="fs-5">389 Plots</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className=" p-4">
                  <h6 className="fs-4">Wathoda</h6>
                  <span className="fs-5">36 Properties</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className=" p-4">
                  <h6 className="fs-4">Lonara</h6>
                  <span className="fs-5">49 Plots</span>
                </div>
              </a>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className=" p-4">
                  <h6 className="fs-4">ISASANI</h6>
                  <span className="fs-5">123 Properties</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Category End */}
      {/* FeatureProject Start */}

      <FeatureProject />
      {/* FeatureProject End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p></p>
          </div>
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner1">
              <div className="carousel-item active">
                <div className="row d-flex  ">
                  {/* First testimonial */}
                  <div className="col-md-6 d-flex align-items-stretch ">
                    <div className="testimonial-item bg-light rounded p-3 w-100">
                      <div className="bg-white border rounded p-4 h-100">
                        <p>
                          We couldn't find a better place to buy land and
                          settle. Thanks to Privara and its unmatched customer
                          service, we found the perfect land for our new home.
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid flex-shrink-0 rounded"
                            src="/img/testimonial-1.png"
                            style={{ width: 45, height: 45 }}
                            alt="Pooja"
                          />
                          <div className="ps-3">
                            <h6 className="fw-bold mb-1">Pooja</h6>
                            <small>Profession</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second testimonial */}
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="testimonial-item bg-light rounded p-3 w-100">
                      <div className="bg-white border rounded p-4 h-100">
                        <p>
                          What we got was beyond expected! We are happy to make
                          our investment with Privara and are pleased with the
                          services.
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid flex-shrink-0 rounded"
                            src="/img/testimonial-2.png"
                            style={{ width: 45, height: 45 }}
                            alt="Rani"
                          />
                          <div className="ps-3">
                            <h6 className="fw-bold mb-1">Rani</h6>
                            <small>Profession</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div className="row d-flex">
                  {/* Third testimonial */}
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="testimonial-item bg-light rounded p-3 w-100">
                      <div className="bg-white border rounded p-4 h-100">
                        <p>
                          The services and consultancy provided by Privara are
                          truly the most reliable, and we are satisfied with the
                          land we got.
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid flex-shrink-0 rounded"
                            src="/img/testimonial-3.png"
                            style={{ width: 45, height: 45 }}
                            alt="Raju"
                          />
                          <div className="ps-3">
                            <h6 className="fw-bold mb-1">Raju</h6>
                            <small>Profession</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fourth testimonial or duplicate to fill space */}
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="testimonial-item bg-light rounded p-3 w-100">
                      <div className="bg-white border rounded p-4 h-100">
                        <p>
                          The entire process was smooth, and the support we got
                          from Privara was excellent. Highly recommend their
                          services!
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid flex-shrink-0 rounded"
                            src="/img/testimonial-4.png"
                            style={{ width: 45, height: 45 }}
                            alt="Sneha"
                          />
                          <div className="ps-3">
                            <h6 className="fw-bold mb-1">Sneha</h6>
                            <small>Profession</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="client-buttons">
              {/* Previous Button */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>

              {/* Next Button */}
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}
