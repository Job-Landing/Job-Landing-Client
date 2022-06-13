import React, {useState} from 'react'
import styled from 'styled-components'
import avatar from '../images/avatar.jpg'
import { Link, useLocation } from 'react-router-dom'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


const Sidebar = () => {
  const path = window.location.pathname.replace("/", "")
  const [pathname, setPathname] = useState(path);

  return (
    <Wrapper>
      <div className='profile'>
        <img src={avatar} alt="avatar" />
        <div className='profile_info'>
          <span>Zanyuan Yang</span>
          <span>user</span>
        </div>
      </div>
      <div>
        <h2 className='title'>GENERAL</h2>
        <div className='general-item'>
          <Link to='/dashboard' className={path==='dashboard' ? 'item' :  'item out-active'}>
            <DashboardRoundedIcon className='icon' />
            <p>Dashboard</p>
          </Link>
          <Link to='/profile' className={path==='profile' ? 'item' :  'item out-active'}>
            <PersonRoundedIcon className='icon' />
            <p>Profile</p>
          </Link>
        </div>
      </div>
      <div>
        <h2 className='title'>Management</h2>
        <div className='general-item '>
          <Link to='/joblist' className={path==='joblist' ? 'item' :  'item out-active'}>
            <DashboardRoundedIcon className='icon' />
            <p>All Jobs</p>
          </Link>
          <div className='item out-active'>
            <WorkRoundedIcon className='icon' />
            <p>Add Job</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 40px 20px 0px 20px;
  width: 280px;
  border-right: 1px dashed #696d94;
  .profile{
    display: flex;
    background-color:  #8489ba;
    width: 240px;
    padding: 15px 15px 15px 20px;
    border-radius: 20px;
  }
  .profile_info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 15px;
    color: black;
  }

  span:nth-child(1){
    font-weight: 500;
    font-size: 16px;
  }
  span:nth-child(2){
    font-weight: 400;
    font-size: 14px;
  }
  .item{
    display: flex;
    background-color: #696d94;
    width: 250px;
    border-radius: 10px;
    padding: 15px 15px 15px 20px;
    margin-bottom: 10px;
    color: #1e203b;
    text-decoration: none;
  }
  p{
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 20px;
    font-weight: 500;
    font-size: 16px;
  }
  .out-active{
    color: white !important;
    background-color:transparent !important;
  }
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .title{
    margin-top: 40px;
    margin-left: 20px;
  }
`

export default Sidebar
