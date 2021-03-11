import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

function Navbar(props) {
  const authorLinks = {
    authorName: "Eligio Becerra",
    links: [
      {
        url: "docs/EligioBecerraZavalaCV.pdf",
        customClass: "cv-link",
        text: (
          <Fragment>
            Version PDF <i className="fas fa-file-download"></i>
          </Fragment>
        ),
      },
      {
        url: "#contact",
        customClass: "",
        text: <Fragment>Contacto</Fragment>,
      },
      {
        url: "#skills",
        customClass: "",
        text: <Fragment>Habilidades</Fragment>,
      },
      {
        url: "#portfolio",
        customClass: "",
        text: <Fragment>Portafolio</Fragment>,
      },
    ],
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <a className="navbar-brand" href="">
        {authorLinks.authorName}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          {authorLinks.links.map((link) => {
            return (
              <li key={uuidv4()} className="nav-item">
                <a
                  key={uuidv4()}
                  className={"nav-link " + link.customClass}
                  href={link.url}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
