import React from 'react'

function Contactus() {
  return (
    <div id="contact">
        <form action="">
      <input type="text" value="" placeholder='Full name' required />
      <input type="email" value="" placeholder='Enter Yout Email' required />
      <textarea placeholder="Write Here" name="message" ></textarea>
      <input type="submit"  value="Send"/>
      </form>
    </div>
  )
}

export default Contactus
