import React from 'react'
import './SCSS/Characters.scss'

const Characters = () => {
    return (
        <div className='CharactersPage'>
            <h1 data-aos='zoom-in-down' data-aos-duration='1000'>MAIN CHARACTERS</h1>
            <section className='Link' data-aos='fade-right' data-aos-delay='1000' data-aos-duration='2000'>
                <div className='row'>
                    <div className='card'>
                        <div className='col-sm-6 col-md-6 col-xl-6'>
                            <div className='card-body'>
                                <h3 className='card-title'>LINK</h3>
                                <p className='card-text'>The main protagonist of the series.
                                    He has appeared across many incarnations throughout the series, usually depicted as an ordinary boy or young man who becomes a legendary hero by saving the world through feats of courage.
                                    <br /> He is often the holder of the Triforce of Courage, a sign of his being chosen by the Golden Goddesses.
                                    He is typically seen wielding a sword and shield, most often the Master Sword and Hylian Shield.
                                    <br />  Specific incarnations of Link may be distinguished by titles. All incarnations of Link possess the spirit of the hero and are thereby destined to fight evil.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-5'>
                            <div className='card-img'>
                                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/1/15/TotK_Link_Artwork.png'} alt='Link' />
                                <span>Tears of the Kingdom Link's artwork.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Zelda' data-aos='fade-down-right' data-aos-delay='2000' data-aos-duration='2000'>
                <div className='row'>
                    <div className='card'>
                        <div className='col-sm-6 col-md-6 col-xl-6'>
                            <div className='card-body'>
                                <h3 className='card-title'>PRINCESS ZELDA</h3>
                                <p className='card-text'>The eponymous character of the series.
                                    Princess Zelda is very beautiful slender and light-skinned, but her age varies between versions and she is always either a child, teen, or young adult.
                                    <br />Princess Zelda is not one individual, rather multiple individuals born into the Royal Family of Hyrule in The Legend of Zelda series.
                                    <br />Most incarnations of Princess Zelda are portrayed as the possessor of the Triforce of Wisdom, and many also possess several magical abilities, such as telepathy, shapeshifting, and the ability to conjure powerful magical blasts.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-5'>
                            <div className='card-img'>
                                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/a/a1/TotK_Zelda_Artwork.png'} alt='Zelda' />
                                <span>Tears of the Kingdom Zelda's artwork.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Ganon' data-aos='fade-up-right' data-aos-delay='2200' data-aos-duration='2000'>
                <div className='row'>
                    <div className='card'>
                        <div className='col-sm-6 col-md-6 col-xl-6'>
                            <div className='card-body'>
                                <h3 className='card-title'>GANON</h3>
                                <p className='card-text'>The main antagonist of the series.
                                    Born from a Gerudo man named Ganondorf. He made his debut appearance in the very first game, The Legend of Zelda, and has since been present or referred to in most subsequent titles.
                                    <br />  A monstrous Prince of Darkness, Ganon's character has seen much development throughout the series, from being a simple monster to a powerful warlock with deeper motives to his actions.
                                    <br />Ganon is the possessor of the Triforce of Power, imbued with the essence of the Goddess Din. This divine relic makes Ganon unimaginably strong and grants him boundless mystical power, making him a grave threat to the land of Hyrule and the world.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-5'>
                            <div className='card-img'>
                                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/4/4f/OoT_Ganon_Artwork.png'} alt='Ganon' />
                                <span>Ocarina of Time Ganon's artwork.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Ganondorf' data-aos='fade-down-right' data-aos-delay='2400' data-aos-duration='2000'>
                <div className='row'>
                    <div className='card'>
                        <div className='col-sm-6 col-md-6 col-xl-6'>
                            <div className='card-body'>
                                <h3 className='card-title'>GANONDORF DRAGMIRE</h3>
                                <p className='card-text'>Ganon's original Gerudo form.
                                    Known as the King of Thieves, the Great King of Evil, the Emperor of the Dark Realm, or the Dark Lord.
                                    <br /> Ganondorf was born a member of the Gerudo; as the only male member to be born in a hundred years, Ganondorf is made either the King of the Gerudo or the Guardian of the Desert, depending on the game.
                                    <br />Gifted with powerful magic, Ganondorf often seeks the omnipotent Triforce to grant his wish of conquering the entire world. He frequently wields the Triforce of Power, and stages coups against the Royal Family of Hyrule to take the Hyrulean Throne by force.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-5'>
                            <div className='card-img'>
                                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/8/87/TotK_Demon_King_Ganondorf_Artwork.png'} alt='Ganondorf' />
                                <span>Tears of the Kingdom Ganondorf's artwork.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Characters