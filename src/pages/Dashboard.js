import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Sidebar, Navbar, Statistic } from '../components'

const Dashboard = () => {
    return (
        <Wrapper>
            <Sidebar />
            <div className="right">
                <Navbar />
                <Statistic />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  .right{
    width: 100vw;
  }
`

export default Dashboard;