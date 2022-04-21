import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import Login from './layouts/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <MainLayout /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
