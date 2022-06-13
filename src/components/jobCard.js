import React from 'react'
import Wrapper from '../assets/wrappers/jobCard';

const jobCard = (params) => {
    return (
        <Wrapper>
            <div className='card'>
                <h2>{params.position}</h2>
                <p>{params.company}</p>
                <p>{params.jobLocation}</p>
                <p>{params.applyUrl}</p>
            </div>
        </Wrapper>
    );
}

export default jobCard
