import React from "react";

function Banner() {
  return (
    <div>
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
    </div>
  );
}

export default Banner;
