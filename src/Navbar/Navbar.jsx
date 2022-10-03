import React from 'react'
import { Link } from 'react-router-dom'

import  mage15png from '../image/Image 15.png'
import  mage16png from '../image/Image 16.png'
import  mage17png from '../image/Image 17.png'
import  mage18png from '../image/Image 18.png'
import  png3 from '../image/+3.png'
import  Vectorpng from '../image/Vector.png'
import  Ellipse42png from '../image/Ellipse 42.png'

import  Subtraction2png from '../image/Subtraction 2.png'
import  Path4221png from '../image/Path 4221.png'


import navbarStyle from './Navbar.module.css'

export default function Navbar() {
  return (
    <>

<nav className="navbar fixed-top navbar-expand-lg bg-light ">
  <div className="container  justify-content-around ">
    <Link className="navbar-brand  text-decoration-none" to="#"><h5 className='d-flex flex-column'> Welcome to iCloudReady!<span className='text-muted fs-6 mt-1'>You have started your 30 day trial</span></h5></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className='d-flex  justify-content-betwee '>
      <div className='mx-3 me-5 position-relative '>
        <img className='w-100' src={mage18png} alt="mage18png" />
        <img className='w-100'  src={mage17png} alt="mage17png" />
        <img className='w-100'  src={mage16png} alt="mage16png" />
        <img className='w-100'  src={mage15png} alt="mage15png" />
        <img className='w-100'  src={Vectorpng} alt="Vectorpng" />
        <img className='w-100'  src={Ellipse42png} alt="Ellipse42png" />
        <img className=' '  src={png3} alt="png3" />
      
      </div>
      <div className='ms-5 ps-5'>
        <a className=" text-decoration-none" to="#"><h6 className='d-flex flex-column text-muted'>Our architects are here to help<span id='Book' className='text-muted fs-6 mt-1'>Book a free session</span></h6></a>
      </div>
    </div>

    <div className=" me-5" id="navbarSupportedContent">
      <ul className="navbar-nav m-aut  mb-lg-0">
        <Link to='SlideNave'>
        <div className={`position-relative d-flex justify-content-center align-items-center mx-3 ${navbarStyle.Path4221png} `} >
            <img className='w-50 pt-2' src={Path4221png} alt="" />
            <span className={`position-absolute top-0 start-0 bg-warnin rounded-circle d-flex justify-content-center align-items-center ${navbarStyle.numbericon}`}>
              2
            </span>
        </div>
        </Link>
        <div className={`position-relative d-flex justify-content-center align-items-center mx-3 ${navbarStyle.Path4221png} `} >
            <img className='w-25 pt-1' src={Subtraction2png} alt="" />
            <span className={`position-absolute top-0 start-0 bg-warnin rounded-circle d-flex justify-content-center align-items-center ${navbarStyle.numbericon}`}>
              2
            </span>
        </div>       
        
      </ul>
     
    </div>
  </div>
</nav>
    
    
    
    
    
    </>
  )
}
