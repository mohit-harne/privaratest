import React from 'react'
import '../styles/common.css'

const Footer = () => {
  return (
    <div
    className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
    >
        <div className="container py-0">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Privara Developers F-2 Saibaba Apartment , 17 Central Excise Colony
                Chhatrapati Square, Wardha Rd, Nagpur, Maharashtra 440015
            </p>
            <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +91-9970 9553 54
            </p>
            <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                privaradevelopers@gmail.com
            </p>
            <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in" />
                </a>
            </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="btn btn-link text-white-50" href="">
                About Us
            </a>
            <a className="btn btn-link text-white-50" href="">
                Contact Us
            </a>
            <a className="btn btn-link text-white-50" href="">
                Our Services
            </a>
            <a className="btn btn-link text-white-50" href="">
                Privacy Policy
            </a>
            <a className="btn btn-link text-white-50" href="">
                Terms &amp; Condition
            </a>
            </div>
            <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Map</h5>
            <div className="row g-2 pt-2">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7444.0670280239865!2d79.06931!3d21.111230000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf5640653599%3A0x4dd5759b03792a99!2sPrivara%20Developers!5e0!3m2!1sen!2sin!4v1716977919160!5m2!1sen!2sin"
                width={300}
                height={250}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Get updates and offer on our latest project and.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
                />
                <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                SignUp
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="copyright">
            <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
              Privara Infinite-Trust
                </a>
                , All Right Reserved.
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By{" "}
                <a className="border-bottom">
                 Privara Devlopers
                </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                <a href="">Home</a>
                <a href="">FQAs</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer