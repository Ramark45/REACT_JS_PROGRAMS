import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import MyResume from './Resume/ResumeSideBody';
// import App from './App' 
// import Palindrome from './PalindromNumber';
// import OddEvenNumber from './OddEvenNumber';
import Hooks from './Hooks';
import HooksObject from './HooksObject';
// import MainComponent from './MainComponent';
import Context from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <OddEvenNumber/>
    <Palindrome/>
    <App/> */}
    <Hooks/>
    <HooksObject/>
    <Context/>
    {/* <MyResume/> */}
  </React.StrictMode>
);
reportWebVitals();
