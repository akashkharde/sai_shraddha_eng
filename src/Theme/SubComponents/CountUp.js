import React, { useEffect, useRef, useState } from 'react';
import { FaHandshake } from "react-icons/fa";
import CountUp from 'react-countup';



function CountUpComp() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const endCount1 = 10;
    const endCount2 = 30;
    const endCount3 = 20;
    const endCount4 = 5290;

    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (targetRef1.current) {
                const targetRect = targetRef1.current.getBoundingClientRect();
                const isTargetVisible = targetRect.top <= window.innerHeight && targetRect.bottom >= 0;
                setIsVisible1(isTargetVisible);
            }
            if (targetRef2.current) {
                const targetRect = targetRef2.current.getBoundingClientRect();
                const isTargetVisible = targetRect.top <= window.innerHeight && targetRect.bottom >= 0;
                setIsVisible2(isTargetVisible);
            }
            if (targetRef3.current) {
                const targetRect = targetRef3.current.getBoundingClientRect();
                const isTargetVisible = targetRect.top <= window.innerHeight && targetRect.bottom >= 0;
                setIsVisible3(isTargetVisible);
            }
            if (targetRef4.current) {
                const targetRect = targetRef4.current.getBoundingClientRect();
                const isTargetVisible = targetRect.top <= window.innerHeight && targetRect.bottom >= 0;
                setIsVisible4(isTargetVisible);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='row countup' title='why Us'>
            <div className='heading text-center mb-4'><span className='heading'><FaHandshake /></span> Why Us</div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="d-flex displayCenter mb-4" >
                    <div className='countupBox bg-white'>
                        <div className='countupNum fw-bold' ref={targetRef1}> {!isVisible1 && "0"} {isVisible1 && <CountUp start={1} end={endCount1} duration={5} />} + </div>
                        <div className='heading  '>Yers Of Experience</div>
                    </div>
                </div>
                <div className="d-flex displayCenter  mb-4" >
                    <div className='countupBox bg-white'>
                        <div className='countupNum fw-bold' ref={targetRef2}> {!isVisible2 && "0"} {isVisible2 && <CountUp start={1} end={endCount2} duration={5} />} + </div>
                        <div className='heading usCol' >Number Of Employs</div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="d-flex displayCenter  mb-4">
                    <div className='countupBox bg-white'>
                        <div className='countupNum fw-bold' ref={targetRef3}> {!isVisible3 && "0"} {isVisible3 && <CountUp start={1} end={endCount3} duration={5} />} + </div>
                        <div className='heading usCol' >Number Of Clients</div>
                    </div>
                </div>
                <div className="d-flex displayCenter  mb-4" >
                    <div className='countupBox bg-white'>
                        <div className='countupNum fw-bold' ref={targetRef4}> {!isVisible4 && "0"} {isVisible4 && <CountUp start={1} end={endCount4} duration={5} />} + </div>
                        <div className='heading usCol' >Product Delivered</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CountUpComp