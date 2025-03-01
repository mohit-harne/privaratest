import React from "react";
import Image from "next/image";
import "../../styles/bootstrap.min.css";
import "../../styles/common.css";
import "../../styles/style.css";
import p1 from "../../../public/img/nk.png";
import p2 from "../../../public/img/nku.png";
import p3 from "../../../public/img/nnp3.png";
import p4 from "../../../public/img/np4.png";
import p5 from "../../../public/img/np5.png";
import p6 from "../../../public/img/np6.png";
import header from "../../../public/img/property_top_bg.png";

const Property = () => {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid header h-50 bg-white p-0 ">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row ">
          <div className="breadbox mt-4 pt-4" style={{ textAlign: "center" }}>
            <div
              className="text-center mx-auto mb-5 wow fadeInUp text-white mt-4 pt-4 "
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <div style={{ justifyContent: "flex" }} />
              <h1 className="mt-5 pt-5 text-white prophead">
                Property Location
              </h1>
              <span className="txt text-white  prophead ">
                {" "}
                EXPLORE PROJECTS IN YOUR DESIRED LOCATIONS
              </span>
              <hr />
            </div>
          </div>
          <div className="flex animated fadeIn " style={{}}>
            <Image
              className="pbanner img-fluid "
              src={header}
              alt=""
              priority
            />
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Search Start */}
      <div
        className="container-fluid bg-primary wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: 35 }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0 py-2"
                    placeholder="Search Keyword"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-2">
                    <option value="">Plots</option>
                    <option value={1}>KRISHNA NAGARI</option>
                    <option value={2}>KUHAASA RESIDENCY</option>
                    <option value={3}>PRIVARA VIHAR – 3</option>
                    <option value={3}>PRIVARA VIHAR – 4</option>
                    <option value={3}>PRIVARA VIHAR – 5</option>
                    <option value={3}>PRIVARA VIHAR – 6</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-2">
                    <option value="">Location</option>
                    <option value={1}>Jamtha</option>
                    <option value={2}>Shankarpur</option>
                    <option value={3}>Lonara</option>
                    <option value={4}>Tarodi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100 py-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Search End */}

      {/* Category Start */}
      <div className="container-xxl py-5">
        <div className="container">
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

      <div className="container-fluid py-3">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Property Listing</h1>
                <p></p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Featured
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    Ongoing
                  </a>
                </li>
                <li className="nav-item me-0">
                  <a
                    className="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    Completed
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
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
                        Completed
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
            <div id="tab-2" className="tab-pane fade show p-0 ">
              <div className="row g-5">
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
            <div id="tab-3" className="tab-pane fade show p-0 ">
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
                        Completed
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Property List End */}
    </div>
  );
};

export default Property;
