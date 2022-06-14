import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Sidebar, Navbar, InfoBox, AddJobForm } from '../components'

const AddJob = () => {
    return (
        <Wrapper>
            <Sidebar />
            <div className="right">
                <Navbar />
                <InfoBox />
                <AddJobForm />
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

export default AddJob;