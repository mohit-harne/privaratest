import React from "react";
import Image from "next/image";
import "../styles/bootstrap.min.css";
import "../styles/common.css";
import p1 from "../../public/img/nk.png";
import p2 from "../../public/img/nku.png";
import p3 from "../../public/img/np3.png";
import p4 from "../../public/img/np4.png";
import p5 from "../../public/img/np5.png";
import p6 from "../../public/img/np6.png";

const propcards = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container p-4">
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
          <div className="tab-content">
            <div
              id="tab-1"
              className="tab-pane fade show shadow-sm p-0 shadow-sm active"
            >
              <div className="row g-4">
                <div
                  className=" col-lg-4 col-md-6  wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p1} alt="" />
                      </a>

                     
                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        KRISHNA NAGARI
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        JAMTHA NAGPUR
                      </p>
                      <a href="Property/KrishnaNagari">
                        <button
                          className=" btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p2} alt="" />
                      </a>
                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        KUHAASA RESIDENCY
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        SHANKARPUR NAGPUR
                      </p>
                      <a href="Property/KuhaasaResidency">
                        <button
                          className=" btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p3} alt="" />
                      </a>
                    </div>

                    <div className="p-4 pb-0 ">
                      <div className="d-flex flex-row ">
                        <div>
                          <a
                            className="d-block h5 mb-2 position-relative"
                            href=""
                          >
                            PRIVARA VIHAR – 3
                          </a>
                        </div>
           
                      </div>

                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        JAMTHA NAGPUR
                      </p>

                      <a
                        className=" btn btn-primary"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p4} alt="" />
                      </a>
                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        PRIVARA VIHAR – 4
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        JAMTHA NAGPUR
                      </p>
                      <a href="Property/PrivaraVihar4">
                        <button
                          className=" btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p5} alt="" />
                      </a>

                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        PRIVARA VIHAR – 5
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        TARODI NAGPUR
                      </p>
                      <a href="Property/PrivaraVihar5">
                        <button
                          className=" btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p6} alt="" />
                      </a>

                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        PRIVARA VIHAR – 6
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        LONARA NAGPUR
                      </p>
                      <a href="Property/PrivaraVihar6">
                        <button
                          className=" btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0 shadow-sm">
              <div className="row g-4">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p2} alt="" />
                      </a>

                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        KUHAASA RESIDENCY
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        SHANKARPUR NAGPUR
                      </p>
                      <a href="Property/KuhaasaResidency">
                        <button
                          className=" btn btn-primary"
                          data-bs-toggle="pill"
                          href="#tab-3"
                        >
                          <i className="fa fa-eye me-2" />
                          Know More
                        </button>
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p3} alt="" />
                      </a>
 
                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        PRIVARA VIHAR – 3
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        JAMTHA NAGPUR
                      </p>
                      <a
                        className=" btn btn-primary"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p4} alt="" />
                      </a>

                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        PRIVARA VIHAR – 4
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        JAMTHA NAGPUR
                      </p>
                      <a
                        className=" btn btn-primary"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  data-wow-delay="0.3s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p5} alt="" />
                      </a>

                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        PRIVARA VIHAR – 5
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        TARODI NAGPUR
                      </p>
                      <a
                        className=" btn btn-primary"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p6} alt="" />
                      </a>

                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        PRIVARA VIHAR – 6
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        LONARA NAGPUR
                      </p>
                      <a
                        className=" btn btn-primary"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0 shadow-sm">
              <div className="row g-4">
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <Image className="img-fluid" src={p1} alt="" />
                      </a>

                    </div>
                    <div className="p-4 pb-0">
                      <a className="d-block h5 mb-2" href="">
                        KRISHNA NAGARI
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        JAMTHA NAGPUR
                      </p>
                      <a
                        className=" btn btn-primary"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-eye me-2" />
                        Know More
                      </a>
                      <a
                        className=" btn btn-primary m-3"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <i className="fa fa-phone fa-rotate-90 me-2 " />
                        Call us
                      </a>
                      <p />
                    </div>
                    <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2" />
                        2 Acres
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default propcards;
