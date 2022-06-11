import React, { useState } from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components';

const Signup = (() => {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      {/* <h1>Signup</h1> */}
      <img className="logo" src={logo} alt="logo" />
      <div className="form_wrapper">
        <div className="form_wrapper_1">
          <h3 className="form_title">Sign Up</h3>
        </div>

        <form>
          <input type="email" name="email" placeholder='E-mail' />
          <input type="text" name="name" placeholder='Username' />
          <input type="password" name="password" placeholder='Password' />
          <p>Forgot your password?</p>
          <button className='signup'>Sign Up</button>
        </form>
        <div className='login'>
          <p>Already has an account? Login</p>
        </div>
      </div>



    </Wrapper>

  )
})

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 5rem;
    }
    .logo{
      margin-top: 40px;
      width: 300px;
    }
    .form_wrapper{
      height: 500px;
      width:450px;
      background: #F6F6F6;
      margin-left: auto;
      margin-right: auto;
      border-radius: 30px;
      box-shadow: rgba(209, 209, 209, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    .form_wrapper_1{
      width: 100%;
      border-bottom: 3px solid white;
    }
    .form_title{
      color: black;
      font-size: 20px;
      padding: 10px 0 0 20px;
    }

    form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;
    }

    input {
      padding: 15px 0 15px 10px;
      width: 370px;
      border-radius: 15px;
      border:none;
      margin-top: 15px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    p{
      color:black;
      font-size: 12px;
      font-weight: 500;
      margin-top: 20px;
    }

    .signup{
      width: 370px;
      border: none;
      color: white;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      background-image: linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%);
      margin: 10px;
      padding: 15px 45px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
    }
    .signup:hover{
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
    .login{
      border-top: 3px solid white;
      color: black;
      text-align: center;
    }
`

export default Signup