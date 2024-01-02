import React from 'react'
import Container from './Ui/Container';
import { FaPhoneVolume } from "react-icons/fa6";
import contactUs from '../Theme/Assets/Img/contactBg.jpg'

function ContactUs() {
  return (
    <div className='contactBg'>
      {/* <div class="glass"
       >
        Hello Folks!
      </div> */}
      <Container>
      <div className='displayCenter flex-column '>
        <h1 className='contactFont'>Let's Get Connected</h1>
        <h2 className='fs-2 my-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2></div>
        <div className='row'>
            <div className='col'>
              <div>
                <div><FaPhoneVolume /></div>
                <div>This is Dummy Text</div>
                <div>+91 7719832542</div>
              </div>
            </div>
            <div className='col'>hii</div>
            <div className='col'>hii</div>

        </div>
    </Container>
    </div>

  )
}

export default ContactUs