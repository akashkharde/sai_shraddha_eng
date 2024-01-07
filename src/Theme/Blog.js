import React from 'react';
import BlogImg from './Assets/Img/blog.jpg'
import Container from './Ui/Container';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Blog() {

  const servicesData = [
    {
      title: 'DevOps & Cloud Consulting',
      date:"2 jan 2023",
      imgSrc:BlogImg,
      content: 'We offer DevOps-Cloud Consulting services to optimize IT infrastructure & streamline operations with DevOps tools & and methodologies...',
      navigatePath:"firstBlog"
    },
    {
      title: 'DevSecOps',
      imgSrc: BlogImg,
      date:"2 jan 2023",
      content: 'We offer tailored DevOps consulting services to help businesses optimize and automate their software development processes aand for...',
      navigatePath:"contact"
    },
    {
      title: 'Cyber Security',
      date:"2 jan 2023",
      imgSrc: BlogImg,
      content: 'We prioritize cyber security, providing comprehensive services such as vulnerability assessments, penetration testing, security and audits... ',
      navigatePath:"contact"
    },
  ]
  return (
    <div className='servicesBG'>
      <img src={BlogImg} alt='' className='w-100' />
      <Container >
        <div>
          <div className='row'>
            {servicesData.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div className='col-lg-4 col-md-6 col-sm-12  '>
                    <div className='blog my-3 p-4'>
                    <img src={item.imgSrc} alt='' className='w-100' />
                    <div className='mt-3 linkColor'>{item.date} <FaArrowRightLong /></div>
                      <div className='text-center subHeading'>{item.title}</div>
                      <div className='text mt-4'>{item.content}</div>
                    <Link to={`/${item.navigatePath}`}>
                    <div className='linkColor'>Read More...</div>
                    </Link>
                    </div>
                  </div>
                </React.Fragment>
              )
            })
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blog