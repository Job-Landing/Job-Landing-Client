import React, {useEffect, useState} from 'react'
import JobCard from "../../components/jobCard";
import Wrapper from "../../assets/wrappers/List";

const JobAPI = process.env.REACT_APP_BACKEND + "/job/" + process.env.REACT_APP_USER

const List = (() => {
    const [jobs, setJobs] = useState([]);

    function createCard(job) {
        const {company, position, jobLocation, applyUrl} = job;
        return <JobCard company={company} position={position}
                        jobLocation={jobLocation} applyUrl={applyUrl}
        />
    }

    function listJobs(jobs) {
        setJobs(jobs.map(createCard));
    }

    useEffect(() => {
        async function getJobs() {
            const response = await fetch(JobAPI);
            const records = await response.json();
            listJobs(records)
        }

        return getJobs();
    });

    return (
        <Wrapper>

            <h1>{jobs.length} jobs found </h1>
            <div className="jobBoard">
                {jobs}
            </div>
        </Wrapper>
    )

})

export default List
