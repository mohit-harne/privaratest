import React from 'react'
import Image from 'next/image'
import '../../styles/bootstrap.min.css'
import '../../styles/common.css'
import p1 from '../../../public/img/nk.png'
import p2 from '../../../public/img/nku.png'
import p3 from '../../../public/img/np3.png'
import p4 from '../../../public/img/np4.png'
import p5 from '../../../public/img/np5.png'
import p6 from '../../../public/img/np6.png'
import header from '../../../public/img/pbanner.png'

const Property = () => {
  return (

    <>
    {/* Header Start */}
    <div className="container-fluid header bg-white p-0" >
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row ">
        <div className="breadbox mt-4 pt-4"  style={{ textAlign: 'center'}}>
          <div>
          <h1 className="display-5 text-white animated fadeIn mt-4 pt-4">Properties </h1>
          <hr className='dash1'/>
          {/* <nav aria-label="breadcrumb animated fadeIn ">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a className='text-white' href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                      <a className='text-white' href="#">Pages</a>
                    </li>
              <li
                className="breadcrumb-item text-body active " 
                aria-current="page"
                
              >
                 <a className='text-white' href="#">Property List</a>
              </li>
            </ol>
          </nav> */}
          </div>
        </div>
        <div className="flex animated fadeIn"  >
          <Image className="pbanner img-fluid" src={header} alt=""/>
        </div>
      </div>
    </div>
    {/* Header End */}
      {/* Search Start */}
  <div
    className="container-fluid bg-primary mb-5 wow fadeIn"
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
                className="form-control border-0 py-3"
                placeholder="Search Keyword"
              />
            </div>
            <div className="col-md-4">
              <select className="form-select border-0 py-3">
                <option selected="">Plots</option>
                <option value={1}>KRISHNA NAGARI</option>
                <option value={2}>KUHAASA RESIDENCY</option>
                <option value={3}>PRIVARA VIHAR – 3</option>
                <option value={3}>PRIVARA VIHAR – 4</option>
                <option value={3}>PRIVARA VIHAR – 5</option>
                <option value={3}>PRIVARA VIHAR – 6</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select border-0 py-3">
                <option selected="">Location</option>
                <option value={1}>Jamtha</option>
                <option value={2}>Shankarpur</option>
                <option value={3}>Lonara</option>
                <option value={4}>Tarodi</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-dark border-0 w-100 py-3">Search</button>
        </div>
      </div>
    </div>
  </div>
  {/* Search End */}

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

    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-0 gx-5 align-items-end">
          <div className="col-lg-6">
            <div
              className="text-start mx-auto mb-5 wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h1 className="mb-3">Property Listing</h1>
              <p>
               Text
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
          <div id="tab-1" className="tab-pane fade show shadow-sm p-0 shadow-sm active">
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

                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      KRISHNA NAGARI
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      JAMTHA NAGPUR
                    </p>
                    <a  href="Property/KrishnaNagari">
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
                        src={p2}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                    <a  href="Property/KuhaasaResidency">
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
                        src={p3}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                        src={p4}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                    <a  href="Property/PrivaraVihar4">
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
                        src={p5}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                    <a  href="Property/PrivaraVihar5">
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
                        src={p6}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                    <a  href="Property/PrivaraVihar6">
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
          <div id="tab-2" className="tab-pane fade show p-0 shadow-sm">
            <div className="row g-4">
            <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
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

                  </div>
                  <div className="p-4 pb-0">
                    <a className="d-block h5 mb-2" href="">
                      KUHAASA RESIDENCY
                    </a>
                    <p>
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      SHANKARPUR NAGPUR
                    </p>
                    <a  href="Property/KuhaasaResidency">
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
                        src={p3}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                        src={p4}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                        src={p5}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
                        src={p6}
                        alt=""
                      />
                    </a>
                    <div className="bg-primary rounded text-white position-absolute end-0 top-0 m-4 py-1 px-3">
                      Ongoing
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
          <div id="tab-3" className="tab-pane fade show p-0 shadow-sm">
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