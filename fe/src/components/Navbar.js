import React from 'react'
import './SCSS/Navbar.scss'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg sticky-top bg-body-tertiary' data-bs-theme='dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/home'>
                    <img src={Logo} alt='Logo' />
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                    aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                        <li className='nav-item'>
                            <Link className='nav-link' aria-current='page' to='/home'>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/history'>HISTORY</Link>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>CHARACTERS</Link>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link className='dropdown-item' to='/characters'>main characters</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='/npcs'>NPC</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/games'>GAMES</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar