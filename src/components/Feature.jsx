import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/Digital design.png'
import fimage2 from '../images/Unlimited Color.png'
import fimage3 from '../images/strategy solutions.png'

function Feature() {
  return (
    <div id="features">
        <h1>Our Sevices</h1>
        <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
        <div className='a-container'>
            <Featurebox img={fimage1} title='Digital Design'/>
            <Featurebox img={fimage2} title='Unlimited Colors'/>
            <Featurebox img={fimage3} title='Strategy Solutions'/>
            
        </div>
    </div>
  )
}

export default Feature
