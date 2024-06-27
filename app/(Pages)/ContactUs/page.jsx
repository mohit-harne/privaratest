"use client";
import React, { useState } from "react";
import Image from "next/image";
import header from "../../../public/img/pbanner.png";
import '../../../server/server.js';
import "../../styles/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/common.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    object: "Residential",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully");
    } else {
      alert("Error sending message");
    }
  };

  return (
    <>
      {/* Header Start */}
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="breadbox mt-4 pt-4" style={{ textAlign: "center" }}>
            <div
              className="text-center mx-auto m-3 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="pb-3 text-white">
                Contact Us
                <hr />
              </h1>
            </div>
          </div>
          <div className="flex animated fadeIn">
            <div className="gradient"></div>
            <Image className="pbanner img-fluid" src={header} alt="" />
          </div>
        </div>
      </div>
      {/* Header End */}
      <div className="container-xxl py-5">
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-map-marker-alt text-primary" />
                    </div>
                    <span>
                      {" "}
                      <strong>Privara Developers</strong> <br />
                      F-2 Saibaba apartment , 17 central excise colony
                      chhatrapati square, Wardha Rd, Nagpur, Maharashtra 440015
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div style={{ padding: 25 }}>
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="fa fa-envelope-open text-primary" />
                      </div>
                      <span>privaradevelopers@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div style={{ padding: 25 }}>
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: 45, height: 45 }}
                      >
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
                style={{
                  border: 0,
                  paddingTop: 0,
                  boxShadow:"0 4px 8px 0 rgba(17, 157, 212, 0.2), 0 6px 20px 0 rgba(17, 157, 212, 0.19)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={handleSubmit}>
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.number}
                        onChange={handleChange}
                        required=""
                      />
                      <label htmlFor="number">Moblie No.</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
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
                          value={formData.object}
                          onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <p className="mb-2" style={{ color: "red" }}>
                    {" "}
                    *Fill the below query form and our agent will contact you
                    soon.
                  </p>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
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
  );
};

export default ContactUs;
