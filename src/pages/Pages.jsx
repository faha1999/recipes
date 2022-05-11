import React from 'react';
import { Home } from './Home';
import { Cuisine } from './Cuisine';
import { Searched } from './Searched';
import { Routes, Route } from 'react-router-dom';

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/Searched/:search" element={<Searched />} />
    </Routes>
  );
};
