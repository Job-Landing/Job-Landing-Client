import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Sidebar, Navbar, InfoBox, JobListTable} from '../components'

const List = (() => {
    return (
      <Wrapper>
        <Sidebar />
        <div className="right">
          <Navbar />
          <InfoBox />
          <JobListTable />
        </div>
      </Wrapper>
    )
})

const Wrapper = styled.main`
    display: flex;
    height: 100vh;
    .right{
        width: 100vw;
        padding: 20px 40px 20px 40px;
    }

`

export default List


