
import React from 'react';
import vision from '../Assets/Img/vision.jpg'
import Container from '../Ui/Container';


function MissionVission() {
  return (
    <div className='missionbg'>
      <img src={vision} alt='' className='w-100 mv' />
      <Container className={''}>
        <div className='row py-4'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12 displayCenter flex-column'>
            <div className='circleL displayCenter'>
              <div className='circleM displayCenter'>
                <span className='num'> 01</span>
              </div>
            </div>
            <div className='m_card displayCenter flex-column'>
              <h2 className='heading'>Mission</h2>
              <div className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisi velit. Quisque faucibus erat at tempus commodo.
              </div>
              <div className='shape'></div>
              <div className='shapeOne'></div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12 displayCenter flex-column'>
            <div className='circleL1 displayCenter'>
              <div className='circleM displayCenter'>
                <span className='num'> 02</span>
              </div>
            </div>
            <div className='m_card displayCenter flex-column'>
              <h2 className='heading'>Vission</h2>
              <div className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisi velit. Quisque faucibus erat at tempus commodo.
              </div>
              <div className='shape'></div>
              <div className='shapeOne1'></div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12 displayCenter flex-column'>
            <div className='circleL2 displayCenter'>
              <div className='circleM displayCenter'>
                <span className='num'> 03</span>
              </div>
            </div>
            <div className='m_card displayCenter flex-column'>
              <h2 className='heading'>Goals</h2>
              <div className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisi velit. Quisque faucibus erat at tempus commodo.
              </div>
              <div className='shape'></div>
              <div className='shapeOne2'></div>
            </div>
          </div>
        </div>
        <div>
          <div className="triangle" style={{ color: 'red' }}></div>
          <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
      </Container>
    </div>
  )
}

export default MissionVission