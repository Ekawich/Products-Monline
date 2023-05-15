import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  const [productId, setProductId] = useState('')

  // const selectProduct = (sku) => {
  //   window.location.pathname('product/' + productId)
  // }

  return (
    <div className="App">
      <div className='container'>
        <div className='py-5'>
          <BrowserRouter>
            <Routes>
              <Route index element={<Products />} />
              <Route path={'product/' + productId} element={<Product />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
