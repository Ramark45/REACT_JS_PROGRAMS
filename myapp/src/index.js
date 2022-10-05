import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MyResume from './Resume/ResumeSideBody';
import App from './App' 
import Palindrome from './PalindromNumber';
import OddEvenNumber from './OddEvenNumber';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OddEvenNumber/>
    <Palindrome/>
    <App/>
    <MyResume/>
  </React.StrictMode>
);
reportWebVitals();
