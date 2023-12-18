import React, { useEffect, useState } from 'react';
import logo from '../Assets/Img/logo.svg'
import Container from '../Ui/Container';
import { FaPhone } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';



function Header() {

  const location = useLocation();
  const path = location.pathname;
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    if (path) {
      setIsChecked(!isChecked)
    }
  }
  useEffect(() => {
    setIsChecked(false)
  }, [path])

  return (
    <header>
      <nav className='bg-black w-100'>
        <Container>
          <div className='navbar1_text  row d-flex align-items-center justify-content-between heading' >
            <div className='text-light text-uppercase col d-flex align-items-center text-nowrap'> sai shraddha engineering</div>
            <div className=' col text-light text-center text-uppercase d-none d-lg-inline text-nowrap'><span className='mx-2'> <IoMailUnreadOutline size={24} /></span><span >devitglobe@gmail.com</span></div>
            <div className='col text-light text-uppercase justify-content-end  d-flex align-items-center text-align-end navbar_mail text-nowrap' > <FaPhone /> + 91 7719832542</div>
          </div>
        </Container>
        <nav className='navbar2 bg-light'>
          <Container>
            <div className='d-flex main-header'>
              <div className='float-start'>
                <img src={logo} alt='sai shraddha engineering logo | logo' />
              </div>
              <div className='float-end w-100 d-flex align-items-center justify-content-end'>
         <div>
         <input type="checkbox" onChange={handleChange} checked={isChecked} name="" id="" />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>
         </div>
                <div className='header-menu float-end menuPosition  '>
                  <nav className='col nav_col_main'>
                    <Link to={'/'}>
                      <button className={`col header_icon_sub_div  ${path === '/' ? 'active' : ''}`}  >
                        <span className="header_icon_name">Home</span>
                      </button>
                    </Link>
                    <Link to={'/about'}>
                      <button className={`col header_icon_sub_div ${path === "/about" ? 'active' : ''}`} >
                        <span className="header_icon_name">About Us</span>
                      </button>
                    </Link>
                    <Link to={'/service'}>
                      <button className={` col header_icon_sub_div ${path === "/service" ? 'active' : ''}`} >
                        <span className="header_icon_name">Services</span>
                      </button>
                    </Link>
                    <Link to={'/work'}>
                      <button className={` col header_icon_sub_div ${path === "/work" ? 'active' : ''}`} >
                        <span className="header_icon_name">Work</span>
                      </button>
                    </Link>
                    <Link to={'/lifeAtPSE'}>
                      <button className={` col header_icon_sub_div ${path === "/lifeAtPSE" ? 'active' : ''}`} >
                        <span className="header_icon_name">Life At PES</span>
                      </button>
                    </Link>
                    <Link to={'/contact'}>
                      <button className={`col header_icon_sub_div ${path === '/contact' ? 'active' : ''}`} >
                        <span className="header_icon_name">Contact Us</span>
                      </button>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Container>
        </nav>

      </nav>
    </header>
  )
}

export default Header