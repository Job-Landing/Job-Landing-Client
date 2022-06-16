import React, {useState} from 'react'
import styled from 'styled-components';
import Wrapper from "../asserts/wrappers/SignUpAndLogIn";
import logo from "../asserts/images/logo.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {Link} from "react-router-dom";

const Login = (() => {

    const [password, setPassword] = useState('');

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <Wrapper>
            <img className="logo" src={logo} alt="logo"/>
            <div className="form_wrapper">
                <div className="form_wrapper_1">
                    <h3 className="form_title">Log In</h3>
                </div>
                <form>
                    <input autoComplete="off" type="email" name="email" placeholder='E-mail'/>
                    <input autoComplete="off" type={"password"} name="password" placeholder='Password'
                           onChange={handleChangePassword}/>
                    <p>Forgot your password?</p>
                    <button className='submit'>Log In</button>
                </form>
                <div className='redirect'>
                    <Link className='link' to="/signUp"><p>Do not got an account? Sign Up</p></Link>
                </div>
            </div>
        </Wrapper>

    )
})

export default Login

