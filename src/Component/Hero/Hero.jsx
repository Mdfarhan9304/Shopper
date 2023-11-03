import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png'
import hero_img from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />

        </div>
    </div>
  )
}

export default Hero