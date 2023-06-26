import React, { useEffect, useState } from 'react'
import PreLoad from '../images/PreLoad';
import './SCSS/Intro.scss'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/home')
  }
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  if (loading) {
    return <PreLoad />
  }

  return (
    <div className='intro' data-aos='fade-up' data-aos-duration='2000'>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zelda_Logo.svg/1920px-Zelda_Logo.svg.png'} alt='logo' />
      <button type='button' className='btn btn-primary' onClick={toHome} data-aos='fade-up' data-aos-delay='1000' data-aos-duration='1500'> START</button>
    </div>
  )
}

export default Intro