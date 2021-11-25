import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export function Navbar(props) {
    return (
<>

 {/* Navbar */}
 <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
<strong><a className="navbar-brand" href="#"><big><big>{props.nameofsite}</big></big></a></strong>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/About">{props.othermsg}</Link> */}
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form> */}
    </div>
  </div>
  <div className="form-check form-check-inline">
  {/* <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label text-success" for="inlineRadio1"><small><b>Green-Mode</b></small></label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label text-danger" for="inlineRadio2"><small><b>Red-Mode</b></small></label> */}
</div>
              <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
              <input className="form-check-input"  type="checkbox" onClick={props.switchbtn} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
              </div>
</nav>
</>
    )
}
Navbar.propTypes= {
  nameofsite: PropTypes.string.isRequired,
  othermsg: PropTypes.string,
}
Navbar.defaultProps ={
  nameofsite: "jadoo",
  othermsg: "about blank"
} 