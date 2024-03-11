import React from 'react'
import './Experience.css'
import phone from '../images/phone.png'
import cards from '../images/cards.png'
import banks from '../images/banks.png'
import bills from '../images/bills.png'
import networks from '../images/network.png'

const experience = [
  {header: 'ACCOUNT OPENING', text: 'Instantly open a personal Nanopay account with just your phone number, NIN, BVN or any other valid IDs.', images: phone},
  {header: 'INSTANT & FREE DEBIT CARDS', text: 'Apply and get a card instantly. Enjoy free ATM withdrawals monthly and zero maintenance fee on all your transactions and financial activities.', images: cards},

];

const advert = [
  {header: "SEND & RECEIVE MONEY", text:'Bank Transfer, USSD Code, to all banks in Nigeria with 100% transaction success rate.', images: banks},
  {header: 'BILL PAYMENTS', text:'Bank Transfer, USSD Code, to all banks in Nigeria with 100% transaction success rate.', images: bills},
  {header: 'AIRTIME & DATA', text:'Recharge your phone and make payment for internet data subscription using Nanopay', images: networks},
];


const Experience = () => {
  return (
    <div className='experience-wrapper'>
    <div className= 'heading'>
        <h1>Experience the <span>Future of Finance with</span>  Nanopay </h1>
        <p>Where Your Money Moves as Fast as You Do!</p>
    </div>

    <div className= 'experienceGrid'> { 
      experience.map((items, idx) => {
       return( 
        <div className= 'Grid-wrapper' key={idx}> 
          <h2> {items.header} </h2>        
          <p> {items.text} </p> 
          <img className= {`${ idx === 1 ? 'secondary-image-style' : 'experience-images'}`} src={items.images} alt='phone' loading='lazy'/>
        </div>
       ) 

       })
      
      }

    </div>

    <div className='experienceGrid'>{
      advert.map((items, idx) => {
        return(
          <div className= 'Grid-wrapper' key={idx}> 
          <h2> {items.header} </h2>        
          <p> {items.text} </p> 
          <img className= 'secondgrid'src={items.images} alt='phone' />
        </div>

        )
    })
    }
    </div>

    </div>
  )
}

export default Experience;