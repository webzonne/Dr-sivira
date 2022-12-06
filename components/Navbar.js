import React from 'react';
import Image from 'next/image';
import logoNav from '../assets/image/logo-nav.jpg';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <div className='logo-nav-content'>
            <Image src={logoNav} alt='logo-nav'/>
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Inicio">
                INICIO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">
              CONÓCENOS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contacto">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}
