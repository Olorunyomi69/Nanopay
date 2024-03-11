import React from 'react';
import './footer.css';
import Nanopay from '../images/Nanopay1.png';
import socials from '../images/social-icons.png';
import footerPhone from '../images/footer-phone.png';
import location from '../images/location.png';
import envelope from '../images/envelope.png'

const quickLinks = [
    {text: 'About us', Path: 'home'},
    {text: 'FAQ', Path: 'home'},
    {text: 'Privacy Policy', Path: 'home'},
    {text: 'Terms and Condition of Use', Path: 'home'},
];

const contactInfo = [
    {icon: footerPhone, text: '(+234) 809 431 5855'},
    {icon: location, text: '22, Alao street, surulere, Lagos'},
    {icon: envelope, text: 'support@Nanopay.com'}
]

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
    <div className='first-div'>
        <img src= {Nanopay} alt='Nanopay-logo'/>
        <p>Experience the Future of Finance with Nanopay - Where Your Money Moves as Fast as You Do!</p>
        <img src= {socials} alt='social-icons'/>
    </div>

    <div className='second-div'> 
    <h4>QUICK LINKS</h4>
    <ul>
            {quickLinks.map((items,idx) => {
                return (
                    <li key={idx}> <a href= {items.Path}>
                        {items.text}
                    </a></li>
                )
            })}
        </ul>
    </div>

    <div className='third-div'>
            {
                contactInfo.map((items, idx) => {
                    return (
                        <div className='contact-info' key={idx}>
                            <img src={items.icon} alt='icon' loading='lazy'/>
                            <p>{items.text}</p>
                        </div>
                    )
                })
            }
        
    </div>

    </div>

    </div>
  )
}

export default Footer