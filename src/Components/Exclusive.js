import React from 'react'
import './Exclusive.css'
import phoneIcon from '../images/phoneIcon.png'
import cash from '../images/cash.png'
import crypto from '../images/crypto.png'
import investment from '../images/investment.png'


const alternategrid = [
    {icon: phoneIcon, title:'Up to 5% Cash Back', text: 'Enjoy the perks of using Nanopay App for your bill payments and more, with up to 5% cashback. It is our way of giving back to you for choosing modern, efficient banking.', image: cash, invert: true},
    {icon: phoneIcon, title:'USDT Crypto Integration', text: 'Dive into the world of cryptocurrency with Nanopay USDT wallet. Seamlessly manage and leverage the power of USDT within our secure platform, expanding your financial horizons.', image: crypto, invert: false},
    {icon: phoneIcon, title: 'Investments with High ROI', text: 'Maximize your returns with Nanopay investment options. Earn up to 25% ROI per annum when you invest with us. Your financial goals are our priority, and we are here to help you achieve them.', image: investment, invert: true,},
]


const Exclusive = () => {
  return (
    <div className='section-wrapper'>
    <h1>Exclusive <span>Benefits</span></h1>
        {
        alternategrid.map((items, idx) => {
            return(
                <div className= 'exclusive' key = {idx}>
                <div className='exclusive-wrapper' style = {{flexDirection: items.invert ? "row" : "row-reverse"}}>
                    <div className='first-half'>
                        <img src={items.icon} alt='phone'/>
                        <h3>{items.title}</h3>
                        <p>{items.text}</p>
                    </div>
                    <div className= 'second-half'>
                        <img src={items.image} alt='description'/>
                    </div>
                </div>

                </div>
            )
        })
      }
    </div>
  )
}

export default Exclusive