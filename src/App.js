import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Products from './Products';
import ProductDetails from "./ProductDetails";

function App() {
    return (
      <div>
        <Router>
          <h3>
            <Link to='/'> All Product </Link>
          </h3>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/ProductDetails/:id' element={<ProductDetails />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default App;