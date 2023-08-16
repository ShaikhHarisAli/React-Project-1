import React from 'react'
import aboutimage from '../images/online-world.svg'

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt=""  />

      </div>
      <div className='about-text'>
        <h3>A digital web design studio creating modern & engaging online experiences</h3>
        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}

export default About
