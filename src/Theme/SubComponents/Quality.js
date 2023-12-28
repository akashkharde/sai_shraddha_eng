import React from 'react'
import quality from '../Assets/Img/quality.jpg';
import Container from '../Ui/Container';
import { MdVerifiedUser } from "react-icons/md";
import Button from '../Ui/Button';
import { Link } from 'react-router-dom';


function Quality() {
  return (
    <div>
      <img src={quality} alt='' className='w-100' />
      <Container>
        <div className='my-4'>
          <div className=' bg-white text-center'><span className='heading'><MdVerifiedUser /> </span><span className='heading'>Unrivaled Quality Assurance with sai Shraddha Enginnering</span></div>
          <div className='descJustify bg-white text my-4'>
            Welcome to Sai Shraddha Enginnering, where precision meets perfection. Our relentless commitment to quality is woven into the fabric of our operations. Explore our unwavering dedication to excellence through key parameters that define our quality assurance process:
          </div>
          <div className='row'>
            <h6 className='subHeading'>1. Material Excellence and Rigorous Testing:  </h6>
            <div className='text px-4'>
              At Sai Shraddha Enginnering, we meticulously select premium materials for our Grub Screws, Press Parts, and cutter tools. Our materials undergo rigorous testing, ensuring that only those meeting our high standards are used in production.
              <hr className='my-3' />
            </div>

            <h6 className='subHeading'>2. Cutting-edge Manufacturing Techniques:  </h6>
            <div className='text px-4'>
            Harnessing the power of advanced technology and state-of-the-art machinery, we employ cutting-edge manufacturing techniques. This guarantees not only precision and consistency but also enhances the durability of our products.
              <hr className='my-3' />
            </div>

            <h6 className='subHeading'>3. Precision Grub Screw Manufacturing with Qalert Technology:  </h6>
            <div className='text px-4'>
            Our Grub Screws undergo thorough testing, including the application of our proprietary Qalert technology. This advanced system ensures real-time quality monitoring, alerting us to any deviations from the defined specifications.
              <hr className='my-3' />
            </div>

            <h6 className='subHeading'>4. Durable Press Parts Tested for Tensile Strength:  </h6>
            <div className='text px-4'>
            The durability of our Press Parts is a result of comprehensive testing for factors such as tensile strength, dimensional accuracy, and wear resistance. Our parts are built to withstand the toughest conditions, tested and proven.
              <hr className='my-3' />
            </div>

            <h6 className='subHeading'>5. Expert Tool Resharpening for Prolonged Performance:  </h6>
            <div className='text px-4'>
            Trust our skilled team for the resharpening of all types of cutter tools. Using precision grinding techniques, we restore sharpness and longevity, ensuring your tools are tested and optimized for prolonged performance.
              <hr className='my-3' />
            </div>

            <h6 className='subHeading'>6. Comprehensive Quality Checks and Real-time Monitoring:  </h6>
            <div className='text px-4'>
            Before reaching your hands, each product undergoes a meticulous quality control process. Our experts conduct comprehensive tests, and with Qalert technology, we monitor quality in real-time to promptly address any deviations.
              <hr className='my-3' />
            </div>

            <h6 className='subHeading'>7. Certifications, Compliance, and Customer Satisfaction:  </h6>
            <div className='text px-4'>
              Sai Shraddha Enginnering, proudly holds industry certifications, complying with regulations. Our commitment to quality is validated through third-party assessments, offering you tested and certified products. Customer satisfaction remains our ultimate focus.
              <hr className='my-3' />
            </div>

            <h6 className='subHeading'>8. Continuous Improvement and Client Feedback Integration:  </h6>
            <div className='text px-4'>
              We value your feedback. Through continuous improvement initiatives, we refine our processes to ensure the highest quality standards. Partner with Sai Shraddha Enginnering for products that consistently exceed expectations.
              Discover unparalleled quality with Sai Shraddha Enginnering. Contact us today to discuss your specific requirements and experience precision, reliability, and excellence.
              <hr className='my-3'/>
            </div>
            <Link  to='/contact' className='displayCenter link'>
              <Button size={'large'}>Contact Us</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Quality