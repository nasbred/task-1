import React from 'react';
import './css/App.css';
import './css/Side.css';
import './css/Grid.css';
import './css/columnContainer.css';
import Column2  from './Column2';
import Column1 from './Column1';
import Header from './Header';

export default function App() {
  return (
    <div className="App">
      <div className = "Side"></div>
      <div className="Grid">
        <Header/>
        <div className="columnContainer">
          <Column1/>
          <Column2/>
        </div>
      </div>
    </div>
  );
}