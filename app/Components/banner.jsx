import React from "react";
import Image from "next/image";
import b2 from "../../public/img/carousel-3.jpg";
import b3 from "../../public/img/carousel-4.jpg";
import b4 from "../../public/img/carousel-5.jpg";
import b5 from "../../public/img/carousel-6.jpg";
import b6 from "../../public/img/carousel-7.jpg";
import b7 from "../../public/img/carousel-8.jpg";
import b8 from "../../public/img/carousel-9.jpg";

const banner = () => {
  return (
    <div className="pad container-fluid header bg-white ">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Find A <span className="text-primary">Perfect Home</span> To Live
            With Your Family
          </h1>
          <br className="animated fadeIn mb-4 pb-2" />
          {`If you don’t own a home, buy one. If you own a home, buy another one. If
      you own two homes buy a third. And lend your relatives the money to buy
      a home.`}
          <p />
          <p> - John Paulson</p>
          <p>
            <br />
          </p>
          <div className="d-flex flex-row">
            <a href="" className="btn btn-primary py-3 px-5 me-3 p-2 fadeIn">
              Get Started
            </a>
            <a
              href=""
              className="btn btn-primary py-3 px-5 me-3 p-2 animated fadeIn"
            >
              Schedule Visit
            </a>
          </div>
        </div>
        <div className="col-md-6 animated fadeIn">
          <div className="owl-carousel header-carousel">
            <div className="owl-carousel-item">
              <img
                className="img-fluid"
                src={b2}
                width={720}
                height={380}
                alt=""
              />
            </div>
            <div className="owl-carousel-item">
              <Image
                className="img-fluid"
                src={b3}
                width={720}
                height={380}
                alt=""
              />
            </div>
            <div className="owl-carousel-item">
              <img
                className="img-fluid"
                src={b4}
                width={720}
                height={380}
                alt=""
              />
            </div>
            <div className="owl-carousel-item">
              <img
                className="img-fluid"
                src={b5}
                width={720}
                height={380}
                alt=""
              />
            </div>
            <div className="owl-carousel-item">
              <img
                className="img-fluid"
                src={b6}
                width={720}
                height={380}
                alt=""
              />
            </div>
            <div className="owl-carousel-item">
              <img
                className="img-fluid"
                src={b7}
                width={720}
                height={380}
                alt=""
              />
            </div>
            <div className="owl-carousel-item">
              <img
                className="img-fluid"
                src={b8}
                width={720}
                height={380}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
