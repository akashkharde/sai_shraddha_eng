import React from 'react'
import Container from './Ui/Container';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ContactUs() {
  return (
    <div className='contactBg my-4'>
      <Container>
        <div className='displayCenter flex-column '>
          <h1 className='contactFont'>Let's Get Connected</h1>
          <h2 className='fs-2 my-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>

        <div className='row contactRow'>
          <div className='col-lg-5 col-md-7  col-sm-12 contactCol1 '>
            <div className='p-4' >
              <h2 className='heading displayCenter text-white'>This Is heading</h2>
              <div className=' text text-white'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
              <div className='displayCenter justify-content-start gap-4 mt-4'>
                <div><FaLocationDot className="text-light fs-3" /></div>
                <div className='text text-white'>
                  Mahavir Residency, 624, Spine Rd, Shivatej Nagar, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019
                </div>
              </div>
              <div className='displayCenter justify-content-start gap-4 mt-2'>
                <div><FaPhoneAlt className="text-light fs-3" /></div>
                <div className='text text-white'>
                  +91 7719832542
                </div>
              </div>
              <div className='displayCenter justify-content-start gap-4 mt-2'>
                <div><IoMailUnreadOutline className="text-light fs-3" /></div>
                <div className='text text-white'>
                  itsolution@devitglobe.com
                </div>
              </div>
              <div className='displayCenter justify-content-between  gap-4 mt-2 contactDesignMain'>
                <div className='displayCenter gap-4 '>
                  <div><FaFacebook className="text-light fs-3" /></div>
                  <div><FaInstagram className="text-light fs-3" /></div>
                  <div><FaLinkedin className="text-light fs-3" /></div>
                </div>
                <div className='contactDesign'>
              <div className="contactDesignsmallcircle"></div>

                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-12'>
           hiii
            </div>
        </div>
      </Container>
    </div>

  )
}

export default ContactUs