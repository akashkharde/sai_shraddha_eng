
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
  
      </Container>


      <div className='test'>

      </div>
    </div>
  )
}

export default MissionVission