import React from 'react';
import whyUs from '../Assets/Img/why-us.jpg';
import whyChooseUs from '../Assets/Img/why-choose-us.png';
import increase from '../Assets/Img/increase.png';
import CountUpComp from './CountUp';
import Container from '../Ui/Container';

function WhyUs() {
  return (
    <div>
      <img src={whyUs} alt='' className='w-100'/>
      <Container className={'mt-4'}>
      <CountUpComp />
      <hr/>
      <div className='row displayCenter'>
        <div className='col-lg-5 col-md-6 col-sm-12 p-4 d-flex'>
          <img src={whyChooseUs} alt=' ' className='w-100 imgabout' />
        </div>
        <div className='col-lg-7  col-md-6 col-sm-12 displayCenter flex-column'>
          <div className='d-flex align-item-center justify-content-start w-100 mb-3 '>
            <div className='mx-3 displayCenter'> <img src={increase} alt=' ' className='bg-blue imgIncrease displayCenter' /></div>
            <div className=''>
              <div className='subHeading'>Qalert Innovation </div>
              <div className='text'>Real-time quality monitoring for unparalleled precision.</div>
            </div>
          </div>
          <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
            <div className='mx-3 displayCenter'> <img src={increase} alt=' ' className='bg-blue imgIncrease displayCenter' /></div>
            <div className=''>
              <div className='subHeading'>Tailored Solutions:</div>
              <div className='text'>Customized for your industry's unique needs.</div>
            </div>
            </div>
            <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
            <div className='mx-3 displayCenter'> <img src={increase} alt=' ' className='bg-blue imgIncrease displayCenter' /></div>
            <div className=''>
              <div className='subHeading'> Proven Excellence:</div>
              <div className='text'>Over 10+ years of unmatched quality and reliability.</div>
            </div>
          </div>
          <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
            <div className='mx-3 displayCenter'> <img src={increase} alt=' ' className='bg-blue imgIncrease displayCenter' /></div>
            <div className=''>
              <div className='subHeading'>Sustainability Focus: </div>
              <div className='text'>Minimizing environmental impact through responsible practices.</div>
            </div>
          </div>
          <div className='d-flex align-item-center justify-content-start w-100 mb-3'>
            <div className='mx-3 displayCenter'> <img src={increase} alt=' ' className='bg-blue imgIncrease displayCenter' /></div>
            <div className=''>
              <div className='subHeading'>Passionate Expert Team: </div>
              <div className='text'>Skilled professionals dedicated to craftsmanship and quality.</div>
            </div>
          </div>
        </div>
<hr/>
      </div>
      </Container>

    </div>
  )
}

export default WhyUs