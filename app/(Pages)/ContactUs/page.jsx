"use client";
import React, { useState } from "react";
import Image from "next/image";
import header from "../../../public/img/contact_banner.jpg";
import "../../styles/bootstrap.min.css";
import "../../styles/style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    project: "Krishna Nagari",
    object: "Residential",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Message Sent Successfully");
      } else {
        alert(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <>
      {/* Header Start */}
      <div className="container-fluid header h-50 bg-white p-0 ">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row ">
          <div className="breadbox mt-4 pt-4" style={{ textAlign: "center" }}>
            <div
              className="text-center mx-auto mb-5 wow fadeInUp text-white mt-4 pt-4 "
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <div style={{ justifyContent: "flex" }} />
              <h1 className="mt-5 pt-5 text-white prophead">Contact Us</h1>

              <hr />
            </div>
          </div>
          <div className="flex animated fadeIn " style={{}}>
            <Image
              className="pbanner img-fluid "
              src={header}
              alt=""
              priority
            />
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
                    className="d-flex align-items-start bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-map-marker-alt text-primary" />
                    </div>
                    <span
                      style={{
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        maxWidth: "calc(100% - 60px)",
                      }}
                    >
                      <strong>Privara Developers</strong> <br />
                      F-2 Saibaba apartment, 17 central excise colony,
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
                      <span
                        className="text-wrap"
                        style={{
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          maxWidth: "calc(100% - 60px)", // Adjust based on the icon width and padding
                        }}
                      >
                        privaradevelopers@gmail.com
                      </span>
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
                      <div
                        className="d-flex flex-column"
                        style={{ maxWidth: "calc(100% - 60px)" }}
                      >
                        <span
                          style={{
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                          }}
                        >
                          +919970 9553 54
                        </span>
                        <span
                          style={{
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                          }}
                        >
                          +919970 0022 01
                        </span>
                      </div>
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
                        <i className="fab fa-instagram text-primary" />
                      </div>
                      <div
                        className="d-flex flex-column"
                        style={{ maxWidth: "calc(100% - 60px)" }}
                      >
                        <a
                          href="https://www.instagram.com/privaraproperties?igsh=MTNibHdodTQ4eHprdw=="
                          style={{
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          privaraproperties
                        </a>
                      </div>
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
                        <i className="fab fa-facebook text-primary" />
                      </div>
                      <div className="d-flex flex-column ">
                        <a href="https://www.facebook.com/privaraproperties?mibextid=ZbWKwL">
                          Privara Properties
                        </a>
                      </div>
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
                        <i className="fab fa-youtube text-primary" />
                      </div>
                      <div className="d-flex flex-column">
                        <a href="https://youtube.com/@privaradevelopers?si=Y0tsfdQDNjCp9SGM">
                          Privara Developer's
                        </a>
                      </div>
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
                  boxShadow:
                    "0 4px 8px 0 rgba(17, 157, 212, 0.2), 0 6px 20px 0 rgba(17, 157, 212, 0.19)",
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
                        <label htmlFor="project">Select Project</label> <br />
                        <select
                          className="form-control"
                          name="project"
                          id="project"
                          value={formData.project}
                          onChange={handleChange}
                          required=""
                        >
                          <option value="Krishna Nagari">Krishna Nagari</option>
                          <option value="Kuhaasa Residency">
                            Kuhaasa Residency
                          </option>
                          <option value="Privara Vihar-3">
                            Privara Vihar-3
                          </option>
                          <option value="Privara Vihar-4">
                            Privara Vihar-4
                          </option>
                          <option value="Privara Vihar-5">
                            Privara Vihar-5
                          </option>
                          <option value="Privara Vihar-6">
                            Privara Vihar-6
                          </option>
                        </select>
                      </fieldset>
                    </div>
                  </div>
                  <div className="col-ld-6">
                    <div className="form-floating">
                      <fieldset>
                        <label htmlFor="object">Select Type</label> <br />
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
                        required=""
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
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
