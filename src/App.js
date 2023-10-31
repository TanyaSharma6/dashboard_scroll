import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import RightBox from './components/RightBox';


const App = () => {
  return (
    <BrowserRouter>
    
    <div className='row'>
      <div className='col-sm-2'>
        <Sidebar />
      </div>
     
      <div className='col-sm-7'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      
        </div>
        
        <div className='col-sm-3 right-df'>
        <h5 className='ml-3'><strong>Artists</strong>&nbsp;  Photographers</h5>
          <RightBox />
          
         </div> 
      </div> 
    </BrowserRouter>
  );
};

export default App;