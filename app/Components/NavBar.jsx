"use client";
// Importing the necessary libraries
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../public/img/logo.png";
import phone_call from "../../public/img/phone_call.png";

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <div className="nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <div className="logo-container">
            <Image className="logo" src={Logo} alt="Icon" priority />
          </div>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto align-items-center">
            <a
              href="/"
              className={`nav-item nav-link ${
                currentPath === "/" ? "text-secondary" : ""
              }`}
            >
              Home
            </a>

            <a
              href="/Property"
              className={`nav-item nav-link ${
                currentPath === "/Property" ? "text-secondary" : ""
              }`}
            >
              Property
            </a>

            <a
              href="/KnowOurFounder"
              className={`nav-item nav-link ${
                currentPath === "/KnowOurFounder" ? "text-secondary" : ""
              }`}
            >
              About Us
            </a>

            <a
              href="/ContactUs"
              className={`nav-item nav-link ${
                currentPath === "/ContactUs" ? "text-secondary" : ""
              }`}
            >
              Contact Us
            </a>
          </div>

          <div className="btn btn-primary px-3 d-none h-none d-lg-flex">
            <a href="tel:+91 99709 55354" className="text-white px-2 fw-5">
              <Image
                src={phone_call}
                className="size 4"
                style={{ width: 20, height: 20 }}
                alt="call-icon"
              />
              <span className="ms-1"> Call us</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
