import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer id="contact">
        <div>
          <ul>
            <li>
              <h5>Tools</h5>
            </li>
            <li>VS Code</li>
            <li>Windows 10/11</li>
            <li>Github</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h5>Technologies</h5>
            </li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Responsive Development</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h5>Contact Me</h5>
            </li>
            <li>jmason.tta@gmail.com</li>
            <li>
              <a
                href="https://rxresu.me/jmason.tta/frontend-developer-resume"
                target="_blank"
                rel="noreferrer"
              >
                Download my resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rookiebehaviour"
                title="Github profile"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jacquelinesd/"
                title="LinkedIn profile"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div>
        <a href="#top" className="top-link">
          TOP
        </a>
      </div>
      <div className="source">
        <small>
          This site was built using React by Jacqueline ❤️ Mason and is{" "}
          <a
            href="https://github.com/rookiebehaviour/superb-portfolio-react"
            title="Jacqueline's github portfolio"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>
        </small>
      </div>
    </div>
  );
}
