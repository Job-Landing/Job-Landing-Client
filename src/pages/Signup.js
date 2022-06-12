import React, {useState} from 'react'
import logo from '../asserts/images/logo.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom";
import Wrapper from "../asserts/wrappers/SignUpAndLogIn";

const Signup = (() => {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePassword = (e) => {
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
          <input autoComplete="off" type="email" name="email" placeholder='E-mail' />
          <input autoComplete="off" type="text" name="name" placeholder='Username' />
          <input autoComplete="off" type={ !showPassword ? "password" : "text" } name="password" placeholder='Password' onChange={handleChangePassword} />
          {!showPassword ? <VisibilityOffIcon onClick={handleClickShowPassword} className='seen' /> : <VisibilityIcon onClick={handleClickShowPassword} className='seen' />}

          <p>Forgot your password?</p>
          <button className='signup'>Sign Up</button>
        </form>
        <div className='login'>
          <Link className='link'to="/login"><p>Already has an account? Login</p></Link>
        </div>
      </div>
    </Wrapper>

  )
})

export default Signup