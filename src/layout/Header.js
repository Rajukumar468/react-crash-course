import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={itemStyle}>TODO APP</h1>
            <Link to="/" >Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    bacground: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const itemStyle = {
    color: '#2196F3'
  }

export default Header;