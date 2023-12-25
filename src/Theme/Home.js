import React from 'react';
import Container from './Ui/Container';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Button from './Ui/Button';
import img from './Assets/Img/drill.jpg'
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import 'react-slideshow-image/dist/styles.css';
import testImg from '../../src/Theme/Assets/Img/drill.jpg'
import { MdVerifiedUser } from "react-icons/md";
import prod1 from '../Theme/Assets/Img/prod1.jpg';
import prod2 from '../Theme/Assets/Img/prod2.jpg';
import prod3 from '../Theme/Assets/Img/prod3.jpg';
import prod4 from '../Theme/Assets/Img/prod4.jpg';
import prod5 from '../Theme/Assets/Img/prod5.jpg';




const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: "center",
  objectSize: "cover",
  height: '100vh'
}
const slideImages = [
  {
    url: 'https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_1280.jpg',
    heading: "This Is Heading",
    caption: 'Slide 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    divBackground: "homeSliderDivBack",
    captionClassname: "homeSliderCap",
    headingClassname: "homeSliderHeading",
    ButtonName: "Explore Product",
  },
  {
    url: img,
    heading: "This Is Heading",
    caption: 'Slide 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    divBackground: "homeSliderDivBack",
    captionClassname: "homeSliderCap",
    headingClassname: "homeSliderHeading",
    ButtonName: "Explore Product",
  },
  {
    url: 'https://t3.ftcdn.net/jpg/02/66/10/20/240_F_266102034_x1p6OVbMClRx9lwlGZtCjxFdn0j6NrYA.jpg',
    heading: "This Is Heading",
    caption: 'Slide 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    divBackground: "homeSliderDivBack",
    captionClassname: "homeSliderCap",
    headingClassname: "homeSliderHeading",
    ButtonName: "Explore Product",
  },
  {
    url: "https://t3.ftcdn.net/jpg/04/14/51/80/240_F_414518077_vd6vmvbJoRyzMS1joUrn6G2fWBh0mfWY.jpg",
    heading: "This Is Heading",
    caption: 'Slide 4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    divBackground: "homeSliderDivBack",
    captionClassname: "homeSliderCap",
    headingClassname: "homeSliderHeading",
    ButtonName: "Explore Product",

  }
];


const images = [
  {
    url: prod2,
    name: 'product 1',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod1,
    name: 'product 2',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod3,
    name: 'product 3',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod4,
    name: 'product 4',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod5,
    name: 'product 5',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod1,
    name: 'product 6',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod2,
    name: 'product 7',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod3,
    name: 'product 8',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod4,
    name: 'product 9',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod5,
    name: 'product 10',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod1,
    name: 'product 11',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod3,
    name: 'product 12',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod2,
    name: 'product 13',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod4,
    name: 'product 14',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod5,
    name: 'product 15',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod1,
    name: 'product 16',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod2,
    name: 'product 17',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod3,
    name: 'product 18',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod4,
    name: 'product 19',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod5,
    name: 'product 20',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod1,
    name: 'product 21',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod2,
    name: 'product 22',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod3,
    name: 'product 23',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod4,
    name: 'product 24',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod5,
    name: 'product 25',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod1,
    name: 'product 26',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod2,
    name: 'product 27',
    button: 'View Product',
    link: ' ',
  },
  {
    url: prod3,
    name: 'product 28',
    button: 'View Product',
    link: ' ',
  },

];


function Home() {

  const properties = {
    duration:300000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    pauseOnHover: false,

    get slides() {
      return images.map((image, index) => (
        <div key={index} className="each-slide  position-relative">
          <img src={image.url} alt={`slide-${index}`} className='  overflow-hidden col'  />
          <div className='productSliderText col'>
            <div className='fs-4'>{image.name}</div>
            <Button size={'medium'} className={'my-2'} >{image.button}</Button>
          </div>
        </div>
      ));
    },

    containerStyle: {
      width: '100%',
      margin: '0',
      overflow: 'hidden',
      position: 'relative',
    },
  };


  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className='homeImgSlider' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              <div className={`${slideImage.divBackground}`}>
                <div className={`${slideImage.headingClassname}`}>{slideImage.heading}</div>
                <div className={`${slideImage.captionClassname}`} >{slideImage.caption}</div>
                <div className='d-flex align-item-center justify-content-center'> <Button size={'large'} className={'btnbackground'}>{slideImage.ButtonName}</Button> </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <Container>
        <div className='row my-4'>
          <div className='col-lg-4 col-md-6 col-sm-12 p-4'>  <img src={img} className='imgabout' alt='About' /></div>
          <div className='col-lg-8 col-md-6 col-sm-12 text-left p-4  '>
            <div className='text-nowrap'><span className='subHeading'><MdOutlineMiscellaneousServices /> </span><span className='subHeading'>Service Info</span></div>
            <div className='descJustify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className='my-4'><Button size={'large'}>Explore Our Services</Button></div>
          </div>
        </div>

        <div className='row my-4'>
          <div className='col-lg-8 col-md-6 col-sm-12 text-left p-4  '>
            <div className='text-nowrap'><span className='subHeading'><MdVerifiedUser /> </span><span className='subHeading'>Our Experties</span></div>
            <div className='descJustify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className='my-4'><Button size={'large'}>Our Experties</Button></div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 p-4'>  <img src={img} className='imgabout' alt='About' /></div>
        </div>

        <div className='my-4'>
          <div className="cardSlider" style={properties.containerStyle}>
            <Slide {...properties} className='react-slideshow-wrapperr'>{properties.slides}</Slide>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home