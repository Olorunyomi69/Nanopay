import React from 'react'
import logo from '../images/Nanopay1.png'
import './Navbar.css'

const Navigation = [
    {title: 'Home', Path: 'home'},
    {title: 'About Us', Path: 'about'},
    {title: 'FAQ', Path: 'faq'},
    {title: 'Contact Us', Path: 'contact'},
];

const Navbar = () => {
  return (
    <div className='Nav-wrapper'>

    <div className='image-wrapper'>
        <img src= {logo} alt='logo' />
    </div>

    <div className='main-nav'>
        <ul className='nav-list'>
            {Navigation.map((items,idx) => {
                return (
                    <li key={idx}> <a href= {items.Path}>
                        {items.title}
                    </a></li>
                )
            })}
        </ul>
    </div>

    <button className='header-button'>Get Started</button>
            
    </div>
  )
}

export default Navbar