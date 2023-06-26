import React, { useState } from 'react'
import './SCSS/Games.scss'
import games from './Data_files/games.json'
// import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'

const Game = ({ slides }) => {
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
            <h1 style={{ borderBottom: 'none' }}>Released Games</h1>
            <p>1986 - 2023</p>

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
            <section className='origin'>
                <div id='carouselGames' className='carousel slide'>
                    <div className='carousel-inner'>
                        {games.map((post, index) => {
                            const itemClasses = index === 0 ? 'carousel-item active' : 'carousel-item';
                            return (
                                <div class={itemClasses} key={post.id}>
                                    <div className='card'>
                                        <img src={post.Image} alt='...' />
                                        <div className='card-content'>
                                            <h4 className='card-title'> {post.Title}</h4>
                                            <p className='card-body'>{post.Content}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselGames' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target='#carouselGames' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Game