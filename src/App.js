import React from 'react';
import './css/style.min.css';
import { Category } from './components/Category';
import { Pages } from './pages/Pages';
import { Search } from './components/Search';

function App() {
  return (
    <>
      <Search />
      <Category />
      <Pages />
    </>
  );
}

export default App;
