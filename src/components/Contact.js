import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container'>
      <div className='contact-us-container'>
        <h1>Contact Us</h1>
        <p>

For any inquiries, please reach out to the College Office 
at (555) 123-4567 or email us at info@abccollege. Our office hours are Monday through Friday, 9 AM to 5 PM.</p>
<form className='contact-form'>
  <div className='form-group'>
    <label htmlFor='name'>Name</label>
    <input type='text' id='name' name='name' required></input>

  </div>

  <div className='form-group'>
    <label htmlFor='email'>Email</label>
    <input type='email' id='email' name='email' required></input>

  </div>
  <div className='form-group'>
    <label htmlFor='message'>Message</label>
<textarea id='message' name='message' rows='5' required></textarea>
  </div>

  <button type='submit' className='submit-btn'>Submit</button>


</form>
      </div>
    </div>
  )
}

export default Contact