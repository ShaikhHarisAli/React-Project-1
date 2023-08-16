import React from 'react'

function Featurebox(props) {
  return (
    <div className='a-box'> 
      <div className='a-b-img'>
        <img src={props.img} alt="" />
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
      </div>
    </div>
  )
}

export default Featurebox
