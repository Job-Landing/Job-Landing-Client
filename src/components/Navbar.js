import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Wrapper from '../assets/wrappers/NavBar';

const Navbar = () => {
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
          <div className='item'>
            <DashboardRoundedIcon className='icon' />
            <p>Dashboard</p>
          </div>
          <div className='item out-active'>
            <PersonRoundedIcon className='icon' />
            <p>Profile</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className='title'>Management</h2>
        <div className='general-item '>
          <div className='item out-active'>
            <DashboardRoundedIcon className='icon' />
            <p>All Jobs</p>
          </div>
          <div className='item out-active'>
            <WorkRoundedIcon className='icon' />
            <p>Add Job</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar
