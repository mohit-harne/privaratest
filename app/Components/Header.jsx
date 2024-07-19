import React from 'react'
import Image from 'next/image'
import ab from '../../public/img/RERA/home page.png'
import h2 from '../../public/img/RERA/hb2.png'



const Header = () => {
  return (
    
    <>
 {/* Header Start */}
      <div className="container-full header bg-white position-relative">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="Headerslider bg-white">
            <div className="position-absolute w-100 h-100 mt-4 pt-4 mx-4 px-4 d-flex flex-column text-black" style={{ zIndex: 2}}>
              <div className="my-2" />
              <div className=" col-md-6 p-1 mt-lg-5 py-4 my-4">
                <div className="header-txt pt-4 mt-4">
                  <h1 className="display-5 animated fadeIn mb-4">
                    Find A <span className="text-primary">Perfect Plot</span> To <br />
                    Build Your Home
                  </h1>
                </div>
                <div className="header-subtxt pt-3 p-2">
                  <p style={{color:'grey'}}>
                    If you don’t own a home, buy one. If you own a home, buy another one. If you <br /> own two homes buy a third. And lend your relatives the money to buy a home.
                  </p>
                  <p className="pt-3" style={{color:'grey'}}> - John Paulson</p>
                </div>
              </div>
              <div className="HeaderButton  py-4 my-2">
                <a href="#" className="btn btn-primary py-3 px-5 me-3 fadeIn">Get Started</a>
                <div className='px-4'></div>
                <a href="#" className="btn btn-primary py-3 px-5 me-3 fadeIn">Schedule Meeting</a>
              </div>
            </div>
            <div className="Headerslider">
            <div className="owl-carousel header-carousel position-relative">
         
              <div className="owl-carousel-item">
                <video autoPlay muted loop className="hvideo">
                  <source src="./videos/H.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="owl-carousel-item">
                <Image className="hvideo img-flex" src={ab} alt="Carousel" 
                />
              </div>
              <div className="owl-carousel-item">
                <Image className="hvideo img-flex" src={h2} alt="Carousel"
                 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </>
  )
}

export default Header