import React, { useState } from 'react'
import './SCSS/NPC.scss'
import botw from './Data_files/botw.json'
import totk from './Data_files/totk.json'
import oot from './Data_files/oot.json'
import mm from './Data_files/mm.json'
import ww from './Data_files/ww.json'
import tp from './Data_files/tp.json'
import ss from './Data_files/ss.json'
import { BiChevronsUp, BiChevronsDown } from 'react-icons/bi'

const NPC = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)

    return (
            <div className='npc' data-aos='zoom-in' data-aos-duration='1200'>
                <h1>NPC</h1>
                <p>Nominated NPCs throughout the series are listed here.</p>

                <h3>Ocarina of Time
                    <span> <button type='button' onClick={() => setShow1(!show1)}>{show1 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
                </h3>
                {show1 && <section className='data'>

                    {oot.map(post => {
                        return (
                            <div className='card' key={post.id} data-aos='fade-down' data-aos-duration='800'>
                                <img className='card-img-top' src={post.img} alt='npc' />
                                <div className='card-content'>
                                    <h4 className='card-title'>{post.name}</h4>
                                    <p className='card-text'>{post.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>}

                <h3>Majora's Mask
                    <span> <button type='button' onClick={() => setShow4(!show4)}>{show4 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
                </h3>
                {show4 && <section className='data'>
                    {mm.map(post => {
                        return (
                            <div className='card' key={post.id} data-aos='fade-down' data-aos-duration='800'>
                                <img className='card-img-top' src={post.img} alt='npc' />
                                <div className='card-content'>
                                    <h4 className='card-title'>{post.name}</h4>
                                    <p className='card-text'>{post.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>}

                <h3>The Wind Waker
                    <span> <button type='button' onClick={() => setShow5(!show5)}>{show5 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
                </h3>
                {show5 && <section className='data'>
                    {ww.map(post => {
                        return (
                            <div className='card' key={post.id} data-aos='fade-down' data-aos-duration='800'>
                                <img className='card-img-top' src={post.img} alt='npc' />
                                <div className='card-content'>
                                    <h4 className='card-title'>{post.name}</h4>
                                    <p className='card-text'>{post.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>}

                <h3>Twilight Princess
                    <span> <button type='button' onClick={() => setShow6(!show6)}>{show6 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
                </h3>
                {show6 && <section className='data'>
                    {tp.map(post => {
                        return (
                            <div className='card' key={post.id} data-aos='fade-down' data-aos-duration='800'>
                                <img className='card-img-top' src={post.img} alt='npc' />
                                <div className='card-content'>
                                    <h4 className='card-title'>{post.name}</h4>
                                    <p className='card-text'>{post.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>}

                <h3>Skyward Sword
                    <span> <button type='button' onClick={() => setShow7(!show7)}>{show7 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
                </h3>
                {show7 && <section className='data'>
                    {ss.map(post => {
                        return (
                            <div className='card' key={post.id} data-aos='fade-down' data-aos-duration='800'>
                                <img className='card-img-top' src={post.img} alt='npc' />
                                <div className='card-content'>
                                    <h4 className='card-title'>{post.name}</h4>
                                    <p className='card-text'>{post.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>}

                <h3>Breath of the Wild
                    <span> <button type='button' onClick={() => setShow2(!show2)}>{show2 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
                </h3>
                {show2 && <section className='data'>
                    {botw.map(post => {
                        return (
                            <div className='card' key={post.id} data-aos='fade-down' data-aos-duration='800'>
                                <img className='card-img-top' src={post.img} alt='npc' />
                                <div className='card-content'>
                                    <h4 className='card-title'>{post.name}</h4>
                                    <p className='card-text'>{post.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>}


                <h3>Tears of the Kingdom
                    <span> <button onClick={() => setShow3(!show3)}>{show3 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
                </h3>
                {show3 && <section className='data'>
                    {totk.map(post => {
                        return (
                            <div className='card' key={post.id} data-aos='fade-down' data-aos-duration='800'>
                                <img className='card-img-top' src={post.img} alt='npc' />
                                <div className='card-content'>
                                    <h4 className='card-title'>{post.name}</h4>
                                    <p className='card-text'>{post.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>}
            </div>
    )
}

export default NPC