import React, { useEffect, useState } from 'react';
import logo from '../Assets/Img/logo.svg'
import Container from '../Ui/Container';
import { FaPhone } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { HiHomeModern } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoIosInformationCircle } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoCaretForward } from "react-icons/io5";



function Header() {

  const location = useLocation();
  const path = location.pathname;
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);



  const handleChange = () => {
    if (path) {
      setIsChecked(!isChecked)
    }
  }
  // useEffect(() => {
  //   setIsChecked(false)
  // }, [path])
  console.log(isChecked);

  const hanldeDropdownOpen1 = () => {
    setIsOpen1(!isOpen1)
  }
  const hanldeDropdownOpen2 = () => {
    setIsOpen2(!isOpen2)
  }
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
        <nav className='navbar2 bg-white'>
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
                    <div className='header_active'>
                      <Link to={'/'} className='link'>
                        <div className={`col nav_logo_icon   ${path === '/' ? 'active' : ''}`}  >
                          <div className='navIConSize'><HiHomeModern /></div>
                          <div className="header_icon_name">Home</div>
                        </div>
                      </Link>
                    </div>
                    <div className='position-relative company_ header_active '>
                      <Link to={'/about'} className='link' >
                        <div className={`col nav_logo_icon  ${path === "/about" ? 'active' : ''}`} >
                          <div className='navIConSize'><FaUsers /></div>
                          <div className='tab_arrow'>
                            <div className="header_icon_name">Company </div>
                            <div className="next_icon" onClick={() =>  hanldeDropdownOpen1()}> {isOpen1 ? <span><IoCaretForward /></span>: <span className='next_rotate'> <IoCaretForward /></span>} </div>
                          </div>
                        </div>
                      </Link>
                      <div className={`text-center  text-nowrap comp_dropdown pt-2 ${isOpen1 ? "comp_dropdown_active" : ""}` }>
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> Profile</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> Quality</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> services</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> Why Us</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span> Mission and Vision</div>
                        <hr />
                      </div>
                    </div>
                    <div className='position-relative company_ header_active'>
                      <Link to={'/products'} className='link' >
                        <div className={`col nav_logo_icon  ${path === "/about" ? 'active' : ''}`} >
                          <div className='navIConSize'><BiSolidCategory /></div>
                          <div className='tab_arrow'>
                            <div className="header_icon_name">Products</div>
                            <div className="next_icon" onClick={() =>  hanldeDropdownOpen2()}> {isOpen2  ? <span><IoCaretForward /></span>: <span className='next_rotate'> <IoCaretForward /></span>} </div>
                          </div>
                        </div>
                      </Link>
                      <div className='text-center position-absolute text-nowrap comp_dropdown pt-2 '>
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Grub Screw</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Cutting Tools</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Press Parts</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Lab</div>
                        <hr />
                        <div className='px-4 dropdown_op'><span className='next_arrow'><IoMdArrowRoundForward /></span>Mission and Vision</div>
                        <hr />
                      </div>
                    </div>
                    <div className='header_active'>
                      <Link to={'/work'} className='link' >
                        <div className={`col nav_logo_icon  ${path === "/work" ? 'active' : ''}`} >
                          <div className='navIConSize'><BiSolidPurchaseTag /></div>

                          <div className="header_icon_name">Bulk Purchase</div>
                        </div>
                      </Link>
                    </div>
                    <div className='header_active'>
                      <Link to={'/lifeAtPSE'} className='link' >
                        <div className={`col nav_logo_icon  ${path === "/lifeAtPSE" ? 'active' : ''}`} >
                          <div className='navIConSize'><IoIosInformationCircle /></div>

                          <div className="header_icon_name">Blogs</div>
                        </div>
                      </Link>
                    </div>
                    <div className='header_active'>
                      <Link to={'/contact'} className='link' >
                        <div className={`col nav_logo_icon  ${path === '/contact' ? 'active' : ''}`} >
                          <div className='navIConSize'><FaHandshake /></div>

                          <div className="header_icon_name">Contact Us</div>
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