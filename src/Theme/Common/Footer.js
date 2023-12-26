import React from 'react'
import Container from '../Ui/Container';
import { BsFillTagsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



function Footer() {
    return (
        <>
            <footer className='footer_main'>
                <Container>
                    <div className="row text-light py-2 ">
                        <div className="col-sm-4 col-md-5 text-center displayCenter">
                            <h5 className='mb-0'>Need Tools In Bulk</h5>
                        </div>
                        <div className="col-sm-2 text-center">
                            <Link to='/purchase' title="Buy Tools in bulk quantity">
                                <div className="subHeading displayCenter">
                                    <div className='footerSvg displayCenter text-light fs-1'>
                                        <BsFillTagsFill />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-5 displayCenter  text-light">
                            <h5 className='mb-0 displayCenter'><span className='subHeading text-light'><RiCustomerServiceFill /></span> Our Executive will get in Touch</h5>
                        </div>
                    </div>
                </Container>
            </footer>
            <footer>
                <Container>
                    <div className="row compM">
                        <div className="col-sm-6 col-lg order-sm-3 order-lg-2 displayCenter flex-column">
                            <h3 className='primaryColor'>Quick Links</h3>
                            <ul>
                                <li>
                                    <Link to="" className='link' title="Home Link">
                                        <span className="mx-2 "><FaArrowRightLong /></span> Home
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="Company Link">
                                        <span className="mx-2 "><FaArrowRightLong /></span> Company
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="Bulk Purchase Link">
                                        <span className="mx-2 "><FaArrowRightLong /></span> Bluk Purchase
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="Blog Link">
                                        <span className="mx-2 "><FaArrowRightLong /></span> Blog
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="Contact Us Link">
                                        <span className="mx-2 "><FaArrowRightLong /></span> Contact Us
                                    </Link >
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-lg order-sm-4 order-lg-3 displayCenter flex-column">
                            <h3 className='primaryColor' >Collections</h3>
                            <ul>
                                <li>
                                    <Link to="" className='link' title="meter Cutting Tool">
                                        <span className="mx-2 "><FaArrowRightLong /></span> meter Cutting Tool
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="">
                                        <span className="mx-2 "><FaArrowRightLong /></span> prod 2
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="">
                                        <span className="mx-2 "><FaArrowRightLong /></span> Prod 3
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="x">
                                        <span className="mx-2 "><FaArrowRightLong /></span> prod 3
                                    </Link >
                                </li>
                                <li>
                                    <Link to="" className='link' title="">
                                        <span className="mx-2 "><FaArrowRightLong /></span> prod 4
                                    </Link >
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg add-ftr order-sm-2 order-lg-4  d-flex align-items-center justify-content-start flex-column">
                            <h3 className='primaryColor text-center'>Contact us</h3>
                            <div>
                                <div className="row text-center d-flex align-items-center justify-content-start">
                                    <div className="col-2 pr-0">
                                        <FaLocationDot className="ftr-contact-icon" />
                                    </div>
                                    <div className="col-10 text-start">
                                        <h6 className="mb-0">Saktkar Industry , Nasik</h6>
                                    </div>
                                </div>
                                <div className="row d-flex text-center align-items-start mt-2 mb-2">
                                    <div className="col-2 pr-0">
                                        <FaPhoneAlt className="call Icon" />
                                    </div>
                                    <div className="col-10 text-start">
                                        <Link to="" className='link' title="Direct Whattsapp Chat" href="https://wa.me/917719832542?text=Hi">
                                            +91 7719832542
                                        </Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='text-center'>
                        © Sai Shraddha Enginnering 2023.
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer