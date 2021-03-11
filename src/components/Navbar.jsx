import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <a className="navbar-brand" href="">
        Eligio Becerra
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
          <li className="nav-item"> 
            <a className="nav-link cv-link" href="docs/EligioBecerraZavalaCV.pdf">
              Version PDF <i className="fas fa-file-download"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">
              Visión
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Habilidades
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portafolio">
              Portafolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
