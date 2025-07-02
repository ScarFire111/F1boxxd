import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Homepage from './Pages/Homepage';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/clothes' element={<ShopCategory category="Clothes" />} />
          <Route path='/car_Models' element={<ShopCategory category="Car_Models" />} />
          <Route path='/engine_Models' element={<ShopCategory category="Engine_Models" />} />
          <Route path='/posters' element={<ShopCategory category="Posters" />} />
          <Route path='/product/:ProductId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<LoginSignUp />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path="/createaccount" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;


