import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Homepage from './Pages/Homepage';
import SignUp from './Pages/SignUp';
import Footer from './Footer/Footer'
import clothes_banner from './assets/Frontend_Assets/banner_mens.png'
import carModels_banner from './assets/Frontend_Assets/banner_women.png'
import engineModels_banner from './assets/Frontend_Assets/banner_kids.png'
import PaymentCheckout from './Pages/PaymentCheckout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/clothes' element={<ShopCategory banner={clothes_banner} category="clothes" />} />
          <Route path='/car_Models' element={<ShopCategory banner={carModels_banner} category="car_Models" />} />
          <Route path='/engine_Models' element={<ShopCategory banner={engineModels_banner} category="engine_Models" />} />
          <Route path='/posters' element={<ShopCategory banner={clothes_banner} category="posters" />} />
          <Route path='/product/:ProductId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<LoginSignUp />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path="/createaccount" element={<SignUp />} />
          <Route path="/paymentgateaway" element={<PaymentCheckout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;


