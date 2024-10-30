





import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className='container'>
      <div className='join-container'>
        <h1>Join Us</h1>
        <p>
          To join our courses, please fill out the form below.
        </p>
        <form className='join-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>phone</label>
            <input type='text' id='phone' name='phone' required />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>

          <div className='form-group'>
    <label htmlFor='message'>Address</label>
<textarea id='message' name='message' rows='5' required></textarea>
  </div>

          <div className='form-group'>
            <label htmlFor='course'>Course</label>
            <select id='course' name='course' required>
            <option value='B.COM'>Course</option>

              <option value='B.COM'>B.COM</option>

              <option value='BBA'>BBA</option>
              <option value='M.COM'>M.COM</option>
              <option value='MBA'>MBA</option>
            </select>
          </div>

          <button type='submit' className='submit-btn'>Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
