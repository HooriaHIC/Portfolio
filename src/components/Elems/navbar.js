import React from 'react';
import {
  Link
} from "react-router-dom";
import './elems.css';

class Navbar extends React.Component {

  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
  }
}
  
export default Navbar;