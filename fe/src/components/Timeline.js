import React from 'react'
import './SCSS/Timeline.scss'
import { Link } from 'react-router-dom'

const Timeline = ({timelineData}) => {
    return (
        <div className='Timeline'>
            <h1  data-aos='zoom-in-down' data-aos-duration='1000'>Timeline</h1>
            <span  data-aos='zoom-in-down' data-aos-delay='500' data-aos-duration='1000'>This is a fictional chronology of The Legend of Zelda series.</span>

            <section className='timeline-era'>
                {timelineData.map((era) => (
                    <div key={era.era} className='era' data-aos='zoom-out' data-aos-delay='600' data-aos-duration='2000'>
                        <h2>{era.era}</h2>
                        <p>{era.edesc}</p>
                        <div className='timeline-item-content' data-aos='zoom-out-down' data-aos-delay='800' data-aos-duration='1500'>
                            {era.events.map((event) => (
                                <div className='card' key={event.id}>
                                    <h3>{event.title}</h3>
                                    <p>{event.desc}</p>
                                    <img src={event.img} alt='event'/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            <p data-aos='zoom-in' data-aos-delay='2000' style={{paddingTop: 150}}>Learn more about the series timeline, click <Link style={{color: 'white'}}to='https://zeldawiki.wiki/wiki/Zelda_Timeline' target='_blank'>here</Link>.</p>
        </div>
    )
}

export default Timeline