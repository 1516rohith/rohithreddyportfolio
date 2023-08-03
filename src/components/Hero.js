import React from "react";
import projectImg from "../assets/img/project.png";
function Hero() {
  return (
    <div>
      <section className="section1" id="header">
        <div className="hero grid">
          <div className="left flex">
            <div className="flex">
              <div className="name">Hi, I am Rohith Reddy Gujja</div>
              <div className="tag">Software Engineer</div>
              <div className="sub-tag">I love coding and teach other ...</div>
              <button>
                <a href="./assets/img/user1.png" download>
                  Download CV
                  <i className="fa-solid fa-download"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img src={projectImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
