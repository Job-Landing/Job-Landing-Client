import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Sidebar, Navbar, Statistic, DashboardTable, DashboardChart } from '../components'

const Dashboard = () => {
    return (
        <Wrapper>
          <Sidebar />
          <div className="right">
            <Navbar />
            <Statistic />
            <DashboardChart />
            <DashboardTable />
          </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  .right{
    width: 100vw;
    padding: 20px 40px 20px 40px;
  }
`

export default Dashboard;