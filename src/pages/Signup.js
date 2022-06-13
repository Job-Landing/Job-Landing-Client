import React, {useState} from 'react'
import logo from '../asserts/images/logo.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom";
import Wrapper from "../asserts/wrappers/SignUpAndLogIn";
const initialState = {
  name: '',
  email: '',
  password: ''
}

const Signup = (() => {
  const [values, setValues] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  // const handleMouseDownPassword = (e) => {
  //   e.preventDefault();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = values;
    if (!email || !password || !name) {
      console.log("can not be empty!");
      return;
    }
    const newUser = {name: name, email: email, password: password};
    await fetch("http://localhost:3001/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
        .catch(error => {
          window.alert(error);
          return;
        });
  };

  return (
      <Wrapper>
        {/* <h1>Signup</h1> */}
        <img className="logo" src={logo} alt="logo"/>
        <div className="form_wrapper">
          <div className="form_wrapper_1">
            <h3 className="form_title">Sign Up</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <input autoComplete="off" type="email" name="email" value={values.email} placeholder='E-mail'
                   onChange={handleChange}/>
            <input autoComplete="off" type="text" name="name" value={values.name} placeholder='Username'
                   onChange={handleChange}/>
            <input autoComplete="off" type={!showPassword ? "password" : "text"} name="password" value={values.password}
                   placeholder='Password'
                   onChange={handleChange}/>
            {!showPassword ? <VisibilityOffIcon onClick={handleClickShowPassword} className='seen'/> :
                <VisibilityIcon onClick={handleClickShowPassword} className='seen'/>}

            {/*<p>Forgot your password?</p>*/}
            <button className='submit'>Sign Up</button>
          </form>
          <div className='redirect'>
            <Link className='link' to="/login"><p>Already has an account? Login</p></Link>
          </div>
        </div>
    </Wrapper>

  )
})

export default Signup