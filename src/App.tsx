import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Tracker from './components/Tracker/Tracker';
import NotFound from './components/NotFound/NotFound';
import MainLayout from './components/MainLayout.tsx/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='tracker' element={<Tracker />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
