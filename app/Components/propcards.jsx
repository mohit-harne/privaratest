import React from 'react'
import Image from 'next/image'
import '../styles/bootstrap.min.css'
import '../styles/common.css'
import p1 from '../../public/img/nk.png'
import p2 from '../../public/img/nku.png'
import p3 from '../../public/img/np3.png'
import p4 from '../../public/img/np4.png'
import p5 from '../../public/img/np5.png'
import p6 from '../../public/img/np6.png'

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
        <span className="txt"> EXPLORE PROJECTS IN YOUR DESIRED LOCATIONS</span>
        <hr />
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show shadow-sm p-0 shadow-sm active ">
          <div className="row g-4">
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
                <div className="p-4 pb-0 text-center">
                  <a className="d-block h5 mb-2" href="">
                    PRIVARA VIHAR – 6
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    LONARA NAGPUR
                  </p>
                 
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
                <div className="p-4 pb-0 text-center">
                  <a className="d-block h5 mb-2" href="">
                    PRIVARA VIHAR – 5
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    TARODI NAGPUR
                  </p>
                  
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
                <div className="p-4 pb-0 text-center">
                  <a className="d-block h5 mb-2" href="">
                    PRIVARA VIHAR – 4
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    JAMTHA NAGPUR
                  </p>
                 
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
  </>
  )
}

export default propcards