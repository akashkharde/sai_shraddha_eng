import React, { useEffect, useState } from 'react';
import logo from '../Assets/Img/logo.svg'
import Container from '../Ui/Container';
import { FaPhone } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { HiHomeModern } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillTagsFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoCaretForward } from "react-icons/io5";

function Header() {

  const location = useLocation();
  const path = location.pathname

  const [isChecked, setIsChecked] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  const handleChange = () => {
    if (path) {
      setIsChecked(!isChecked)
    }
  }
  useEffect(() => {
    setIsChecked(false)
  }, [path])

  const hanldeDropdownOpen1 = (e) => {
    e.preventDefault()
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  }
  const hanldeDropdownOpen2 = (e) => {
    e.preventDefault()
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  }


  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isFixedNow = scrollPosition >= 6 * window.innerHeight / 100;

      if (isFixedNow !== isFixed) {
        setIsFixed(isFixedNow);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);


  return (
    <header className=''>
      <nav className='bg-black'>

        <Container >
          <div className='navbar1_text  row d-flex align-items-center justify-content-between topheading' >
            <div className='text-light text-uppercase col d-flex align-items-center text-nowrap topheading px-0'> sai shraddha engineering</div>
            <div className=' col text-light text-center text-uppercase d-none d-lg-inline text-nowrap'><span className='mx-2'> <IoMailUnreadOutline size={24} /></span><span >devitglobe@gmail.com</span></div>
            <div className='col text-light text-uppercase justify-content-end  d-flex align-items-center text-align-end navbar_mail text-nowrap px-0' > <FaPhone /> + 91 7719832542</div>
          </div>
        </Container>

        <nav className={`navbar2 bg-white ${isFixed ? 'fixed-top' : ''}`}>
          <Container>
            <div className='d-flex main-header'>
              <div className='float-start'>
                <img src={logo} alt='sai shraddha engineering logo | logo' className='logo' />
              </div>
              <div className='float-end w-100 d-flex align-items-center justify-content-end position-relative'>

                <input type="checkbox" onChange={handleChange} checked={isChecked} name="" id="" />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>
                <div className='header-menu float-end menuPosition  '>
                  <nav className='col nav_col_main d-flex'>
                    <div className={`header_active   ${path === '/' ? 'header_activeTab' : ''}`}>
                      <Link to={'/'} className='link'>
                        <div className={`col nav_logo_icon`}  >
                          <div className={`navIConSize ${path === '/' ? 'navIConSize_acitve' : ''} `}><HiHomeModern /></div>
                          <div className={`header_icon_name ${path === '/' ? 'header_icon_name_acitve' : ''}`}>Home</div>
                        </div>
                      </Link>
                    </div>
                    <div className={`position-relative company_ header_active  ${path === '/company' ? 'header_activeTab' : ''}`}>
                      <Link to={'/company'} className='link' >
                        <div className={`col nav_logo_icon `} >
                          <div className={`navIConSize ${path === '/company' ? 'navIConSize_acitve' : ''} `}><FaUsers /></div>
                          <div className='tab_arrow'>
                            <div className={`header_icon_name ${path === '/company' ? 'header_icon_name_acitve' : ''}`}>Company </div>
                            <div className="next_icon" onClick={(e) => hanldeDropdownOpen1(e)}> {isOpen1 ? <span className='next_rotate'> <IoCaretForward /></span>
                              : <span><IoCaretForward /></span>} </div>
                          </div>
                        </div>
                      </Link>
                      <div className={`text-center  text-nowrap comp_dropdown pt-2 ${isOpen1 ? "comp_dropdown_active" : ""}`}>
                        <Link to='/company/quality' className='link'>
                          <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> Quality</div>
                        </Link>
                        <hr className="my-0" />
                        <Link to='/company/services' className='link'>
                          <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> services</div>
                        </Link>
                        <hr className="my-0" />
                        <Link to='/company/why-us' className='link'>
                          <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> Why Us</div>
                        </Link>
                        <hr className="my-0" />
                        <Link to='/company/mission-vision' className='link'>
                          <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> Mission and Vision</div>
                        </Link>
                        <hr className="my-0" />
                      </div>
                    </div>
                    <div className={`position-relative company_ header_active  ${path === '/product' ? 'header_activeTab' : ''}`}>
                      <Link to={'/product'} className='link' >
                        <div className={`col nav_logo_icon`} >
                          <div className={`navIConSize ${path === '/product' ? 'navIConSize_acitve' : ''} `}><BiSolidCategory /></div>
                          <div className='tab_arrow'>
                            <div className={`header_icon_name ${path === '/product' ? 'header_icon_name_acitve' : ''}`}>Products</div>
                            <div className="next_icon" onClick={(e) => hanldeDropdownOpen2(e)}> {isOpen2 ? <span className='next_rotate'> <IoCaretForward /></span>
                              : <span><IoCaretForward /></span>} </div>
                          </div>
                        </div>
                      </Link>
                      <div className={`text-center position-absolute text-nowrap comp_dropdown pt-2 ${isOpen2 ? "comp_dropdown_active" : ""}`}>
                        <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Grub Screw</div>
                        <hr className="my-0" />
                        <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Cutting Tools</div>
                        <hr className="my-0" />
                        <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Press Parts</div>
                        <hr className="my-0" />
                        <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Lab</div>
                        <hr className="my-0" />
                        <div className='dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Mission and Vision</div>
                        <hr className="my-0" />
                      </div>
                    </div>
                    <div className={` ${path === "/purchase" ? 'header_activeTab' : ''}  header_active `}>
                      <Link to={'/purchase'} className='link' >
                        <div className={`col nav_logo_icon`} >
                          <div className={`navIConSize ${path === '/purchase' ? 'navIConSize_acitve' : ''} `}><BsFillTagsFill /></div>

                          <div className={`header_icon_name ${path === '/purchase' ? '    ' : ''}`}>Bulk Purchase</div>
                        </div>
                      </Link>
                    </div>
                    <div className={` ${path === "/blog" ? 'header_activeTab' : ''}  header_active `}>
                      <Link to={'/blog'} className='link' >
                        <div className={`col nav_logo_icon`} >
                          <div className={`navIConSize ${path === '/blog' ? 'navIConSize_acitve' : ''} `}><IoIosInformationCircle /></div>

                          <div className={`header_icon_name ${path === '/blog' ? 'header_icon_name_acitve' : ''}`}>Blogs</div>
                        </div>
                      </Link>
                    </div>
                    <div className={` ${path === "/contact" ? 'header_activeTab' : ''}  header_active `}>
                      <Link to={'/contact'} className='link' >
                        <div className={`col nav_logo_icon  ${path === '/contact' ? 'active' : ''}`} >
                          <div className={`navIConSize ${path === '/contact' ? 'navIConSize_acitve' : ''} `}><FaHandshake /></div>

                          <div className={`header_icon_name ${path === '/contact' ? 'header_icon_name_acitve' : ''}`}>Contact Us</div>
                        </div>
                      </Link>
                    </div>
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