import React from 'react'
import './Benefits.css'
import transaction from '../images/transaction.png'
import shop from '../images/shop.png'
import nerd from '../images/nerd.png'

const benefitText = [
    {image: transaction, title: 'Rapid Transactions for Every Need', Text: 'Experience lightning-fast transactions tailored for freelancers, corporate teams, content creators, and beyond. Whether you are sending invoices, settling bills, or receiving payments, Nanopay ensures your money moves at the speed of your ambitions.'},
    {image: shop, title: 'Global Shopping Made Simple', Text: 'Shop, subscribe, and pay online with ease across the globe using Nanopay Virtual Cards. Say goodbye to borders and hello to a world of possibilities. Your purchases are now as seamless as your aspirations.'},
]


const Benefits = () => {
  return (
    <div className='benefit-wrapper'>
    <div className='Section1'>
    <div className= 'benefit-grid'>
        <h2> Why Choose <span>Nanopay?</span>  </h2>
        <p>We are setting new standards for speed, security, and personalized service. Here's a glimpse of what awaits you</p>
    </div>

    <div>{
        benefitText.map((items, idx) => {
            return(
                <div className='text-box' key = {idx}>
                    <img src= {items.image} alt='benefit' />
                    <div>
                        <h3>{items.title}</h3>
                        <p>{items.Text}</p>
                    </div>
                </div>
                
            )
        })
    }

    </div>

    </div>

<div className='Section2'>
    <img src= {nerd} alt='benefitimg'/>
</div>

    </div>
  )
}

export default Benefits;