'use client';
// Importing the necessary libraries
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Logo from '../../public/img/logo.png'



const NavBar = () => {
  const currentPath = usePathname();

  return (
    <div className="container-fluid nav-bar bg-transparent">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-3">
      <a
        href="/"
        className="navbar-brand d-flex align-items-center text-center"
      >
        <div className="">
          <Image
            className="logo"
            src= {Logo}
            alt="Icon"
          />
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
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          
          <a href="Property" className="nav-link">
            Property
          </a>
          
          <a href="KnowOurFounder" className="nav-item nav-link">
            Know Our Founder
          </a>
          
          <a href="ContactUs" className="nav-item nav-link">
            Contact Us
          </a>
        </div>

        <div className="btn btn-primary px-3 d-none h-none d-lg-flex">
        <a href='tel:+91 99709 55354' className='text-white p-0' >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size 4"
              href=""
              style={{ width: 20, height: 20 }}
            >
              <path
                fillRule="evenodd"
                d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
             
            Call us
          </a>
       
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default NavBar