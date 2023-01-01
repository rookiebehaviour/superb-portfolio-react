import React from "react";
import "./Home.css";
import ProfilePic from "./Profile-pic.jpg";

export default function Home() {
  return (
    <div className="Home">
      <section id="home">
        <div className="two-column-grid">
          <div className="navbar-title-grid">
            <nav class="navbar navbar-expand-md bg-body-transparent navbar justify-content-end">
              <div class="container-fluid">
                <a class="navbar-brand text-light" href="/">
                  J.M.
                </a>
                <button
                  class="navbar-toggler bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a
                      class="nav-link text-light active"
                      aria-current="page"
                      href="#bio"
                    >
                      Bio
                    </a>
                    <a class="nav-link text-light" href="#projects">
                      Projects
                    </a>
                    <a class="nav-link text-light" href="#contact">
                      Contact
                    </a>
                    <a
                      className="nav-link text-light"
                      href="https://rxresu.me/jmason.tta/frontend-developer-resume"
                      target="_blank"
                      rel="noreferrer"
                      title="Jacqueline's resume"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            <h1 className="name">Jacqueline Mason</h1>
            <h2 className="title animate__animated animate__rotateInDownLeft">
              • Front-end Developer •
            </h2>
          </div>

          <div className="pic">
            <img
              src={ProfilePic}
              alt="Jacqueline"
              className="img-fluid profile-pic"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
