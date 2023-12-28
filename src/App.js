import './App.css';
import './Theme/Assets/Styles/Ui.css';
import './Theme/Assets/Styles/Global.css'
import './Theme/Assets/Styles/Responsive.css'
import Header from './Theme/Common/Header';
import Button from './Theme/Ui/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Theme/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Company from './Theme/Company';
import Products from './Theme/Products';
import Purchase from './Theme/Purchase';
import Blog from './Theme/Blog';
import ContactUs from './Theme/ContactUs';
import PageNotFound from './Theme/PageNotFound';
import Footer from './Theme/Common/Footer';
import { useEffect } from 'react';
import Quality from './Theme/SubComponents/Quality';
import Services from './Theme/SubComponents/Services';
import WhyUs from './Theme/SubComponents/WhyUs';
import MissionVission from './Theme/SubComponents/MissionVission';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/company/quality' element={<Quality />} />
        <Route path='/company/services' element={<Services />} />
        <Route path='/company/why-us' element={<WhyUs />} />
        <Route path='/company/mission-vision' element={<MissionVission />} />
        <Route path='/product' element={<Products />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;