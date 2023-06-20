import React from 'react'
import Navbar from './Navbar'
import './SCSS/NPC.scss'
import botw from './Data_files/botw.json'
import Footer from './Footer'

const NPC = () => {
    return (
        <div className='npc'>
            <Navbar />
            <h1>NPC</h1>
            <h2>Some nominated NPCs appear throughout each series are introduced in this page</h2>

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
                })

                }
            </section>
            <Footer />
        </div>
    )
}

export default NPC