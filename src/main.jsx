import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './pages/home';
import Info from './pages/info';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Routes */}
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/info' element={<Info/>} />
    </Routes>
  </BrowserRouter>
)