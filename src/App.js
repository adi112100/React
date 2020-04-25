import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/" className="navbrand"><h3>Aditya Morankar</h3></NavbarBrand>
          </div>
        </Navbar>
        
      </div>
  );
}

export default App;
