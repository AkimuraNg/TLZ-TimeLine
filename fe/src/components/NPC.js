import React, { useState } from 'react'
import Navbar from './Navbar'
import './SCSS/NPC.scss'
import botw from './Data_files/botw.json'
import totk from './Data_files/totk.json'
import oot from './Data_files/oot.json'
import mm from './Data_files/mm.json'
import { BiChevronsUp, BiChevronsDown } from 'react-icons/bi'

const NPC = () => {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)


    return (
        <div className='npc'>
            <Navbar />
            <h1>NPC</h1>

            <h3>Ocarina of Time
                <span> <button type='button' onClick={() => setShow1(!show1)}>{show1 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
            </h3>
            {show1 && <section className='oot'>
                {oot.map(post => {
                    return (
                        <div className='card mb-3' key={post.id}>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <img className='card-img-top' src={post.img} alt='npc' />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{post.name}</h4>
                                        <p className='card-text'>{post.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>}

            <h3>Majora's Mask
                <span> <button type='button' onClick={() => setShow4(!show4)}>{show4 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
            </h3>
            {show4 && <section className='mm'>
                {mm.map(post => {
                    return (
                        <div className='card mb-3' key={post.id}>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <img className='card-img-top' src={post.img} alt='npc' />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{post.name}</h4>
                                        <p className='card-text'>{post.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>}

            <h3>Wind Waker</h3>

            <h3>Twilight Princess</h3>

            <h3>Skyward Sword</h3>

            <h3>Breath of the Wild
                <span> <button type='button' onClick={() => setShow2(!show2)}>{show2 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
            </h3>
            {show2 && <section className='botw'>
                {botw.map(post => {
                    return (
                        <div className='card mb-3' key={post.id}>
                            <div className='row g-0'>
                                <div className='col-md-5'>
                                    <img className='card-img-top' src={post.img} alt='npc' />
                                </div>
                                <div className='col-md-7'>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{post.name}</h4>
                                        <p className='card-text'>{post.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>}


            <h3>Tears of the Kingdom
                <span> <button onClick={() => setShow3(!show3)}>{show3 === true ? <BiChevronsUp /> : <BiChevronsDown />}</button></span>
            </h3>
            {show3 && <section className='totk'>
                {totk.map(post => {
                    return (
                        <div className='card mb-3' key={post.id}>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <img className='card-img-top' src={post.img} alt='npc' />
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{post.name}</h4>
                                        <p className='card-text'>{post.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>}
        </div>
    )
}

export default NPC