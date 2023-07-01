import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          <a href="https://www.npmjs.com/package/create-czechitas-app">
            create-czechitas-app
          </a>
          .
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
