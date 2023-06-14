import React from 'react'
import Navbar from './Navbar'
import './SCSS/Home.scss'
import bg from '../images/bg.png'

const Home = () => {
  return (
    <div className='Homepage'>
      <Navbar />
      <h1>"Yahaha! You found me!"</h1>
      <section className='bg-image'>
        <img src={bg} alt='bg'/>
      </section>
      <section className='introduction'>
        <h1>Welcome to this website!</h1>
        <p>This website is made as a small wiki website, introducing one of the most well-known game series of Nintendo.
          <br /> <span className='title'>The Legend of Zelda</span>
        </p>
        <p>This website will introduce the main characters and npcs in the series, as well as the games that had been released via Nintendo since 1986 to 2023.</p>
      </section>
    </div>
  )
}

export default Home