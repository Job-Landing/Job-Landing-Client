import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import avatar from '../asserts/images/avatar.jpg'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Wrapper from '../asserts/wrappers/NavBar'
import {JobLandingContext} from '../context/context';

const NavBar = () => {
    const { user, logout } = React.useContext(JobLandingContext);
    const [selectOpen, setSelectOpen] = useState(false);

    const openSelect = () => {
        setSelectOpen(!selectOpen)
    }

    return (
        <Wrapper>
            <div className='navbar_wrapper'>
                <SearchRoundedIcon className='icon' />
                <img src={avatar} alt="avatar" onClick={openSelect} />
            </div>
            <div className='arrow_up' style={selectOpen ? { visibility: "visible" } : {visibility: "hidden"}}></div>
            <div className='select' style={selectOpen ? { visibility: "visible" } : {visibility: "hidden"}}>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <hr></hr>
                <p>Home</p>
                <p>Profile</p>
                <hr />
                <p onClick={logout}>Logout</p>
            </div>

        </Wrapper>
    );
}



export default NavBar;