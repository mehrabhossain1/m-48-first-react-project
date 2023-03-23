import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="menu">
      <h1>Welcome to my Website</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </nav>
    </div>
  );
};

export default Header;
