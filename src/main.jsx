import { createRoot } from 'react-dom/client';

import './index.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './pages/home';
import Info from './pages/info';
import December2025 from './pages/2025_12';
import January2026 from './pages/2026_01';
import February2026 from './pages/2026_02';
import March2026 from './pages/2026_03';
import April2026 from './pages/2026_04';
import May2026 from './pages/2026_05';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Routes */}
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/info' element={<Info/>} />
      <Route exact path='/2025dec' element={<December2025/>} />
      <Route exact path='/2026jan' element={<January2026/>} />
      <Route exact path='/2026feb' element={<February2026/>} />
      <Route exact path='/2026mar' element={<March2026/>} />
      <Route exact path='/2026apr' element={<April2026/>} />
      <Route exact path='/2026may' element={<May2026/>} />
    </Routes>
  </BrowserRouter>
)