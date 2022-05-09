import React from 'react';
import { Category } from './components/Category';
import './css/style.min.css';
import { Pages } from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

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
