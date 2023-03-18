import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.jpg';
import './index.css';

const Navbar = () => {
  return (
      
    <nav className = "navbar navbar-expand-sm navbar-dark bg-dark">
        <button className = "navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
        </button>
        <div className = "collapse navbar-collapse" id="collapsibleNavId">
            <ul className = "navbar-nav mr-auto">
                <li className = "nav-item">
                    <Link to='/'><img src={Logo} alt='AxiomIO' /></Link>
                </li>
                <li className = "nav-item">
                    <Link className='nav-link' to='/add'>Add </Link>
                </li>
                <li className = "nav-item">
                    <Link className='nav-link' to='/view'>View </Link>
                </li>
                <li className = "nav-item">
                    <Link className='nav-link' to='/todo'>Todo </Link>
                </li>
                <li className = "nav-item">
                    <Link className='nav-link' to='/form'>Form </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
