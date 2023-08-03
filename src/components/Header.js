import React from "react";

function Header() {
  return (
    <div>
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
    </div>
  );
}

export default Header;
