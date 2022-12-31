import React from "react";
import "./Home.css";
import ProfilePic from "./Profile-pic.jpg";

export default function Home() {
  return (
    <div className="Home">
      <nav id="top">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link link-light" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" href="#bio">
              Bio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a
              className="nav-link link-light"
              href="https://rxresu.me/jmason.tta/frontend-developer-resume"
              target="_blank"
              rel="noreferrer"
              title="Jacqueline's resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <section id="home">
        <h1 className="name">Jacqueline Mason</h1>
        <h2 className="title">• Front-end Developer •</h2>
        <div className="pic">
          <img
            src={ProfilePic}
            alt="Jacqueline"
            className="img-fluid profile-pic"
          />
        </div>
      </section>
    </div>
  );
}
