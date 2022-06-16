import React, {useState} from 'react'
import avatar from '../asserts/images/avatar.jpg'
import { Link, useLocation } from 'react-router-dom'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Wrapper from '../asserts/wrappers/Sidebar'


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
          <Link to='/addjob' className={path==='addjob' ? 'item' :  'item out-active'}>
            <WorkRoundedIcon className='icon' />
            <p>Add Job</p>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}



export default Sidebar
