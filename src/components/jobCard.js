import React from 'react'
import Wrapper from '../assets/wrappers/jobCard';

const jobCard = (params) => {
    async function handleDelete() {
        await fetch(`${process.env.REACT_APP_BACKEND}/job/${params._id}`, {
            method: "DELETE"
        });
    }

    return (
        <Wrapper>
            <div className='card'>
                <h2>{params.position}</h2>
                <p>{params.company}</p>
                <p>{params.jobLocation}</p>
                <p>{params.applyUrl}</p>
                <button value={params._id} onClick={handleDelete}>delete</button>
            </div>
        </Wrapper>
    );
}

export default jobCard
