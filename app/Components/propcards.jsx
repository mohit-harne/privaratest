import React from 'react'
import Image from 'next/image'
import '../styles/bootstrap.min.css'
import '../styles/common.css'
import p1 from '../../public/img/carousel-7.jpg'
import p2 from '../../public/img/KUHASA VIEW 1.jpg'
import p3 from '../../public/img/p3.jpg'
import p4 from '../../public/img/carousel-4.jpg'
import p5 from '../../public/img/PV 5 VIEW_Photo - 1.jpg'
import p6 from '../../public/img/PRIVARA VIHAR 6 ENTRY GATE.jpg'

const propcards = () => {
  return (
    <>

    <div className="container-fluid py-5">
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
      </div>
    </div>
  </div>
  </>
  )
}

export default propcards