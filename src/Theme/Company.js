import React from 'react'
import Container from './Ui/Container';
import company from '../Theme/Assets/Img/company.jpg';
import company1 from '../Theme/Assets/Img/company1.jpg';

import { HiBookOpen } from "react-icons/hi2";

function Company() {
  return (
    <div>
      <img src={company} alt='' className='w-100' />
      <Container>
        <div className="about-firstrow ">
          <hr />
          <h1 className="heading"> <HiBookOpen /> About Sai Shraddha Enginnering</h1>
          <div className="row">
            <div className="col-lg-5 displayCenter" >
              <img src={company1} className="img-fluid about-first-img p-0" alt="about-img1" />
            </div>
            <div className="col-lg-7">
              <h6 className="mb-0 text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisi velit. Quisque faucibus erat at tempus commodo. Integer ac pretium elit. Nullam sodales aliquam ipsum, eu faucibus diam sagittis in. Morbi quis erat neque. Nam commodo metus et ipsum consectetur aliquam. Vestibulum eget imperdiet nulla. Morbi nulla nisl, hendrerit consequat ex nec, ornare feugiat nunc. Proin fringilla eu est sollicitudin rutrum. Suspendisse suscipit placerat enim sit amet pharetra. Maecenas euismod euismod tortor, maximus consequat nibh convallis ut.

                Donec neque risus, laoreet quis ullamcorper eget, malesuada pellentesque velit. Suspendisse vel neque egestas, placerat turpis quis, ultrices arcu. Suspendisse in laoreet nulla. Donec vel malesuada nulla. Mauris ac commodo est, in ullamcorper purus. In neque quam, interdum at fermentum mollis, consectetur at nisl. Praesent nec consequat neque, ut volutpat libero. Quisque mauris sem, dignissim sed porttitor ac, molestie ac enim. Aenean hendrerit ut nisi id bibendum. Aliquam vitae augue arcu. Vivamus nec consectetur lacus, vitae venenatis velit. Vivamus lobortis maximus lorem, vel ornare leo viverra sollicitudin. Praesent urna purus, mollis quis diam vel, varius viverra est. Aenean magna sapien, tincidunt sed consectetur nec,  </h6>
            </div>
          </div>
          <h6 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisi velit. Quisque faucibus erat at tempus commodo. Integer ac pretium elit. Nullam sodales aliquam ipsum, eu faucibus diam sagittis in. Morbi quis erat neque. Nam commodo metus et ipsum consectetur aliquam. Vestibulum eget imperdiet nulla. Morbi nulla nisl, hendrerit consequat ex nec, ornare feugiat nunc. Proin fringilla eu est sollicitudin rutrum. Suspendisse suscipit placerat enim sit amet pharetra. Maecenas euismod euismod tortor, maximus consequat nibh convallis ut.

            Donec neque risus, laoreet quis ullamcorper eget, malesuada pellentesque velit. Suspendisse vel neque egestas, placerat turpis quis, ultrices arcu. Suspendisse in laoreet nulla. Donec vel malesuada nulla. Mauris ac commodo est, in ullamcorper purus. In neque quam, interdum at fermentum mollis, consectetur at nisl. Praesent nec consequat neque, ut volutpat libero. Quisque mauris sem, dignissim sed porttitor ac, molestie ac enim. Aenean hendrerit ut nisi id bibendum. Aliquam vitae augue arcu. Vivamus nec consectetur lacus, vitae venenatis velit. Vivamus lobortis maximus lorem, vel ornare leo viverra sollicitudin. Praesent urna purus, mollis quis diam vel, varius viverra est. Aenean magna sapien, tincidunt sed consectetur nec, iaculis sit amet magna. Suspendisse massa orci, vulputate id neque quis, semper varius nibh. Donec id dictum turpis, vel tempus elit.</h6>

          <h6 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisi velit. Quisque faucibus erat at tempus commodo. Integer ac pretium elit. Nullam sodales aliquam ipsum, eu faucibus diam sagittis in. Morbi quis erat neque. Nam commodo metus et ipsum consectetur aliquam. Vestibulum eget imperdiet nulla. Morbi nulla nisl, hendrerit consequat ex nec, ornare feugiat nunc. Proin fringilla eu est sollicitudin rutrum. Suspendisse suscipit placerat enim sit amet pharetra. Maecenas euismod euismod tortor, maximus consequat nibh convallis ut.

            Donec neque risus, laoreet quis ullamcorper eget, malesuada pellentesque velit. Suspendisse vel neque egestas, placerat turpis quis, ultrices arcu. Suspendisse in laoreet nulla. Donec vel malesuada nulla. Mauris ac commodo est, in ullamcorper purus. In neque quam, interdum at fermentum mollis, consectetur at nisl. Praesent nec consequat neque, ut volutpat libero. Quisque mauris sem, dignissim sed porttitor ac, molestie ac enim. Aenean hendrerit ut nisi id bibendum. Aliquam vitae augue arcu. Vivamus nec consectetur lacus, vitae venenatis velit. Vivamus lobortis maximus lorem, vel ornare leo viverra sollicitudin. Praesent urna purus, mollis quis diam vel, varius viverra est. Aenean magna sapien, tincidunt sed consectetur nec, iaculis sit amet magna. Suspendisse massa orci, vulputate id neque quis, semper varius nibh. Donec id dictum turpis, vel tempus elit.</h6>

        </div>
      </Container>
    </div>
  )
}

export default Company