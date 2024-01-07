import React from 'react';
import Container from './Ui/Container';
import serviceImg from './Assets/Img/services.jpg'
import { GoGear } from "react-icons/go";

const servicesData = [
  {
    icon: <GoGear className="servicesIcon" />,
    title: 'DevOps & Cloud Consulting',
    imgSrc: '../assets/images/devops & cloud consulting.png',
    content: 'We offer DevOps-Cloud Consulting services to optimize IT infrastructure & streamline operations with DevOps tools & methodologies, implementing tailored solutions. We provide training and support, fostering collaboration, faster time-to-market, and high-quality software.',
  },
  {
    icon:< GoGear className="servicesIcon" />,
    title: 'DevSecOps',
    imgSrc: '../assets/images/decsecops.png',
    content: 'We offer tailored DevOps consulting services to help businesses optimize and automate their software development processes for enhanced efficiency and productivity.',
  },
  {
    icon:< GoGear className="servicesIcon" />,
    title: 'Cyber Security',
    imgSrc: '../assets/images/cybersecurity.png',
    content: 'We prioritize cyber security, providing comprehensive services such as vulnerability assessments, penetration testing, security audits, and incident response. Our experienced team identifies and mitigates potential security risks, ensuring proactive protection for your business.',
  },
  {
    icon:< GoGear className="servicesIcon" />,
    title: 'Emerging Technologies',
    imgSrc: '../assets/images/Emerging-Technologies.png',
    content: 'We assist in identifying and implementing cutting-edge technologies like Robotic, AI, blockchain, and IoT. Our expert team ensures you understand the benefits and implements these technologies effectively for your business advantage.',
  },
  {
    icon:< GoGear className="servicesIcon" />,
    title: 'Software Development',
    imgSrc: '../assets/images/sdlc.png',
    content: 'With custom software development, tailoring solutions to meet client needs. Our experienced team excels in diverse programming languages and technologies, delivering scalable, reliable, and maintainable software. Whether it\'s a web application, mobile app, or desktop software, we have you covered.',
  },
  {
    icon:< GoGear className="servicesIcon" />,
    title: 'Contractual Outsourcing',
    imgSrc: '../assets/images/Contractual Outsourcing.png',
    content: 'Resource outsourcing services to meet your staffing needs. From short-term contractors to long-term, our qualified professionals are available on demand. We assist in identifying skilled candidates with the right expertise to effectively fulfill your requirements.',
  },
  {
    icon:< GoGear className="servicesIcon" />,
    title: 'Contractual Outsourcing',
    imgSrc: '../assets/images/Contractual Outsourcing.png',
    content: 'Resource outsourcing services to meet your staffing needs. From short-term contractors to long-term, our qualified professionals are available on demand. We assist in identifying skilled candidates with the right expertise to effectively fulfill your requirements.',
  },  {
    icon:< GoGear className="servicesIcon" />,
    title: 'Contractual Outsourcing',
    imgSrc: '../assets/images/Contractual Outsourcing.png',
    content: 'Resource outsourcing services to meet your staffing needs. From short-term contractors to long-term, our qualified professionals are available on demand. We assist in identifying skilled candidates with the right expertise to effectively fulfill your requirements.',
  },
];


const Services = () => (
  <div className='servicesBG'>
    <img src={serviceImg} />
    <Container >
      <div className='row'>
        {servicesData.map((item,i) => {
          return (
            <React.Fragment key={i}>
              <div className='col-lg-4 col-md-6 col-sm-12  '>
                <div className='services my-3 p-4'>
                  <div>{item.icon}</div>
                  <div className='text-center subHeading'>{item.title}</div>
                  <div className='text mt-4'>{item.content}</div>

                </div>
              </div>
            </React.Fragment>
          )
        })
        }
      </div>
    </Container>
  </div>
);

export default Services;
