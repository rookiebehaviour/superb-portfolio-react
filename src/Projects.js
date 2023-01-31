import React from "react";
import "./Projects.css";
import MusicWebsite from "./music-website.png";
import Dictionary from "./React-dictionary-app.png";
import WeatherApp from "./react-weather-app.png";
import WorldClock from "./world-clock.png";
import FileSharing1 from "./file-sharing-microservice.png";
import FileSharing2 from "./file-sharing-microservice-success.png";

export default function Projects() {
  return (
    <div className="Projects">
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="row mb-3">
          <div className="col-sm-6 ps-2 pe-2 pb-2 projects">
            <img
              src={MusicWebsite}
              alt="Music website about Beyonce"
              title="Music Website"
              className="img-fluid shadow"
            />
          </div>
          <div className="col-sm-6 p-4">
            <h3>Music Website</h3>
            <p>Professional website on Beyonce and her music.</p>
            <div>
              <a
                href="https://dainty-pika-d573ca.netlify.app"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 me-2 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Launch
              </a>
              <a
                href="https://github.com/rookiebehaviour/music-landing-page"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6 p-4 projects">
            <h3>Dictionary App</h3>
            <p>Cool dictionary app made with React and two API's.</p>
            <div>
              <a
                href="https://cosmic-hamster-fcce7d.netlify.app"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 me-2 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Launch
              </a>
              <a
                href="https://github.com/rookiebehaviour/react-dictionary-app"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </div>
          <div className="col-sm-6 p-2 projects">
            <img
              src={Dictionary}
              alt="React dictionary app"
              title="React dictionary app"
              className="img-fluid shadow"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-6 p-2 projects">
            <img
              src={WeatherApp}
              alt="React weather app"
              title="React weather app"
              className="img-fluid shadow"
            />
          </div>
          <div className="col-sm-6 p-4 projects">
            <h3>Weather App</h3>
            <p>React Weather app built with open weather API and JS.</p>
            <div>
              <a
                href="https://idyllic-stroopwafel-4460b6.netlify.app"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 me-2 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Launch
              </a>
              <a
                href="https://github.com/rookiebehaviour/awesome-weather-app"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6 p-4 projects">
            <h3>World Clock App</h3>
            <p>Neat world clock that shows time utilizing JS and momentjs.</p>
            <div>
              <a
                href="https://candid-rugelach-253e35.netlify.app"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 me-2 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Launch
              </a>
              <a
                href="https://github.com/rookiebehaviour/world-clock"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </div>
          <div className="col-sm-6 projects">
            <img
              src={WorldClock}
              alt="World clock app"
              title="World clock app"
              className="img-fluid shadow"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6 p-2 projects">
            <img
              src={FileSharing2}
              alt="File sharing app"
              title="File sharing app"
              className="img-fluid shadow"
            />
          </div>
          <div className="col-sm-6 p-4 projects">
            <h3>File Sharing Microservice</h3>
            <p>
              This JS microservice uses MongoDB, Mongoose, Express, Bcrypt, and
              NodeJS.
            </p>
            <div>
              <a
                href="https://github.com/rookiebehaviour/file-share"
                className="btn btn-secondary rounded-pill border border-2 pt-2 pb-2 ps-5 pe-5 mt-3 shadow"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
