import React, {useState, useEffect} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom";
import Wrapper from "../asserts/wrappers/SignUpAndLogIn";
import { HomeNavbar } from '../components'
import register from '../asserts/images/register.png'
import { BASE_URL } from '../utils/constant'
import axios from 'axios';
import { JobLandingContext } from '../context/context';
import useRequest from '../hooks/use-request';


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
  const { login } = React.useContext(JobLandingContext);
  const [values, setValues] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [passwordValidate, setPasswordValidate] = useState(validateState);

  const { doRequest, errors } = useRequest({
    url: `${BASE_URL}/user/signup`,
    method: 'post',
    body: {
      username: values.name,
      email: values.email,
      password: values.password
    },
    onSuccess: (data) => {
      setLoading(true)
        setTimeout(() => {
          setLoading(false);
          loginValidator(values.email, values.password)
        }, 2000);
    },
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const loginValidator = async (email, password) => {
    const user = {email: email, password: password}
    const response = await axios.post(`${BASE_URL}/user/signin`, user)
    login(response.data);
  }

  // const handleMouseDownPassword = (e) => {
  //   e.preventDefault();
  // };

  const handleSubmit = async (e) => {
    console.log(values)
    e.preventDefault();
    await doRequest();
    // const {name, email, password} = values;
    // if (!email || !password || !name) {
    //   console.log("can not be empty!");
    //   return;
    // }

    // const newUser = {username: name, email: email, password: password};
    // await fetch(`${BASE_URL}/user/signup`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then(res => {
    //     if (res.status >= 400) {
    //       setLoading(false);
    //       throw new Error("Server responds with error!");
    //     }
    //   })
    //   .then(() => {
    //     setTimeout(() => {
    //       setLoading(false);
    //       loginValidator(email, password)
    //     }, 2000);

    //   })
    //   .catch(error => {
    //     window.alert(error);
    //     return;
    //   });
  };

  return (
    <Wrapper>
      <HomeNavbar />
      <main className='main'>
        <div className='left'>
          <div className='left_inner'>
            <p className='text'>Manage the job more effectively with Job Landing</p>
            <img className='register_img' src={register} alt="register" />
          </div>
        </div>
        <div className='right'>
          <div className="form_wrapper">
            <p className='login'>Already has an account? <Link to='/login' className='link link_to_login'>Login</Link></p>
            <p className="form_title">Get started absolutely free.</p>
            <p className='form_title1'>Free forever. No credit card needed.</p>
            <form onSubmit={handleSubmit}>
              <input autoComplete="off" type="email" name="email" value={values.email} placeholder='E-mail'
                    onChange={handleChange} required />
              <input autoComplete="off" type="text" name="name" value={values.name} placeholder='Username'
                    onChange={handleChange} required />
              <input autoComplete="off" type={!showPassword ? "password" : "text"} name="password" value={values.password}
                    placeholder='Password'
                    onChange={handleChange} required />
              {!showPassword ? <VisibilityOffIcon onClick={handleClickShowPassword} className='seen'/> :
                  <VisibilityIcon onClick={handleClickShowPassword} className='seen'/>}
              <button className={!loading ? 'submit' : 'submitLoading'}>{ !loading ? 'Sign Up' : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> }</button>
            </form>
            {errors}
          </div>
        </div>
      </main>
    </Wrapper>

  )
})

export default Signup