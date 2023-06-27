import React from 'react'
import './SCSS/History.scss'
import { GiTriforce } from 'react-icons/gi'

const History = () => {
    return (
        <div className='History' data-aos='fade-in' data-aos-duration='2000'>
            <h1>THE HISTORY OF HYRULE</h1>
            <section className='beginning' data-aos='fade-in' data-aos-delay='500' data-aos-duration='3000'>
                <h2> <GiTriforce/> GOLDEN GODDESSES <GiTriforce/></h2>
                <p>The Golden Goddesses are a recurring trio of deities: Din, Nayru and Farore. They are the chief gods and creators of the land that becomes the Hyrule and the extended world that it resides in.</p>
                <img src={'https://64.media.tumblr.com/bce3d6b1bf3a8bb04127ad84873f35f5/tumblr_mmzm8wRfmM1rotlu5o1_400.png'} alt='Golden Goddesses' />
                <p>It is understood that the Golden Goddesses have always existed, and that they are omnipotent and eternal. Though the Golden Goddesses are the most important gods of the world, they are mentioned by few characters in the series, and knowledge of them has been shown to be limited to the people of Hyrule alone, most races worshiping their own patron deities.
                    <br /> Each of the three Goddesses is associated with a characteristic, common element, and color: Din is power, fire and red; Nayru is wisdom, water and blue; Farore is courage, wind and green. They are the creators of the sacred Triforce that is made up of their three associated characteristics of power, wisdom and courage.
                </p>
                <div className='card-items'>
                    <div className='card' data-aos='fade-up' data-aos-delay='600' data-aos-duration='1500'>
                        <img className='card-img-top' src={'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/2f/TLoZ_Series_Crest_of_Din_Symbol.png'} alt='Din' />
                        <div className='card-body'>
                            <h3 className='card-title'>DIN</h3>
                            <p>Goddess of Power.
                                <br /> Din created the bare earth and shaped the featureless land, forming its topography.
                            </p>
                        </div>
                    </div>
                    <div className='card' data-aos='fade-up' data-aos-delay='900' data-aos-duration='1500'>
                        <img className='card-img-top' src={'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/08/TLoZ_Series_Crest_of_Nayru_Symbol.png'} alt='Din' />
                        <div className='card-body'>
                            <h3 className='card-title'>NAYRU</h3>
                            <p>Goddess of Wisdom.
                                <br /> Nayru is the source of the laws that govern the realm in which Hyrule exists.
                            </p>
                        </div>
                    </div>
                    <div className='card' data-aos='fade-up' data-aos-delay='1200' data-aos-duration='1500'>
                        <img className='card-img-top' src={'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/bc/TLoZ_Series_Crest_of_Farore_Symbol.png'} alt='Din' />
                        <div className='card-body'>
                            <h3 className='card-title'>FARORE</h3>
                            <p>Goddess of Courage.
                                <br /> Farore is the source of all life that exists within the Hyrulean realm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Triforce' data-aos='fade-in' data-aos-delay='1500' data-aos-duration='3000'>
                <h2><GiTriforce /> THE TRIFORCE <GiTriforce /></h2>
                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/d/d2/ALttP_Triforce_Artwork.png'} alt='Triforce 1' />
                <p>The Triforce, also known as the Golden Power, the Power of the Chosen One, the Absolute Power, and the Ultimate Power, is a sacred golden relic left behind by the Golden Goddesses, Din, Nayru, and Farore, once they finished transforming the Emptiness into the land which came to be known as Hyrule. The Goddess Hylia was tasked with the protection of this world and the Triforce. After Hylia ceases to exist as a goddess, the Triforce is protected by the Royal Family of Hyrule, the sages, and the Sheikah.
                </p>
                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/9/9c/TLoZ_Series_Triforce_Artwork.png'} alt='Triforce 2' />
                <p> The Triforce consists of three separate triangles: the Triforce of Power is always depicted as the top piece, with the Triforce of Courage represented by the right piece, and the Triforce of Wisdom represented by the left piece. Although the Triforce was created by gods, it can never be used by such, possibly the goddesses' way of giving hope to all the mortal beings in Hyrule.
                </p>
            </section>
            <section className='Kingdom' data-aos='fade-in' data-aos-delay='1500' data-aos-duration='3000'>
                <h2><GiTriforce /> HYRULE KINGDOM <GiTriforce /></h2>
                <p>Hyrule, also known as the Land of the Gods, and the Lesser Kingdom of Hyrule, is the name of the land that serves as the iconic setting for a majority of the games in the Zelda series.
                    It is usually depicted as a beautiful and prosperous land blessed with deep forests, tall mountains, vast lakes, a barren desert, great cities, villages, and many ancient temples hidden throughout.
                </p>
                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/7/7e/BotW_Hyrule_Sunset_Artwork.jpg'} alt='Hyrule Kingdom BoTW' />
                <p>
                    The kingdom has its own long and unique history with many wars and conflicts over the Triforce, deities, legendary relics, historical heroes and villains. It is connected to a variety of different realms or universes via magical artifacts and portals, including but not limited to the Sacred Realm, the Twilight Realm, its own direct parallel world Lorule and, to a lesser extent, Termina.
                </p>
                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/4/4b/OoT3D_Hyrule_Field_Artwork_2.png'} alt='Hyrule Kingdom OoT' />
                <p>
                    The story of the Sacred Realm and the Triforce would shape Hyrule's future in the centuries that followed its establishment, becoming the basis of its providence. It is also home to a multitude of different races and tribes, each inhabiting a different part of the country and sometimes protecting its legendary relics and guarding its temples.
                </p>
            </section>
        </div>
    )
}

export default History