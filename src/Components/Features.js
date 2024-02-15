import React from 'react'
import './Features.css'
import feature1 from '../images/feature1.png'
import feature2 from '../images/feature2.png'
import feature3 from '../images/feature3.png'

const featureGrid = [
    {image: feature1, header: 'Speed and Security', text: 'Nanopay prioritizes both speed and security, providing a banking experience where your transactions are swift, and your financial data is safeguarded at every step.'},
    {image: feature2, header: 'Cost Efficiency Redefined', text: 'No more hidden fees or surprises. Nanopay is committed to cost efficiency, ensuring that you get the most out of your transactions without breaking the bank'},
    {image: feature3, header: 'Tailored for You', text: 'Whether you are a freelancer on the move, part of a dynamic corporate team, or a content creator shaping the digital landscape, Nanopay is designed to meet your unique banking needs.'},
]

const Features = () => {
  return (
    <div className='feature-wrapper'>
    <div className='header'>
        <h1>Key <span>Features</span></h1>
        <p> Where Your Money Moves as Fast as You Do!</p>
    </div>

    <div className='featureGrid'> {
            featureGrid.map((item,idx) => {
                return(
                    <div className='wrapper' key={idx}>
                        <img src= {item.image} alt='icon'/>
                        <h2>{item.header}</h2>
                        <p>{item.text}</p>
                    </div>
                    
                )
                
            })
        }
    </div>
        
    </div>
  )
}

export default Features