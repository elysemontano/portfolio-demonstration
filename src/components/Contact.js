import React from 'react'

const Contact = () => {
  return (
    <div className="container" id='contact'>
      <h1>Contact</h1>
      <form >

        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

        <input type="text" id="email" name="email" placeholder="Your email.."/>

        <textarea id="message" name="message" placeholder="Message.." ></textarea>

        <input type="submit" value="Submit"/>

      </form>
    </div>
  )
}

export default Contact