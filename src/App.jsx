import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage'
import CalculatorPage from './page/CalculatorPage'
import QuotePage from './page/QuotePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/calculator' element={<CalculatorPage />} />
        <Route path='/quote' element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;