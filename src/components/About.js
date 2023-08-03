import React from "react";
import projectImg from "../assets/img/project.png";

function About() {
  return (
    <div>
      <section className="section5 flex">
        <h2 className="title">About Me</h2>
        <div className="about-container flex">
          <div className="left">
            <img src={projectImg} alt="" />
          </div>
          <div className="right flex">
            <h2>Rohith Reddy Gujja</h2>
            <p>
              I am a frontend developer and writer . I love programming,
              reading, writing and speaking. As a software engineer, I enjoy
              using my obsessive attention to detail, my unequivocal love for
              making things that change the world. That's why I like to make
              things that make a difference.
            </p>
            <div className="flex">
              <div className="tag">Interests</div>
              <div className="flex">
                <span>Coding</span>
                <span>Football</span>
                <span>Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
