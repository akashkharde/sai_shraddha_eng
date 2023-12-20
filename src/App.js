import './App.css';
import './Theme/Assets/Styles/Ui.css';
import './Theme/Assets/Styles/Global.css'
import './Theme/Assets/Styles/Responsive.css'
import Header from './Theme/Common/Header';
import Button from './Theme/Ui/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Theme/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Company from './Theme/Company';
import Products from './Theme/Products';
import Purchase from './Theme/Purchase';
import Blog from './Theme/Blog';
import ContactUs from './Theme/ContactUs';
import PageNotFound from './Theme/PageNotFound';

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/product' element={<Products />} />
          <Route exact path='/purchase' element={<Purchase />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={<ContactUs />} />
          <Route exact path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;