import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src="/0e36691d40232362e5e738d445944622.png" 
        alt="logo" 
        width={35} 
        height={35}
        className="md:mr-2 md:w-[50px] md:h-[50px] md:ml-2"
        />
        <p className="">Make A Dream</p>
      </div>
        <div className="au">
        <div className="person-container">
        <img src="/Person.png"></img>
            <div className="popup-box">
            <a href="#login">Login</a>
            <a href="#signup">Signup</a>
        </div>
        </div>
        </div>
    </header>
  );
}
