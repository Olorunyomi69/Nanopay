import React from 'react';
import './Header.css';

import appleIcon from '../images/appleIcon.png'
import androidIcon from '../images/androidIcon.png'

const appAdvert = [
    {image : appleIcon, title: 'Get on IPhone'},
    {image : androidIcon, title: 'Get on Android'},
]

const Header = () => {
  return (
    <div className='Header-wrapper'>
  
        <header className='head' id='showcase'>
       <h2><span className= 'head-span'>Welcome To</span>     Nanopay</h2>
            <h1>The ultimate solution for modern banking</h1>
            <p>
                With Nanopay, you can unlock a new era of banking that offers effortless financial empowerment. You can easily send and receive payments worldwide, 
                with speed, security, and unparalleled cost efficiency.
            </p>
        </header>

        <div className='app-advert'> 
            { appAdvert.map((items,idx) => {
                return ( 
                    <button className='apps' key={idx}>
                        <img src={items.image} alt={'icon'}/>
                        <p>{items.title}</p>
                    </button>
           ) })}
        </div>

    </div>
  )
}

export default Header