import React from 'react';

export default function Header() {
  return (
    <div className="App-navbar">
      <div className="App-navbar-logo">
        <a href="#home">
          <h1>Movie<span>Land </span><i className="fas fa-video"></i></h1>
        </a>
      </div>

      <div className="App-navbar-search">
        <input type="text" placeholder="Search for movies..." id="search" className="search" />
      </div>
    </div>
  );
}