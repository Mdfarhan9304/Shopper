import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='nletter'>
        <h1>Get' Exclusive Offers On Your Email</h1>
        <p>Subscribe to our new letter and get updated</p>
        <div>
        <input type="email" placeholder='Enter your email id' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
