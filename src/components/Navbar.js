import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import avatar from '../asserts/images/avatar.jpg'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Wrapper from '../asserts/wrappers/NavBar'

const NavBar = () => {
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
                <p>Zanyuan Yang</p>
                <p>jayingyoung@gmail.com</p>
                <hr></hr>
                <p>Home</p>
                <p>Profile</p>
                <hr />
                <p>Logout</p>
            </div>

        </Wrapper>
    );
}



export default NavBar;