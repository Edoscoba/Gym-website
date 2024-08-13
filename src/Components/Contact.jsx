import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form action="">
        <input type="text" placeholder='full Name' required />
        <input type="email" placeholder='Type your E-mail' required />
        <textarea placeholder="Write Here...." name="message"></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default Contact