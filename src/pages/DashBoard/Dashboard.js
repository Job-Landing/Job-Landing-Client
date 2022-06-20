import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Sidebar, Navbar, Statistic, DashboardTable} from '../components'

const Dashboard = () => {
    return (
        <Wrapper>
            <Sidebar/>
            <div className="right">
                <Navbar/>
                <Statistic/>
                <DashboardTable/>
            </div>
        </Wrapper>
    );
}

export default Dashboard;