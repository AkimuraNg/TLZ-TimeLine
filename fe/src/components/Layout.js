import React, { useState } from 'react'
import './Layout.scss'
import { Data1 } from './Data_files/Data1'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'

const Layout = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='slider'>
            <GoArrowLeft className='arrowLeft' onClick={prevSlide} />
            <GoArrowRight className='arrowRight' onClick={nextSlide} />
            {Data1.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <div className='card'>
                                <img src={slide.Image} alt='...' className='Images' />
                                <div className='card-content'>
                                    <h3>{slide.Title}</h3>
                                    <p>{slide.Content}</p>
                                </div>
                            </div>

                        )}

                    </div>
                )
            })}
        </section>
    )
}

export default Layout