import React from 'react'
import Image from 'next/image';
import Header from '../../../public/img/header.jpg'
import C9 from '../../../public/img/carousel-9.jpg'
import '../../styles/bootstrap.min.css';
import '../../styles/style.css';
import '../../styles/common.css';

const ContactUs = () => {
  return (
    <>
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
              <div className="col-md-6 p-5 mt-lg-5">
                <h1 className="display-5 animated fadeIn mb-4">Contact Us </h1>
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
                     Contact Us
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
    <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="mb-3">
          Contact Us
          <hr />
        </h1>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-12">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="bg-light rounded p-3">
              <div
                className="d-flex align-items-center bg-white rounded p-3"
                style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
              >
                <div className="icon me-3" style={{ width: 45, height: 45 }}>
                  <i className="fa fa-map-marker-alt text-primary" />
                </div>
                <span>
                  {" "}
                  <strong>Privara Developers</strong>
                  F-2 Saibaba apartment , 17 central excise colony chhatrapati
                  square, Wardha Rd, Nagpur, Maharashtra 440015
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div style={{ padding: 25 }}>
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-envelope-open text-primary" />
                  </div>
                  <span>privaradevelopers@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div style={{ padding: 25 }}>
              <div className="bg-light rounded p-3">
                <div
                  className="d-flex align-items-center bg-white rounded p-3"
                  style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                  <div className="icon me-3" style={{ width: 45, height: 45 }}>
                    <i className="fa fa-phone-alt text-primary" />
                  </div>
                  <span>+919970 9553 54</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-10">
        <h5 className="text-white mb-4">Map</h5>
        <div className="row g-2 pt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7444.0670280239865!2d79.06931!3d21.111230000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf5640653599%3A0x4dd5759b03792a99!2sPrivara%20Developers!5e0!3m2!1sen!2sin!4v1716977919160!5m2!1sen!2sin"
            width={300}
            height={500}
            style={{ border: 0, paddingTop: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="wow fadeInUp" data-wow-delay="0.5s">
          <form>
            <div style={{ padding: 20 }}>
              <p></p>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="number"
                    required=""
                  />
                  <label htmlFor="neumber">Moblie No.</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                    required=""
                  />
                  <label htmlFor="city">Your City</label>
                </div>
              </div>
              <div className="col-ld-6">
                <div className="form-floating">
                  <fieldset>
                    <label htmlFor="object">Type</label> <br />
                    <select
                      className="form-control"
                      name="object"
                      id="object"
                      required=""
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </fieldset>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 150 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <p className="mb-2" style={{ color: "red" }}>
                {" "}
                *Fill the below query form and our agent will contact you soon.
              </p>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </>

  )
}

export default ContactUs