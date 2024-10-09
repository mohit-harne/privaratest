import React from "react";

export const Category = () => {
  return (
    <>
      {/* Category Start */}
      <div className="container-xxl py-5">
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
    </>
  );
};
