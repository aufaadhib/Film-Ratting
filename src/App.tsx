import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Route, Router, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import PopularMovies from './pages/Popular/PopularMovies';

function App() {
  return (
    // <HomePage/>
    <div className='dark:bg-black'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/new&popular' element={<PopularMovies/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
