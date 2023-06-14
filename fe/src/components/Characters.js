import React from 'react'
import './SCSS/Characters.scss'
import Navbar from './Navbar'
import Link from '../images/link.png'
import Zelda from '../images/zelda.png'
import Ganon from '../images/ganon.png'

const Characters = () => {
    return (
        <div className='CharactersPage'>
            <Navbar />
            <h1>Characters Introduction</h1>
            <section className='Link'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h3>Link</h3>
                        <p>The main protagonist of the series</p>
                    </div>
                    <div className='col-sm-6'>
                        <img src={Link} alt='Link' />
                    </div>
                </div>
            </section>
            <section className='Zelda'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h3>Princess Zelda</h3>
                        <p>The eponymous character of the series</p>
                    </div>
                    <div className='col-sm-6'>
                        <img src={Zelda} alt='Zelda' />
                    </div>
                </div>
            </section>
            <section className='Ganon'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h3>Ganondorf Dragmire</h3>
                        <p>The main antagonist of the series</p>
                    </div>
                    <div className='col-sm-6'>
                        <img src={Ganon} alt='Ganon' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Characters