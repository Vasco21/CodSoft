import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-Container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://facebook.com/eddie.vasco/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/vasco-motlalepule-eti-154259193/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/vascoeti123/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCQmetPui686m6OoX_Eb2D8Q">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/Qvary34">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-name">
            <span className="primary-name">
              {" "}
              Hello, I'M <span className="highlighted-text">Vasco Eti</span>
            </span>
          </div>
          <div className="profile-details-role">
              <span className="primary-text">
                  {" "}
                  <h1>
                      {" "}
                      <Typical
                      loop={Infinity}
                      steps={[
                          "Software Developer 🔴",
                          3000,
                          "Data Scientist 💻",
                          3000,
                      ]}
                      />
                  </h1>
                  <span className="profile-role-tagline">
                    Knack of building application with front and back end operation!!!
                  </span>
              </span>
          </div>
          <div className="profile-options">
          <a href="Cover Letter Eti's.docx" download="Cover Letter Eti's.docx">
            <button className="btn primary-btn">
              Hire Me
            </button></a>
            <a href="Vasco.pdf" download="Vasco Vasco.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </div>
    </div>
  );
}
