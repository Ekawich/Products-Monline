import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/products';
import Product from './pages/product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Products />} />
          <Route path={'product'} element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
