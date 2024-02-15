import React from 'react'
import './contact.css'
import ladyImage from '../images/ladyImage.png';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
    <div className='firstHalf'>
        <img src={ladyImage} alt= 'lady' />
    </div>
    <div className='secondHalf'>
    <h2>Get in Touch With us Today!</h2>
     <p>While we operate as a bank within an app, we're committed to ensuring our customers never feel stranded.
         While everything you need is conveniently accessible on our app, we're here for assistance or even just a friendly chat whenever you require it.</p>

         <button className='contact-button'>CHAT WITH US</button>
    </div>

    </div>
  )
}

export default Contact