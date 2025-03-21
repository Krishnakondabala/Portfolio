import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section className="container text-center my-5">
      <img src="/bob1.jpg" alt="Profile" className="rounded img-fluid mb-5" width="400" />
      <h1 className="fw-bold">Hello, I'm <span className="text-primary">Krishna Manas Kondabala</span></h1>
      <h2 className="text">Frontend Developer | React Enthusiast</h2>
      <p className="lead">
        I love building beautiful and interactive web applications using modern web technologies.
      </p>
      <a href="/Resume 1.pdf" download className="btn btn-primary">
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
