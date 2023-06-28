import React from 'react'
import './SCSS/Games.scss'
import games from './Data_files/games.json'
import remakes from './Data_files/remakes.json'
import spinoffs from './Data_files/spinoffs.json'
import { Link } from 'react-router-dom'

const Game = () => {

    const renderCarouselItems = (data) => {
        return data.map((post, index) => {
            const itemClasses = index === 0 ? 'carousel-item active' : 'carousel-item';
            return (
                <div className={itemClasses} key={post.id}>
                    <div className='card'>
                        <img src={post.Image} alt='...' />
                        <div className='card-content'>
                            <h4 className='card-title'> {post.Title}</h4>
                            <span>{post.Time}</span>
                            <p className='card-body'>{post.Content}</p>
                            <Link to={post.Link} className='btn btn-outline-light' target='_blank'>
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });
    };


    return (
        <div className='Games'>
            <h1 style={{ borderBottom: 'none' }} data-aos='zoom-in-down' data-aos-duration='1000'>Released Games</h1>
            <p data-aos='zoom-in-down' data-aos-delay='500' data-aos-duration='1000'>1986 - 2023</p>

            <h3 style={{ paddingTop: 100 }} data-aos='zoom-in-up' data-aos-delay='1200' data-aos-duration='2000'>Main Series</h3>
            <section className='origin' data-aos='zoom-in-up' data-aos-delay='1200' data-aos-duration='2000'>
                <div id='carouselGames' className='carousel slide carousel-fade'>
                    <div className='carousel-inner'>{renderCarouselItems(games)}</div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselGames' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselGames' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </section>

            <h3 style={{ paddingTop: 100 }} data-aos='zoom-in-down' data-aos-duration='2000'>Remakes</h3>
            <section className='remakes' data-aos='zoom-in-down' data-aos-duration='2000'>
                <div id='carouselRemakes' className='carousel slide carousel-fade'>
                    <div className='carousel-inner'>{renderCarouselItems(remakes)}</div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselRemakes' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselRemakes' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </section>

            <h3 style={{paddingTop: 100}}  data-aos='zoom-in-right' data-aos-duration='2000'>Spin-offs</h3>
            <p style={{paddingTop: 20}}  data-aos='zoom-in-right' data-aos-duration='2000'>
                Here listed some well-known spin-offs of The Legend of Zelda series.
                <br /> For more information about other spin-offs, click{' '}
                <Link to='https://zeldawiki.wiki/wiki/Main_Page' target='_blank' style={{ color: 'white' }}>
                    here
                </Link>
                .
            </p>
            <section className='spinoffs' data-aos='zoom-in-right' data-aos-duration='2000'>
                <div id='carouselSpinoffs' className='carousel slide carousel-fade'>
                    <div className='carousel-inner'>{renderCarouselItems(spinoffs)}</div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselSpinoffs' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselSpinoffs' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </section>

        </div>
    )
}

export default Game