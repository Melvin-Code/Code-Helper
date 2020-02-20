import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
function App() {
  return (
    <Router>
    <div className="App">
      
     <WelcomePage/>
    </div>
    </Router>
  );
}


// @media all and (max-width:30em){
//    a.button1{
//     display:block;
//     margin:0.4em auto;
//    }
//   }

export default App;
