import React, { useState } from 'react'
import './SCSS/NPC.scss'

import npcData from './Data_files/npcData.json'
import { BiChevronsUp, BiChevronsDown } from 'react-icons/bi'

const NPC = () => {
    const [show, setShow] = useState(Array(npcData.length).fill(false));

    const toggleShow = (index) => {
        const newShow = [...show];
        newShow[index] = !newShow[index];
        setShow(newShow);
    };

    return (
        <div className='npc' data-aos='zoom-in' data-aos-duration='1200'>
            <h1>NPC</h1>
            <p>Nominated NPCs throughout the series are listed here.</p>

            {npcData.map((category, index) => (
                <div key={index}>
                    <h3>
                        {category.title}
                        <span>
                            <button type='button' onClick={() => toggleShow(index)}>
                                {show[index] ? <BiChevronsUp /> : <BiChevronsDown />}
                            </button>
                        </span>
                    </h3>
                    {show[index] && (
                        <section className='data'>
                            {category.npc.map((npc) => (
                                <div className='card' key={npc.id} data-aos='fade-down' data-aos-duration='800'>
                                    <img className='card-img-top' src={npc.img} alt='npc' />
                                    <div className='card-content'>
                                        <h4 className='card-title'>{npc.name}</h4>
                                        <p className='card-text'>{npc.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NPC;