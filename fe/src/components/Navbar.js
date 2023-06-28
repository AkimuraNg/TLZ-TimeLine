import React, { useEffect, useState } from 'react'
import './SCSS/Navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../images/logo.png'

const Navbar = () => {
    const { pathname } = useLocation();

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavItemClick = () => {
        setIsNavbarOpen(false);
    };

    useEffect(() => {
        if (pathname !== '/') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    if (pathname === '/') return null;


    return (
        <nav className={`navbar navbar-expand-lg sticky-top bg-body-tertiary ${isNavbarOpen ? 'navbar-open' : ''}`} data-bs-theme='dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/home'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <button className={`navbar-toggler ${isNavbarOpen ? 'collapsed' : ''}`} type='button' onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                    aria-controls='navbarSupportedContent'
                    aria-expanded={isNavbarOpen}
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id='navbarSupportedContent'>
                    <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                        <li className='nav-item'>
                            <Link className='nav-link' aria-current='page' to='/home' onClick={handleNavItemClick}>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/history' onClick={handleNavItemClick}>HISTORY</Link>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>CHARACTERS</Link>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link className='dropdown-item' to='/characters' onClick={handleNavItemClick}>MAIN CHARACTERS</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='/npcs' onClick={handleNavItemClick}>NPC</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/games' onClick={handleNavItemClick}>GAMES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/timeline' onClick={handleNavItemClick}>TIMELINE</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar