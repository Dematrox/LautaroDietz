import React from 'react'

export const NavBar = () => {
  return (
    <>
        <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <ul class="navbar">
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#skills-section">Habilidades</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#proyects-section">Proyectos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#contact-section">Contacto</a>
                  </li>
                </ul>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
    </>
  )
}
