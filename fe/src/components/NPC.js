import React from 'react'
import Navbar from './Navbar'
import './SCSS/NPC.scss'
import botw from './Data_files/botw.json'
import totk from './Data_files/totk.json'

const NPC = () => {
    return (
        <div className='npc'>
            <Navbar />
            <h1>NPC</h1>

            <h3>Ocarina of Time</h3>

            <h3>Majora's Mask</h3>

            <h3>Wind Waker</h3>

            <h3>Twilight Princess</h3>

            <h3>Skyward Sword</h3>

            <h3>Breath of the Wild</h3>
            <section className='botw'>
                {botw.map(post => {
                    return (
                        <div className='card' key={post.id}>
                            <img src={post.img} alt='npc' />
                            <h4 className='card-title'>{post.name}</h4>
                            <p className='card-text'>{post.desc}</p>
                        </div>
                    )
                })}
            </section>

            <h3>Tears of the Kingdom</h3>
            <section className='totk'>
                {totk.map(post => {
                    return (
                        <div className='card' key={post.id}>
                            <img src={post.img} alt='npc' />
                            <h4 className='card-title'>{post.name}</h4>
                            <p className='card-text'>{post.desc}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default NPC