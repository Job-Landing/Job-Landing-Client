import React from 'react'
import {JobLandingContext} from '../context/context';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import homeImg from '../asserts/images/homeImg.png'
import Wrapper from '../asserts/wrappers/Home'


const Home = (() => {
    const label = {inputProps: {'aria-label': 'Switch demo'}};
    const {example, setExample} = React.useContext(JobLandingContext);
    return (
        <Wrapper>
            <div className='wrapper'>
                <div className='inner_wrapper'>
                    <h3 class='title'>Job Landing</h3>
                    <span className='vertical_line'></span>
                    <Link className='link' to="signup"><Button variant="outlined" size="medium">Sign up</Button></Link>
                    <Link className='link' to="login"><Button variant="contained" size="medium">Login</Button></Link>
                </div>
            </div>
            <section className='information'>
                <div>
                    <h1 class='information_title'>Use your skill to gain more jobs</h1>
                    <p className='information_text'>Organize your job search and discover new opportunities, all in one
                                                    place.</p>
                    <Link className='link' to="signup"><Button variant="contained" size="medium">Sign up
                                                                                                 now</Button></Link>
                </div>
                <img className='homeImg' src={homeImg} alt="home1"/>
            </section>

        </Wrapper>


    )
})


export default Home


