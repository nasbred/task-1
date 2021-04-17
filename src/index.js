import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

// function tick(){
//   const elem = (
//     <div>
//       <h1>Hello</h1>
//       <h2>Time is { new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     elem, document.getElementById('root')
//   );
// }
// setInterval(tick,1000);
