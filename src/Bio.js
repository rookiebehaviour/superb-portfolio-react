import React from "react";
import "./Bio.css";
import ReactCertificate from "./Advanced-react-development-certificate.png";
import FrontEndCertificate from "./Front-end-developer-certificate.png";

export default function Bio() {
  return (
    <div className="Bio">
      <section id="bio">
        <h2 class="section-title">About Me</h2>
        <p>
          Welcome to my portfolio! The online community knows me as Rookie
          Behaviour, or simply... Rookie. No, it has nothing to do with my
          coding skills, but my gaming skills 😂. I'm a mother, tech guru, and
          console nerd that loves PlayStation gaming! When I'm not coding,
          that's probably what I'm doing.
          <br />
          <br />
          I started my coding journey in 2020 where I taught myself Software
          Development with freeCodeCamp online. I recently graduated from
          SheCodes where I received my Front-end Development Certification.
          <br />
          <br />
        </p>
        <p class="section-title">Regularly Used</p>
        <div class="about-icons">
          <i class="fa-brands fa-windows" title="windows"></i>
          <i class="fa-brands fa-square-js" title="JavaScript"></i>
          <i class="fa-brands fa-react" title="React"></i>
          <i class="fa-brands fa-bootstrap" title="Bootstrap"></i>
          <i class="fa-brands fa-figma" title="Figma"></i>
          <i class="fa-brands fa-invision" title="Invision"></i>
          <i class="fa-brands fa-npm" title="npm"></i>
          <i class="fa-brands fa-node-js" title="Node.js"></i>
        </div>
        <p>
          And YES!... <br />
          I'm corny and like to showcase my certifications 😂
        </p>
        <div class="certifications">
          <img
            class="certification"
            src={FrontEndCertificate}
            alt="Front-end development certification"
          />
          <img
            className="certification"
            src={ReactCertificate}
            alt="Advanced React certification"
          />
        </div>
      </section>
    </div>
  );
}
