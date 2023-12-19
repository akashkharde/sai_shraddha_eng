import './App.css';
import './Theme/Assets/Styles/Ui.css';
import './Theme/Assets/Styles/Global.css'
import './Theme/Assets/Styles/Responsive.css'
import Header from './Theme/Common/Header';
import Button from './Theme/Ui/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Theme/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;