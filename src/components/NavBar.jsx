import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/App.css';

export const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const isPath = (pathName) => {
        return pathName === location.pathname;
    };

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            {/* Background image section */}
            <div className="background">
                <section className="hero is-medium">
                    {/* You can add content here if needed */}
                </section>
            </div>

            {/* Navbar below the image */}
            <div className='navbar-sticky'>
                <div className='has-background-black-bis center-navbar'>
                    <div className={`navbar-container ${isActive ? "active-background" : ""}`}>
                        <nav className="navbar has-background-black-bis">
                            <div className="container">
                                <div className="navbar-brand">
                                    <span
                                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                                        data-target="navbarMenuHeroB"
                                        onClick={toggleNavbar}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navbarMenuHeroB" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                                    <div className="navbar-end">
                                        <Link to="/" className={`navbar-item ${isPath("/") ? "is-active" : ""}`}>Home</Link>
                                        <Link to="/mannschaft" className={`navbar-item ${isPath("/mannschaft") ? "is-active" : ""}`}>Mannschaft</Link>
                                        <Link to="/spielplan" className={`navbar-item ${isPath("/spielplan") ? "is-active" : ""}`}>Spielplan</Link>
                                        <Link to="/sponsoren" className={`navbar-item ${isPath("/sponsoren") ? "is-active" : ""}`}>Sponsoren</Link>
                                        <Link to="/mitgliedwerden" className={`navbar-item ${isPath("/mitgliedwerden") ? "is-active" : ""}`}>Mitglied werden</Link>
                                        <Link to="/kontakt" className={`navbar-item ${isPath("/kontakt") ? "is-active" : ""}`}>Kontakt</Link>
                                        <Link to="/vermietung" className={`navbar-item ${isPath("/vermietung") ? "is-active" : ""}`}>Vermietung</Link>
                                        <Link to="/historie" className={`navbar-item ${isPath("/historie") ? "is-active" : ""}}`}>Historie
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};