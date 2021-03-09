import React from "react";

function Navbar(props) {
  return (
    <nav class="navbar fixed-top navbar-expand-lg">
      <a class="navbar-brand" href="">
        Eligio Becerra
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link cv-link" href="docs/EligioBecerraZavalaCV.pdf">
              Version PDF <i class="fas fa-file-download"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contacto
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              Visión
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              Habilidades
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portafolio">
              Portafolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
