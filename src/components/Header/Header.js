import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home"><span className="letter">L</span>aptops <span className="letter"> W</span>orld</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav menubar">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/order" className="nav-link">Order</Link>
                        <Link to="/addProducts" className="nav-link">Admin</Link>
                        <Link to="/login" className="nav-link btn btn-outline-danger">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;