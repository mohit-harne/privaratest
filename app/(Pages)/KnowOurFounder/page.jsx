import React from 'react'
import Image from 'next/image'
import Director from '../../../public/img/director.png'
import Pd1 from "../../../public/img/pd1.png"
import Pd2 from "../../../public/img/privara-dev.jpeg"
import CallAction from '../../Components/CallAction';
import header from '../../../public/img/pbanner.png'
import '../../styles/bootstrap.min.css';
import '../../styles/style.css';
import '../../styles/common.css';

const KnowOurFounder = () => {
  return (
    <div>
    {/* Header Start */}
    <div className="container-fluid header bg-white p-0" >
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row ">
        <div className="breadbox mt-4 pt-4"  style={{ textAlign: 'center'}}>
        <div
        className="text-center mx-auto m-3 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="pb-3 text-white">
         Known Your Founder
          <hr />
        </h1>
      </div>
        </div>
        <div className="flex animated fadeIn"  style={{}} >
          <div className='gradient'>

          </div> 
          <Image className="pbanner img-fluid" src={header} alt=""/>
        </div>
      </div>
    </div>
    {/* Header End */}
          

    {/* Call to Action Start */}
    <div className="container-xxl py-5">

        <div className="container">
        <div className="bg-light rounded p-3">
            <div
            className="bg-white rounded p-4"
            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
            >
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <Image
                    className="img-fluid rounded w-100"
                    src={Director}
                    alt=""
                />
                <h4
                    style={{ textAlign: "center", paddingTop: 5, color: "black" }}
                >
                    Founder and Director{" "}
                </h4>
                <h4 style={{ textAlign: "center", color: "black" }}>
                    Sunil Babde
                </h4>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="mb-4">
                    <h1>We are Privara</h1>
                    <p>We help you leverage real estate to build wealth.</p>
                    <p className='justy'>
                    We are a prominent real estate firm situated in the most
                    highly growing city of India — Nagpur. Driven by the purpose
                    of building “Infinite Trust” among our customers and dealers,
                    we aim to set new benchmarks in offering superior real estate
                    services.
                    </p>
                    <p>
                    Privara aims to create a seamless real estate experience for
                    everyone. We believe that real estate should be about more
                    than just buying and selling houses.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Call to Action End */}
    {/* Call to Action Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="bg-light rounded p-3">
                <div
                className="bg-white rounded p-4"
                style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                >
                <div className="row g-5 align-items-center">
                    <div className="wow fadeIn" data-wow-delay="0.5s">
                    <div style={{ textAlign: "center" }}>
                        <h1>Meet Our Privara Team</h1>
                        <p>
                        Read along to find out how we created infinite trust among all
                        our customers.
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="child2">
                        <center>
                            <Image
                            className="img-fluid rounded w-50"
                            src={Pd1}
                            height="10px"
                            weight="10px"
                            alt=""
                            />
                            <h4 className="p-2">add</h4>
                         
                            <strong>
                            <b>Senior Sales Director</b>
                            </strong>
                            <p>Privara Devlopers</p>
                        </center>
                        </div>
                        <div className="child1">
                        <center>
                            <Image
                            className="img-fluid rounded w-50"
                            src={Pd2}
                            alt=""
                            />
                            <h4 className="p-2">Mr.Manoj Kamale</h4>
                       
                            <strong>
                            <b>Senior Sales Director</b>
                            </strong>
                            <p>Privara Devlopers</p>
                        </center>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    {/* Call to Action End */}
    <CallAction/>
</div>

  )
}

export default KnowOurFounder