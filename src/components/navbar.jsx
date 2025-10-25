import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../../img/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto max-w-4xl w-full mx-auto px-8 py-4 rounded-full shadow-2xl flex items-center justify-between border border-neutral-200 dark:border-neutral-800 backdrop-blur-lg"
        style={{
          background: "rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)"
        }}
      >
        <div className="navbar-logo-circle">
          <style jsx>{`
  .navbar-logo-circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(24, 24, 27, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 2px #4f46e5;
    overflow: hidden;
  }
  .navbar-logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`}</style>
              <img src={logo} alt="Logo" className="navbar-logo-img" />
        </div>
           <a href="#hero" className="text-2xl sm:text-3xl font-extrabold select-none tracking-tight drop-shadow-sm mx-auto text-black dark:text-neutral-100">
            The Code Cart
          </a>
        <div className="flex gap-8 items-center">
          <a href="#tools" className="px-6 py-3 rounded-xl font-medium text-black bg-transparent hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900 transition shadow-sm">Tools</a>
          <a href="#how" className="px-6 py-3 rounded-xl font-medium text-black bg-transparent hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900 transition shadow-sm">How to Use</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
