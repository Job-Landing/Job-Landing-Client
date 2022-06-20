import React, {useState} from 'react'
import styled from 'styled-components';
import Wrapper from "../asserts/wrappers/SignUpAndLogIn";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {Link} from "react-router-dom";
import {HomeNavbar} from '../components'
import login from '../asserts/images/login.png'

const Login = (() => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    return (
        <Wrapper>
            <HomeNavbar/>
            <main className='main'>
                <div className='left'>
                    <div className='left_inner'>
                        <p className='text_login'>Hi, Welcome Back</p>
                        <img className='register_img' src={login} alt="register"/>
                    </div>
                </div>
                <div className='right'>
                    <div className="form_wrapper">
                        <p className='login'>Don’t have an account? <Link to='/signup' className='link link_to_login'>Get
                                                                                                                      started</Link>
                        </p>
                        <div className="form_wrapper_1">
                            <h3 className="form_title">Sign in to Job Landing</h3>
                            <p className='form_title1'>Enter your details below.</p>
                        </div>
                        <form>
                            <input autoComplete="off" type="email" name="email" placeholder='E-mail'/>
                            <input autoComplete="off" type={!showPassword ? "password" : "text"} name="password"
                                   placeholder='Password'
                                   onChange={handleChangePassword}/>
                            {!showPassword ? <VisibilityOffIcon onClick={handleClickShowPassword} className='seen'/> :
                                <VisibilityIcon onClick={handleClickShowPassword} className='seen'/>}
                            <button className='submit'>Log In</button>
                        </form>
                    </div>
                </div>
            </main>
        </Wrapper>

    )
})

export default Login

