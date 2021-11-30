import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import Details from'./pages/Details/Details'
import { BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    );
}
