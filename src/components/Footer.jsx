import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>Connect with me:</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/Krishnakondabala"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-manas/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="mailto:krishnamanas.kk@gmail.com"
            className="mx-2"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
        <p className="mt-3">&copy; {new Date().getFullYear()} Krishna Manas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
