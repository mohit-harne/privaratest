import React from 'react'
import Image from 'next/image'
import '../../styles/bootstrap.min.css'
import '../../styles/common.css'
import p1 from '../../../public/img/property-1.jpg'
import p2 from '../../../public/img/property-2.jpg'
import p3 from '../../../public/img/property-3.jpg'
import p4 from '../../../public/img/property-4.jpg'
import p5 from '../../../public/img/property-5.jpg'
import p6 from '../../../public/img/property-6.jpg'
import header from '../../../public/img/header.jpg'

const Property = () => {
  return (

    <>
    {/* Header Start */}
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">Properties </h1>
          <nav aria-label="breadcrumb animated fadeIn">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                      <a href="#">Pages</a>
                    </li>
              <li
                className="breadcrumb-item text-body active"
                aria-current="page"
              >
                Property List
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-6 animated fadeIn">
          <Image className="img-fluid" src={header} alt="" />
        </div>
      </div>
    </div>
    {/* Header End */}
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
        <span className="txt"> EXPLORE PROJECTS IN YOUR DESIRED LOCATIONS</span>
        <hr />
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <a
            className="cat-item d-block bg-light text-center rounded p-3"
            href=""
          >
            <div className="jamtha p-4">
              <h6>Jamtha</h6>
              <span>123 Properties</span>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
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
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <a
            className="cat-item d-block bg-light text-center rounded p-3"
            href=""
          >
            <div className=" p-4">
              <h6>Lonara</h6>
              <span>123 Properties</span>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
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

    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">Property Listing</h1>
              <p>
                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
              </p>
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
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <Image
                        className="img-fluid"
                        src={p1}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Completed
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Appartment
                    </div>
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
                      <i className="fa fa-ruler-combined text-primary me-2" /> 22
                      Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      321 Plots{" "}
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
                      <Image
                        className="img-fluid"
                        src={p6}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Villa
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      KUHAASA RESIDENCY
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      SHANKARPUR NAGPUR
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
                      <Image
                        className="img-fluid"
                        src={p5}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Office
                    </div>
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
                      2.5 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      24 Plots
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
                      <Image
                        className="img-fluid"
                        src={p2}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Building
                    </div>
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
                      3.9 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      44 Plots
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
                      <Image
                        className="img-fluid"
                        src={p3}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Home
                    </div>
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
                      2.25 Acres
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      36 Plots
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
                      <Image
                        className="img-fluid"
                        src={p4}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Shop
                    </div>
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
                      2.6 ACRES
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-home text-primary me-2" />
                      49 Plots
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-1.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Sell
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Appartment
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Rent
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Villa
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-3.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Sell
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Office
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-4.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Rent
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Building
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-5.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Sell
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Home
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-6.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Rent
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Shop
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center">
                <a className="btn btn-primary py-3 px-5" href="">
                  Browse More Property
                </a>
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-1.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Sell
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Appartment
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Rent
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Villa
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-3.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Sell
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Office
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-4.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Rent
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Building
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-5.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Sell
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Home
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <a href="">
                      <img
                        className="img-fluid"
                        src="img/property-6.jpg"
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                      For Rent
                    </div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                      Shop
                    </div>
                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      Golden Urban House For Sell
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      123 Street, New York, USA
                    </p>
                  </div>
                  <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-ruler-combined text-primary me-2" />
                      1000 Sqft
                    </small>
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-bed text-primary me-2" />3 Bed
                    </small>
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-bath text-primary me-2" />2 Bath
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
  </>
  
  )
}

export default Property