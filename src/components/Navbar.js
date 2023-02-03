import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='fixed-top'>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand"><i className="fa-sharp fa-solid fa-road"></i>Road Transport Dept</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to='/Authority' className="nav-link"><i className="fa-solid fa-house"></i><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link" href="#"><i className="fa-solid fa-right-from-bracket"></i><b>Log out</b></Link>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
