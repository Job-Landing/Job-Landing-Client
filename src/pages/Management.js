import React from 'react';
import Wrapper from '../asserts/wrappers/Management'
import {Sidebar, Navbar, InfoBox, AddJobForm, JobListTable, JobStreaming} from '../components'

const Management = () => {
    const path = window.location.pathname.replace("/", "")
    return (
        <Wrapper>
            <Sidebar/>
            <div className="right">
                <Navbar/>
                <InfoBox/>
                {path === 'joblist' ? <JobListTable/> : path === 'addjob' ? <AddJobForm/> : <JobStreaming/>}
                {/* <AddJobForm /> */}
            </div>
        </Wrapper>
    );
}


export default Management;