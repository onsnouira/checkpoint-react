import './App.css';
import React from 'react'
import MyNavbar from './NavBarr.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from'./Cards.js';
import Heading from './Heading.js';
function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Heading/>
      <Cards/>
    </div>
  );
}

export default App;
