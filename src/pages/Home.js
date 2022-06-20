import React from 'react'
import {JobLandingContext} from '../context/context';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import homeImg from '../assets/images/homeImg.png'
import dashImg from '../assets/images/dashboard.png'
import Wrapper from '../assets/wrappers/Home'


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
            <section className='information'>
                <div>
                    <h1 className='information_title'>Using a clear dashboard to organize every job application</h1>
                    <h2>User will access the dashboard once log in</h2>
                    <Link className='link' to="dashboard"><Button variant="outlined" size="medium">To DashBoard</Button></Link>
                </div>
                <div>
                    <img className='homeImg' src={dashImg} alt="dash"/>
                </div>
            </section>
            <section className='information'>
                <div>
                    <h1 className='information_title'>Job Streaming(Guest accessible)</h1>
                    <p className='information_text'>This is the place to show the job position and URL
                                                    that user just added on live </p>
                </div>
            </section>
        </Wrapper>


    )
})


export default Home


