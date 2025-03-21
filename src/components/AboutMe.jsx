import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutMe = () => {
  return (
    <motion.section
      className="container my-5"
      id="about"
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      animate={{ opacity: 1, y: 0 }} // Move to normal position
      transition={{ duration: 3 }} // Smooth animation
    >
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row align-items-center">
        <motion.div
          className="col-md-4 text-center mb-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
        >
          <img
            src='/bob.jpg' // Replace with your image
            alt="Your Name"
            className="rounded-circle img-fluid"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          className="col-md-8"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <p className="about">
            Hi! I'm <strong>Krishna Manas Kondabala</strong>, a passionate software developer
            skilled in Python, React and SQL. I love building scalable
            web applications and continuously learning new technologies.
            When I'm not coding, I enjoy reading tech blogs and contributing to
            open-source projects.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
