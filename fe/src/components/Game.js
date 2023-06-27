import React from 'react'
import './SCSS/Games.scss'
import games from './Data_files/games.json'
import remakes from './Data_files/remakes.json'
import spinoffs from './Data_files/spinoffs.json'
import { Link } from 'react-router-dom'
// import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'

const Game = () => {
    // const [current, setCurrent] = useState(0)
    // const length = slides.length

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }
    // console.log(current)
    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    // }

    return (
        <div className='Games'>
            <h1 style={{ borderBottom: 'none' }} data-aos='zoom-in-down' data-aos-duration='1000'>Released Games</h1>
            <p data-aos='zoom-in-down' data-aos-delay='500' data-aos-duration='1000'>1986 - 2023</p>

            {/* <h3 style={{fontSize: 23}}>main series</h3>
            <BiChevronsLeft className='leftArrow' onClick={prevSlide} />
            <BiChevronsRight className='rightArrow' onClick={nextSlide} />
            <section className='origin'>
                {games.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
                            {index === current &&
                                (<div className='card'>
                                    <img src={slide.Image} alt='released game' />
                                    <div className='card-content'>
                                        <h4 className='card-title'> {slide.Title}</h4>
                                        <p className='card-body'>{slide.Content}</p>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    )
                })}
            </section> */}
            {/* <h3>Main Series</h3>
            <span>Swipe to read</span> */}

            <section className='origin' data-aos='zoom-in-up' data-aos-delay='1200' data-aos-duration='2000'>
                <h3>Main Series</h3>
                <div id='carouselGames' className='carousel slide carousel-fade'>
                    <div className='carousel-inner'>
                        {games.map((post, index) => {
                            const itemClasses = index === 0 ? 'carousel-item active' : 'carousel-item';
                            return (
                                <div className={itemClasses} key={post.id}>
                                    <div className='card'>
                                        <img src={post.Image} alt='...' />
                                        <div className='card-content'>
                                            <h4 className='card-title'> {post.Title}</h4>
                                            <span>{post.Time}</span>
                                            <p className='card-body'>{post.Content}</p>
                                            <Link to={post.Link} className='btn btn-outline-light' target='_blank'>Read more about the game</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
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

            <section className='remakes' data-aos='zoom-in-down' data-aos-duration='2000'> 
                <h3>Remakes</h3>
                <div id='carouselRemakes' className='carousel slide carousel-fade'>
                    <div className='carousel-inner'>
                        {remakes.map((post, index) => {
                            const itemClasses = index === 0 ? 'carousel-item active' : 'carousel-item';
                            return (
                                <div className={itemClasses} key={post.id}>
                                    <div className='card'>
                                        <img src={post.Image} alt='...' />
                                        <div className='card-content'>
                                            <h4 className='card-title'> {post.Title}</h4>
                                            <span>{post.Time}</span>
                                            <p className='card-body'>{post.Content}</p>
                                            <Link to={post.Link} className='btn btn-outline-light' target='_blank'>Read more about the game</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
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

            <section className='spinoffs' data-aos='zoom-in-right' data-aos-duration='2000'>
                <h3>Spin-offs</h3>
                <div id='carouselSpinoffs' className='carousel slide carousel-fade'>
                    <div className='carousel-inner'>
                        {spinoffs.map((post, index) => {
                            const itemClasses = index === 0 ? 'carousel-item active' : 'carousel-item';
                            return (
                                <div className={itemClasses} key={post.id}>
                                    <div className='card'>
                                        <img src={post.Image} alt='...' />
                                        <div className='card-content'>
                                            <h4 className='card-title'> {post.Title}</h4>
                                            <span>{post.Time}</span>
                                            <p className='card-body'>{post.Content}</p>
                                            <Link to={post.Link} className='btn btn-outline-light' target='_blank'>Read more about the game</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
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