import React from 'react'
import bgpattern from "../images/bg-pattern.png"

function Header() {
  return (
    <div id='main'>
      <div className='name'>
        <h2>We help startups launch <br/>their products</h2>
        
        <p className='details' > Etiam sed.Interdum consequat proin vestibulum class at. </p>
        <div className='header-btns'>
            <a href="/" className='header-btn'> JOIN US</a>
        </div>
      </div>
      <div className="bg-pattern-effect"><img src={bgpattern}/></div>
      
    </div>
  )
}

export default Header
