import React from "react";
import Image from "next/image";
import Header from "../../../../../public/img/header.jpg";
import p1 from "../../../../../public/img/carousel-7.jpg";
import p2 from "../../../../../public/img/carousel-8.jpg";
import am1 from "../../../../../public/img/amenities1.png";
import am2 from "../../../../../public/img/amenities2.png";
import am3 from "../../../../../public/img/amenities3.png";
import am4 from "../../../../../public/img/amenities4.png";
import am5 from "../../../../../public/img/amenities5.png";
import am6 from "../../../../../public/img/amenities6.png";
import am7 from "../../../../../public/img/amenities7.png";
import am8 from "../../../../../public/img/amenities8.png";
import am9 from "../../../../../public/img/amenities9.png";
import Slideshow from "../../../../Components/Slideshow";
import Rera from "../../../../../public/img/RERA/RERA CODE PV 4 .jpeg.jpg";
import "../../../../styles/bootstrap.min.css";
import "../../../../styles/style.css";
import "../../../../styles/common.css";

function property1() {
  const slides = [
    {
      image: p1,
      caption: "Caption Text",
    },
    {
      image: p2,
      caption: "Caption Text",
    },
  ];

  return (
    <div className="container-xxl bg-white">
      {/* Header Start */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">
              Known Your Founder
            </h1>
            <nav aria-label="breadcrumb animated fadeIn">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Property</a>
                </li>
                <li
                  className="breadcrumb-item text-body active"
                  aria-current="page"
                >
             Privara Vihar-4
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 animated fadeIn">
            <Image className="img-fluid" src={Header} alt="" />
          </div>
        </div>
      </div>
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

      {/* About Start */}
      <div className="container-xxl py-3">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn py-2" data-wow-delay="0.1s">
              <div className="">
                <div className="propslider">
                  <Slideshow slides={slides} />
                </div>

                <div className="some-page-wrapper pt-4">
                  <div className="section-flexer py-2">
                    <div className="colum mx-4">
                      <div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am1} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Entrance</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am9} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Playground</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am3} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Drainage Line</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column mx-4">
                      <div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am6} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Sewerline</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am7} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Fencing</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am8} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Electrification</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column mx-4">
                      <div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am4} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Water Source</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am5} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Cement Road</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div>
                            <Image src={am2} height={28} width={28} />
                          </div>
                          <div className="mx-2 my-0">
                            <p>Tree Plantation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="como">
                <div className="Child1">
                  <h1 className="text-dark p-2">Privara Vihar-4</h1>

                  <a className="tex-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      width="25px"
                      height="25px"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <strong m-2>JAMTHA NAGPUR</strong>
                  </a>
                  <div className="d-flex flex text-dark column mt-3">
                    <div className="">
                      <p>
                        <b>Plot Area:</b> 3.9 ACRES
                      </p>
                    </div>
                    <div className="px-2">
                      <p>
                        <b>Number Of Plots: </b> 44{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Child2">
                  <div className="QRtab">
                    <a href="#">
                      <Image className="QRimage" src={Rera} alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-dark mb-2">
              Welcome to Privara Vihar 4, an exclusive residential layout nestled in the heart of Jamtha, right next to the prestigious VCA Stadium and adjacent to the flourishing Sandesh City. This meticulously planned and thoughtfully designed residential community offers an unparalleled living experience, convenience, and modernity. One of the standout features of Privara Vihar 4 is its direct access to a spacious 200 ft road and a grand 200 ft road leads you to a perfect harmony for you and your family. Whole Layout is Surrounded with 60 feet & 80 Feet road.{" "}
              </p>

              <div className=" pt-2">
                <p className="card-title text-dark top_heading pt-2">
                  <b>Near By</b>
                </p>
                <ul className="list-inline ">
                  <li className="list-inline-item">{`1. VCA – 1 Km`}</li>
                  <li className="list-inline-item px-3">{`3. AIIMS – 1.5 km`}</li>
                  <li className="list-inline-item px-3">{`4. INFOSYS – 3 KM`}</li>
                </ul>
                <ul className="list-inline">
                  <li className="list-inline-item">{`2. Samrudhi expressway- 2.5km`}</li>
                  <li className="list-inline-item px-3">{`5. HCL – 3 km`}</li>
                </ul>
              </div>
              <div className=" p-2">
                <a href="" className="btn btn-primary py-2 px-3 me-2">
                  <i className="fa fa-phone-alt me-2" />
                  Make A Call
                </a>
                <a href="" className="btn btn-dark py-2 px-3">
                  <i className="fa fa-calendar-alt me-2" />
                  Get Appoinment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}

export default property1;
