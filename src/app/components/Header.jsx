import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div class="logo">
        <img src="/0e36691d40232362e5e738d445944622.png" alt="logo" />
        MakeAdream
      </div>
        <div class="nav-links">
          <div class="navopt">Home</div>
          <div class="navopt">About Us</div>
          <div class="navopt">Pricing</div>
          <div class="navopt">Contact</div>
          <div class="navopt">Blog</div>
        </div>

        <div class="au">
        <div class="person-container">
        <img src="/Person.png"></img>
            <div class="popup-box">
            <a href="#login">Login</a>
            <a href="#signup">Signup</a>
        </div>
        </div>
            <img src="/Search.png"></img>
        </div>
        

    </header>
    
  );
}