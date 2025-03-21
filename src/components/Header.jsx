import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0 p-3 mb-5">
      <div className="container">
        <a className="navbar-brand fs-2" href="/">Hi <span className="text-danger">Friends</span></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li> 
            <motion.button
              className="btn btn-dark mx-2"
              onClick={() => setDarkMode(!darkMode)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 3 }}
              transition={{ duration: 0.2 }}
            >
              {darkMode ? "☀️" : "🌙"}
            </motion.button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
