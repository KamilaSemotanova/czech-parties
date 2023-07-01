import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';

const App = () => {
  return (
    <div className="container">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
