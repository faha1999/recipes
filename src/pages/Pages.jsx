import React from 'react';
import { Home } from './Home';
import { Cuisine } from './Cuisine';
import { Searched } from './Searched';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Recipes } from './Recipes';
import { AnimatePresence } from 'framer-motion';

export const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/Searched/:search" element={<Searched />} />
        <Route path="/recipes/:name" element={<Recipes />} />
      </Routes>
    </AnimatePresence>
  );
};
