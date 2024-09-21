import React, { useState } from 'react'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form">
          <p className="form_error-message">This is an error message</p>
          <input type="text"  placeholder='Full Name' name='name' value={}/>
        </form>
      </div>
    </section>
  )
}

export default Register