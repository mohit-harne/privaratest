import React from 'react';
import Image from 'next/image';
import Logo from '../../public/img/logo.png';

const newNavBar = () => {
  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
         
            <a class="logo" href="index.html"><img alt="logo"
                src="./assets/images/privara_infinite_trust-removebg-preview.png" />
            </a>
          

            <ul class="nav">
              <li><a class="active" href="index.html">Home</a></li>
              <li><a href="projects.html">Projects</a></li>
      
              <li><a href="about_us.html">About Us</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="tel:9970955354">Call For Visit</a></li>
            </ul>
            <a class="menu-trigger"> <span>Menu</span> </a>
          
          </nav>
        </div>
      </div>
    </div>
    </>
  );
};

export default newNavBar;