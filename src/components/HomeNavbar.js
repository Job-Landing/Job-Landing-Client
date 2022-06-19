import React from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/Home'


const HomeNavbar = () => {
    return (
        <Wrapper>
            <div className='wrapper'>
                <div className='inner_wrapper'>
                    <Link className='link' to='/'><h3 class='title'>Job Landing</h3></Link>
                    <span className='vertical_line'></span>
                    <Link className='link' to="/signup"><Button variant="outlined" size="medium">Sign up</Button></Link>
                    <Link className='link' to="/login"><Button variant="contained" size="medium">Login</Button></Link>
                </div>
            </div>
        </Wrapper>
    );
}

export default HomeNavbar
