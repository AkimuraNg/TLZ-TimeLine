import React from 'react'
import './SCSS/Characters.scss'

const Characters = () => {
    return (
        <div className='CharactersPage'>
            <h1>MAIN CHARACTERS</h1>
            <img className='bg' src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48494f72-4f45-40a7-8dac-9c9e478ef481/d57536l-e3620b9a-9bfa-40f6-8f8a-ed4cccbfacd8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ4NDk0ZjcyLTRmNDUtNDBhNy04ZGFjLTljOWU0NzhlZjQ4MVwvZDU3NTM2bC1lMzYyMGI5YS05YmZhLTQwZjYtOGY4YS1lZDRjY2NiZmFjZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0pyTojW_AbWaePli2Tu7Dd43Y2lagF_IlYywlgeKiwE'} alt='background' />
            <section className='Link'>
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
            <section className='Zelda'>
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
            <section className='Ganon'>
                <div className='row'>
                    <div className='card'>
                        <div className='col-sm-6 col-md-6 col-xl-6'>
                            <div className='card-body'>
                                <h3 className='card-title'>GANONDORF DRAGMIRE</h3>
                                <p className='card-text'>The main antagonist of the series.
                                    Known as the King of Thieves, the Great King of Evil, the Emperor of the Dark Realm, or the Dark Lord.
                                    <br /> Ganondorf was born a member of the Gerudo; as the only male member to be born in a hundred years, Ganondorf is made either the King of the Gerudo or the Guardian of the Desert, depending on the game.
                                    <br />Gifted with powerful magic, Ganondorf often seeks the omnipotent Triforce to grant his wish of conquering the entire world. He frequently wields the Triforce of Power, and stages coups against the Royal Family of Hyrule to take the Hyrulean Throne by force.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-xl-5'>
                            <div className='card-img'>
                                <img src={'https://cdn.wikimg.net/en/zeldawiki/images/8/87/TotK_Demon_King_Ganondorf_Artwork.png'} alt='Ganon' />
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