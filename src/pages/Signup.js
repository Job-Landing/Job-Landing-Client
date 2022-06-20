import React, {useState} from 'react'
import logo from '../asserts/images/logo.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom";
import Wrapper from "../asserts/wrappers/SignUpAndLogIn";
import {HomeNavbar} from '../components'
import register from '../asserts/images/register.png'

const initialState = {
  name: '',
  email: '',
  password: ''
}
// const validateState = {
//   character: false,
//   number: false,
//   uppercase: false,
//   lowercase: false
// }

const Signup = (() => {
  const [values, setValues] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  // const [passwordValidate, setPasswordValidate] = useState(validateState);

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
        <HomeNavbar/>
        {/* <h1>Signup</h1> */}
        <main className='main'>
          <div className='left'>
            <div className='left_inner'>
              <p className='text'>Manage the job more effectively with Job Landing</p>
              <img className='register_img' src={register} alt="register"/>
            </div>
          </div>
          <div className='right'>
            <div className="form_wrapper">
              <p className='login'>Already has an account? <Link to='/login' className='link link_to_login'>Login</Link>
              </p>
              <p className="form_title">Get started absolutely free.</p>
              <p className='form_title1'>Free forever. No credit card needed.</p>
              <form onSubmit={handleSubmit}>
                <input autoComplete="off" type="email" name="email" value={values.email} placeholder='E-mail'
                       onChange={handleChange}/>
                <input autoComplete="off" type="text" name="name" value={values.name} placeholder='Username'
                       onChange={handleChange}/>
                <input autoComplete="off" type={!showPassword ? "password" : "text"} name="password"
                       value={values.password}
                       placeholder='Password'
                       onChange={handleChange}/>
                {!showPassword ? <VisibilityOffIcon onClick={handleClickShowPassword} className='seen'/> :
                    <VisibilityIcon onClick={handleClickShowPassword} className='seen'/>}

                {/*<p>Forgot your password?</p>*/}
                {/* <div className="password_validate">
              <p className="password_text">Password must contain</p>
              <br />
                <div className="validate_wrapper">
                  <div className="validate_item">
                    <div className={passwordValidate.character ? 'bullet_green' : 'bullet_red'}></div>
                    <p className="validate_msg">8 - 20 characters</p>
                  </div>
                  <div className="validate_item">
                    <div className={passwordValidate.number ? 'bullet_green' : 'bullet_red'}></div>
                    <p className="validate_msg">1 or more numbers</p>
                  </div>
                  <div className="validate_item">
                    <div className={passwordValidate.uppercase ? 'bullet_green' : 'bullet_red'}></div>
                    <p className="validate_msg">upper-case letter</p>
                  </div>
                  <div className="validate_item">
                    <div className={passwordValidate.lowercase ? 'bullet_green' : 'bullet_red'}></div>
                    <p className="validate_msg">lower-case letter</p>
                  </div>
                </div>
              </div> */}
                <button className='submit'>Sign Up</button>
              </form>
            </div>
          </div>
        </main>
    </Wrapper>

  )
})

export default Signup