import React from 'react';
import './css/style.min.css';
import { Pages } from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import { Category } from './components/Category';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
