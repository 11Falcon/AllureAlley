import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import ToastModal from "./toastModal";

export default function Header() {
  return (
    <div>
      <header className='card'>
        {/* <h2 className="logo">Logo</h2> */}
        <nav className="navigation">
          <a href="https://www.youtube.com/">Home</a>
          <a href="https://www.youtube.com/">Start</a>
          <a href="https://www.youtube.com/">Contact Us</a>
          <a href="https://www.youtube.com/">Readme</a>
          <button className="ash">Falcon</button>
        </nav>
      </header>
      <ToastModal/>
    </div>
  );
}
