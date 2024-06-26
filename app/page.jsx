
import React from "react";
import Image from "next/image";
import Header from "./Components/Header";
import p1 from "../public/img/nk.png";
import p2 from "../public/img/nku.png";
import p3 from "../public/img/np3.png";
import p4 from "../public/img/np4.png";
import p5 from "../public/img/np5.png";
import p6 from "../public/img/np6.png";
import './styles/bootstrap.min.css';
import './styles/style.css'
import './styles/common.css';


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
            <div className="row g-4">
              <div
                className=" col-lg-4 col-md-6  wow fadeInUp"
                data-wow-delay="0.1s"
              >
              <div className="property-item rounded overflow-hidden" style={{boxShadow: "0px 0px 10px 4px #A8A8A8" , backgroundColor:"#F5F5F5"}}>
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
                      <i className="fa fa-ruler-combined text-primary me-2" />2
                      Acres
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
             <div className="property-item rounded overflow-hidden" style={{boxShadow: "0px 0px 10px 4px #A8A8A8" , backgroundColor:"#F5F5F5"}}>
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
                      <i className="fa fa-ruler-combined text-primary me-2" />2
                      Acres
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
           <div className="property-item rounded overflow-hidden" style={{boxShadow: "0px 0px 10px 4px #A8A8A8" , backgroundColor:"#F5F5F5"}}>
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
                      <i className="fa fa-ruler-combined text-primary me-2" />2
                      Acres
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
       <div className="property-item rounded overflow-hidden" style={{boxShadow: "0px 0px 10px 4px #A8A8A8" , backgroundColor:"#F5F5F5"}}>
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
                      <i className="fa fa-ruler-combined text-primary me-2" />2
                      Acres
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
             <div className="property-item rounded overflow-hidden" style={{boxShadow: "6px 6px 9px 4px lightgrey" , backgroundColor:"#F5F5F5"}}>
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
                      <i className="fa fa-ruler-combined text-primary me-2" />2
                      Acres
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
              <div className="property-item rounded overflow-hidden" style={{boxShadow: "0px 0px 10px 4px #A8A8A8" , backgroundColor:"#F5F5F5"}}>
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
                      <i className="fa fa-ruler-combined text-primary me-2" />2
                      Acres
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
            <h1 className="mb-0 pb-2">Property Location</h1>
            <span className="txt">
              {" "}
              EXPLORE PROJECTS IN YOUR DESIRED LOCATIONS
            </span>
            <hr />
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="cat-item d-block bg-light text-center rounded p-3"
                href=""
              >
                <div className="jamtha p-4">
                  <h6>Jamtha</h6>
                  <span>389 Plots</span>
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
                  <h6>Wathoda</h6>
                  <span>123 Properties</span>
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
                  <h6>Lonara</h6>
                  <span>49 Plots</span>
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
                  <h6>ISASANI</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Category End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="  about-img indexing position-relative overflow-hidden p-5 pe-0">
                <div className="">
                  {/* <video width="720" height="380" autoplay muted>
                          <source src="videos/privara_video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                        </video> */}
                  <img
                    src="./img/carousel-5.jpg"
                    alt=""
                    width={720}
                    height={380}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
              <p className="mb-4">
                Welcome to Privara Vihar-6, an exquisite residential Layout
                nestled in the heart of Lonara, Nagpur. Privara Vihar-6 offers a
                harmonious blend of modern luxury for thoughtfully planned
                community.{" "}
              </p>
              <div className="some-page-wrapper">
                <div className="section-flexer">
                  <div className="colum mx-4">
                    <div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities1.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Entrance</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities2.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Tree Plantation</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities3.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Drainage Line</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities4.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Water Source</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities5.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Cement Road</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column mx-4">
                    <div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities6.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Sewerline</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities7.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Fencing</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities8.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Electrification</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="">
                          <img
                            src="./img/amenities9.png"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <div className="mx-2 my-0">
                          <p>Playground</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>Text</p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                  We could't find a better place to buy land and settle.Thanks
                  to Privara and its unmatchced customer service,we found the
                  perfect land for out new homw.All the amenities and facilities
                  made lives easier.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="img/testimonial-1.jpg"
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Pooja</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                  What we got was then expected! We are happy to make our
                  investment with Privara and we pleased with the services. The
                  staff and experts from Privara helped us with every step and
                  made everything clear and made the process easy.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="img/testimonial-2.jpg"
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Rani</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>
                  The services and consultancy provided by Privara are truly the
                  most reliable and we are satisfied with the land we got.We
                  actually got more than what we wanted. Truly a worthy
                  investment.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded"
                    src="img/testimonial-3.jpg"
                    style={{ width: 45, height: 45 }}
                  />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Raju</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}
