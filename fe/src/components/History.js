import React from 'react'
import './SCSS/History.scss'
import Navbar from './Navbar'
import { GiTriforce } from 'react-icons/gi'

const History = () => {
    return (
        <div className='History'>
            <Navbar />
            <h1>THE HISTORY OF HYRULE</h1>
            <section className='beginning'>
                <h2> <GiTriforce style={{ color: 'white' }} /> GOLDEN GODDESSES <GiTriforce style={{ color: 'white' }} /></h2>
                <p>The Golden Goddesses are a recurring trio of deities: Din, Nayru and Farore. They are the chief gods and creators of the land that becomes the Hyrule and the extended world that it resides in.</p>
                <img src={'https://64.media.tumblr.com/bce3d6b1bf3a8bb04127ad84873f35f5/tumblr_mmzm8wRfmM1rotlu5o1_400.png'} alt='Golden Goddesses' />
                <p>It is understood that the Golden Goddesses have always existed, and that they are omnipotent and eternal. Though the Golden Goddesses are the most important gods of the world, they are mentioned by few characters in the series, and knowledge of them has been shown to be limited to the people of Hyrule alone, most races worshiping their own patron deities.
                    <br /> Each of the three Goddesses is associated with a characteristic, common element, and color: Din is power, fire and red; Nayru is wisdom, water and blue; Farore is courage, wind and green. They are the creators of the sacred Triforce that is made up of their three associated characteristics of power, wisdom and courage.
                </p>
                <div className='card-items'>
                    <div className='card'>
                        <img className='card-img-top' src={'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/2f/TLoZ_Series_Crest_of_Din_Symbol.png'} alt='Din' />
                        <div className='card-body'>
                            <h3 className='card-title'>DIN</h3>
                            <p>Goddes of Power.
                                <br /> Din created the bare earth and shaped the featureless land, forming its topography.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img-top' src={'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/08/TLoZ_Series_Crest_of_Nayru_Symbol.png'} alt='Din' />
                        <div className='card-body'>
                            <h3 className='card-title'>NAYRU</h3>
                            <p>Goddes of Wisdom.
                                <br /> Nayru is the source of the laws that govern the realm in which Hyrule exists.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img-top' src={'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/bc/TLoZ_Series_Crest_of_Farore_Symbol.png'} alt='Din' />
                        <div className='card-body'>
                            <h3 className='card-title'>FARORE</h3>
                            <p>Goddes of Courage.
                                <br /> Farore is the source of all life that exists within the Hyrulean realm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Triforce'>
                <h2><GiTriforce /> The Triforce <GiTriforce /></h2>
                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/d/d2/ALttP_Triforce_Artwork.png'} alt='Triforce 1' />
                <p>The Triforce, also known as the Golden Power, the Power of the Chosen One, the Absolute Power, and the Ultimate Power, is a sacred golden relic left behind by the Golden Goddesses, Din, Nayru, and Farore, once they finished transforming the Emptiness into the land which came to be known as Hyrule.
                    <br /> The Goddess Hylia was tasked with the protection of this world and the Triforce. After Hylia ceases to exist as a goddess, the Triforce is protected by the Royal Family of Hyrule, the sages, and the Sheikah.
                </p>
                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/9/9c/TLoZ_Series_Triforce_Artwork.png'} alt='Triforce 2' />
                <p> The Triforce consists of three separate triangles: the Triforce of Power is always depicted as the top piece, with the Triforce of Courage represented by the right piece, and the Triforce of Wisdom represented by the left piece.
                    <br /> Although the Triforce was created by gods, it can never be used by such, possibly the goddesses' way of giving hope to all the mortal beings in Hyrule.
                </p>
            </section>
            <section className='Kingdom'>
                <h2><GiTriforce /> HYRULE KINGDOM <GiTriforce /></h2>
            </section>
        </div>
    )
}

export default History