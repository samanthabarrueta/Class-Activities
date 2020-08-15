import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
const divStyle = {
  fontSize: '100px',
  backgroundColor: 'red'  

};

function Header() {
  return (
    <header className="header" style={divStyle}>
    <h1 style={divStyle}>Welcome</h1>
  </header>
  );
}

export default Header;
