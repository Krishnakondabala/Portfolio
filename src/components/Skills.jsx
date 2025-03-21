import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const skills = ["HTML", "CSS","Javascript","Bootstrap","React JS","Python"];

const Skills = () => {
  return (
    <section className="container my-5 text-center" id="skills">
      <h2 className="mb-5">My Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-2 col-4 p-2">
            <div className="border p-3 rounded bg-white text-black">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
