import React from "react";
import "./style.scss";
import projectImg from "./assets/img/user1.png";
function App() {
  return (
    <>
      <input type="checkbox" className="dark-mode-check" id="darkmode" />
      <div className="wrapper">
        <header className="flex primary-header">
          <label htmlFor="darkmode">
            <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
          </label>
          {/* <!-- Header --> */}

          <div className="logo flex">
            <div>
              <h1>Rohith Reddy Gujja</h1>
            </div>
            <div>
              <h1 className="line">Soft. Engineer</h1>
            </div>
          </div>
          <div className="right">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="menu-icon">
              <i className="fa-solid fa-bars"></i>
            </label>

            <ul className="flex navigation">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about me">About me</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>

        {/* <!-- Hero --> */}
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

        {/* <!-- Banner --> */}
        <section className="section2">
          <div className="info-container flex">
            <div className="info-lists flex">
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>5 +</h5>
                  <p>Projects</p>
                </span>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>1 + year</h5>
                  <p>Coding Experience</p>
                </span>
              </div>
              <div className="info-divider"></div>
              <div className="info-content flex">
                <div className="icon-container flex">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h5>IT</h5>
                  <p>Graduate</p>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Skills --> */}
        <section className="section3" id="skills">
          <div className="skills-container flex">
            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>

            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>
            <div className="flex">
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>
          </div>
        </section>
        {/* <!-- Projects --> */}
        <section className="section4 flex" id="projects">
          <h2 className="title">My Recent Work</h2>
          <div className="projects-container grid">
            <div className="project-card">
              <div className="top">
                <img src={projectImg} alt="" />
              </div>
              <div className="buttom">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22 April 2023</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={projectImg} alt="" />
              </div>
              <div className="buttom">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22 April 2023</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={projectImg} alt="" />
              </div>
              <div className="buttom">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22 April 2023</p>
              </div>
            </div>

            <div className="project-card">
              <div className="top">
                <img src={projectImg} alt="" />
              </div>
              <div className="buttom">
                <div className="flex">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-html5"></i>
                </div>
                <p>Portfolio with React</p>
                <p>22 April 2023</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Me --> */}
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
        {/* <!-- Contact --> */}
        <section className="section6 flex" id="contact">
          <h2 className="title">Get in Touch</h2>
          <div className="socials flex">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>

          <h3 className="title">OR</h3>

          <div className="email-section flex">
            <div className="email flex">
              <p>me@googl.com</p>
              <a href="mailto:yoremail@gmail.com">
                <div className="send">
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Footer --> */}
        <footer>
          <div className="footer-container flex">
            <div className="flex links">
              <h3>Links</h3>
              <ul className="flex">
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About Me</a>
                </li>
              </ul>
            </div>
            <div className="flex links">
              <h3>Socials</h3>
              <ul className="flex">
                <li>
                  <a href="">Linkedin</a>
                </li>
                <li>
                  <a href="">Youtube</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">&copy; All Right Reserved.</div>
        </footer>
      </div>
    </>
  );
}

export default App;
