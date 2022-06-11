import React from 'react'
import { JobLandingContext } from '../context/context';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import homeImg from '../images/homeImg.png'


const Home = (() => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const { example, setExample } = React.useContext(JobLandingContext);
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
          <p className='information_text'>Organize your job search and discover new opportunities, all in one place.</p>
          <Link className='link' to="signup"><Button variant="contained" size="medium">Sign up now</Button></Link>
        </div>
        <img className='homeImg' src={homeImg} alt="home1" />
      </section>

    </Wrapper>


  )
})

const Wrapper = styled.main`
  width: 100%;
  .wrapper{
    width: 100%;
    border-bottom: 0.1px solid white;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #17171e;
    box-shadow: rgba(209, 209, 209, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  .inner_wrapper{
    width: 80%;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  .title{
    color: white;
  }
  .vertical_line{
    border-left: 2px solid white;
    height: 30px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .link{
    text-decoration: none;
  }
  Button{
    color: white;
    border-color: white;
    border-radius: 20px;
    margin-right: 20px;
    text-decoration: none;
  }
  Button:hover{
    border-color: #5687f6;
  }


  .information{
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    color: white;
  }
  .information_title{
    font-size: 35px;
  }
  .information_text{
    font-size: 20px;
  }

  .homeImg{
    height: 350px;
    margin-left: auto;
    display: block;
  }

  @media only screen and (max-width: 800px) {
    .information{
      grid-template-columns: 1fr;
    }
    .homeImg{
      display: none;
    }
  }

`

export default Home


