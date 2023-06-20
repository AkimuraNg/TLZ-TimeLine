import React from 'react'
import './SCSS/Footer.scss'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const { pathname } = useLocation();
    if (pathname === '/') return null;
    return (
        <div>
            <footer className='footer'>
                <h5>For more information, please visit:</h5>
                <div className='links'>
                    <Link to='https://zelda.fandom.com/wiki/Main_Page'>ZELDA FANDOM</Link>
                    <Link to='https://zeldawiki.wiki/wiki/Main_Page'>ZELDA WIKI</Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer