import React from 'react';
import ListaDeUsuarios from './components/ListaDeUsuarios';
import './Global.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Desafio</h1>
      </header>
      <div className='app-campo'>
      <ListaDeUsuarios />
      </div>
    </div>
  );
}

export default App;
