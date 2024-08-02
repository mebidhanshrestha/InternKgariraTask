import React from 'react'
import "../sass/Informed.scss";
import Button from '../components/Button';

function Informed() {
  return (
    <section className='informed'>
        <div className='container'>
            <div className='inform-info'>
                <div className='first'>
                    <h2>Stay informed</h2>
                    <p>Subscribe us and be the first to know about exclusive offers, the best in live events, and more.</p>
                </div>
                <div className='second'>
                    <input type="text" placeholder='Enter email address'/>
                    <Button name={'Subscribe'} color={'dark'} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Informed