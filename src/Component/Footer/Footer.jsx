import React from 'react'
import './Footer.css'
import logo from '../Assets/logo_big.png'
import  ig from '../Assets/instagram_icon.png'
import  pinterest from '../Assets/pintester_icon.png'
import  whatsapp from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="flogo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-sicon">
            <div className="icontainer">
            <img src={ig} alt="" />
            </div>
            <div className="icontainer">
            <img src={whatsapp} alt="" />
            </div>
            <div className="icontainer">
            <img src={pinterest} alt="" />
            </div>
        </div>
        <div className="cpyright">
          <hr />
          <p>Copyright @ 2023 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer