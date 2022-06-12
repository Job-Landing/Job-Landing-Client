import React, {useState} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar.jpg'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

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

const Wrapper = styled.section`
    padding-top: 40px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    .navbar_wrapper{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .icon{
        margin-right: 15px;
        margin-top: 5px;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 30px;
        transition: 0.5s;
        cursor: pointer;
    }
    img:hover {
        transform: scale(1.2);
    }
    .arrow_up {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #696d94;
        margin-top: 53px;
        margin-right: 46px;

    }
    .select{
        position: absolute;
        height: 215px;
        width: 200px;
        margin-top: 60px;
        margin-right: 30px;
        background-color: #696d94;
        border-radius: 15px;
    }
    
    p{
        margin-top: 0;
        margin-bottom: 0;
        color: #1e203b;
        padding-left: 20px;
    }
    p:nth-child(1){
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 0;
        margin-top: 10px;
    }
    p:nth-child(2){
        color: #2a2c52;
        font-size: 12px;
        font-weight: 500;
        margin-top: 5px;
        margin-bottom: 2px;
    }
    p:nth-child(4), p:nth-child(5), p:nth-child(7){
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 0;
        margin-top: 10px;
        width: 165px;
        padding:5px 0 5px 15px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
    }
    p:nth-child(4):hover, p:nth-child(5):hover, p:nth-child(7):hover{
        background-color: #D6D5A8;
        cursor: pointer;
    }
    hr{
        border-bottom: 1px dashed white;
    }
`

export default NavBar;