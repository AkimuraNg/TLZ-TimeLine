import React from 'react'
import Navbar from './Navbar'
import './SCSS/Home.scss'
import bg from '../images/bg.png'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='Homepage'>
      <Navbar />
      <h1>"IT'S DANGEROUS TO GO ALONE! TAKE THIS."</h1>
      <section className='bg-image'>
        <img src={bg} alt='bg'/>
      </section>
      <section className='introduction'>
        <h1>Welcome to this website</h1>
        <p>This website is made as a small wiki website, introducing one of the most well-known game series of Nintendo.
          <br /> <span className='title'>The Legend of Zelda</span>
        </p>
      </section>
      <Footer/>
    </div>
  )
}

export default Home