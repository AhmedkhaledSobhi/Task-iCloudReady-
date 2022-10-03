import React from 'react';

import Path4221png from '../image/Path 4221@3x.png'
import SlideNaveStyle from './SlideNave.module.css'

export default function SlideNave() {
  return (
    <>
        <section id='Nav' className='d-flex align-items-center justify-content-center'>
        <h6 className='fixed-top'>Your Run Cart</h6>

            <div className=''>
            <div className=''>
                    <img className='w-100' src={Path4221png} alt="" />
                    <h6 className='mt-3 mx-auto'>Your run cart is empty!</h6>
                    <span className='text-muted'>start add your requests here</span>
            </div>
            </div>

        
        </section> 
    </>
  );
}
