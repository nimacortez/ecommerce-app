import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from "./context/shop-context";

fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(json=>console.log(json))
.catch(error => console.log('ERROR'))

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
    <Router> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>

    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
