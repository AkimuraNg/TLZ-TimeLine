import React from 'react'
import './SCSS/Home.scss'
import bg from '../images/bg.png'

const Home = () => {
  return (
    <div className='Homepage'>
      <img className='bg' src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48494f72-4f45-40a7-8dac-9c9e478ef481/d57536l-e3620b9a-9bfa-40f6-8f8a-ed4cccbfacd8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ4NDk0ZjcyLTRmNDUtNDBhNy04ZGFjLTljOWU0NzhlZjQ4MVwvZDU3NTM2bC1lMzYyMGI5YS05YmZhLTQwZjYtOGY4YS1lZDRjY2NiZmFjZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0pyTojW_AbWaePli2Tu7Dd43Y2lagF_IlYywlgeKiwE'} alt='background' />
      <div  data-aos='zoom-in' data-aos-delay='500' data-aos-duration='1500'>
        <h1 >"IT'S DANGEROUS TO GO ALONE! TAKE THIS."</h1>
        <section className='bg-image'>
          <img src={bg} alt='bg' />
        </section>
        <section data-aos='zoom-in' data-aos-delay='2000' data-aos-duration='3000'>
          <h2>WELCOME!</h2>
          <p>This website is made as a small wiki website, introducing one of the most well-known game series developed by Nintendo.</p>
          <p className='title'>The Legend of Zelda</p>
          <p>Here, you can learn briefly about the history of the Kingdom of Hyrule, where the story of good and evil takes place.
            <br />You can learn about the main charaters of the series, as well as some other Non-playable characters (NPCs).
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home