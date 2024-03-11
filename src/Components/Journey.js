import React from 'react'
import screen from '../images/screen.png'
import './Journey.css'
import appleIcon from '../images/appleIcon.png'
import androidIcon from '../images/androidIcon.png'

const appAdvert = [
  {image : appleIcon, title: 'Get on IPhone'},
  {image : androidIcon, title: 'Get on Android'},
];

const Journey = () => {
  return (
    <div className='component-wrapper'>
        <div className='part1'>
            <h1>Your Journey Starts Here</h1>
            <p>Join Nanopay today and embark on a journey where modern banking meets unmatched convenience.
             Empower your financial endeavors, break down barriers and redefine what's possible.</p>
            <div className='app-advert1'>
             {
              appAdvert.map((items,idx) => {
                return(
                  <div className='journey-apps' key={idx}> 
                        <img src={items.image} alt={'icon'}/>
                        <p>{items.title}</p>
                    </div>
                )
              })
             }
          </div>

        </div>
        <div className='part2'><img src={ screen } alt='phone screen'/></div>
    </div>
  )
}

export default Journey