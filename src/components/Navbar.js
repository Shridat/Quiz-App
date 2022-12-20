import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#dc3545"}}>
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1" href="#" style={{color:"white"}}>Quiz Mania</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"white"}}>About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )}
