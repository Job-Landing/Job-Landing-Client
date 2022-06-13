import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Wrapper from '../../assets/wrappers/DashBoard'

const Dashboard = (() => {
    return (
        <Wrapper>
            <div className='wrapper'>
                <h1>DashBoard</h1>
                <nav>
                    <Link className='link' to="/dashboard/table">Home</Link> |
                    <Link className='link' to="/dashboard/list">All Jobs</Link> |
                    <Link className='link' to="/dashboard/add">Add Job</Link> |
                    <Link className='link' to="/dashboard/profile">Profile</Link>
                </nav>
                <Outlet/>
            </div>
        </Wrapper>
    );
})

export default Dashboard;