import React from 'react';
import './css/style.min.css';
import { Category } from './components/Category';
import { Pages } from './pages/Pages';
import { Search } from './components/Search';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Category />
      <Pages />
    </>
  );
}

export default App;
