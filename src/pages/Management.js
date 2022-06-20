import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Sidebar, Navbar, InfoBox, AddJobForm, JobListTable, JobStreaming } from '../components'

const Management = () => {
    const path = window.location.pathname.replace("/", "")
    return (
        <Wrapper>
            <Sidebar />
            <div className="right">
                <Navbar />
                <InfoBox />
                {path==='joblist' ? <JobListTable /> : path==='addjob' ? <AddJobForm /> : <JobStreaming />}
                {/* <AddJobForm /> */}
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

export default Management;