import React from "react";

const featureProject = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="">
          <div className="bg-light rounded p-3">
            <div
              className="bg-white rounded p-4"
              style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
            >
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
                    <h1 className="mb-4">
                      #1 Place To Find The Perfect Property
                    </h1>
                    <p className="mb-4">
                      Welcome to Privara Vihar-6, an exquisite residential
                      Layout nestled in the heart of Lonara, Nagpur. Privara
                      Vihar-6 offers a harmonious blend of modern luxury for
                      thoughtfully planned community.{" "}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default featureProject;
