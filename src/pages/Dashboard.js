import React from 'react';
import Wrapper from '../asserts/wrappers/Dashboard'
import {Sidebar, Navbar, Statistic, DashboardTable} from '../components'

const Dashboard = () => {
    return (
        <Wrapper>
            <Sidebar />
            <div className="right">
                <Navbar />
                <Statistic />
                <DashboardTable />
            </div>
        </Wrapper>
    );
}

export default Dashboard;