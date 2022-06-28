import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Alert from '@mui/material/Alert';
import Wrapper from '../asserts/wrappers/JobListTable'
import axios from 'axios';
import { BASE_URL } from '../utils/constant'
import { JobLandingContext } from '../context/context';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import SearchForm from './SearchForm'

const JobListTable = () => {
    const { user } = React.useContext(JobLandingContext);
    const [isEmpty, setIsEmpty] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [firstSlice, setFirstSlice] = useState(0);
    const [lastSlice, setLastSlice] = useState(10);
    const [jobList, setJobList] = useState([]);
    const [jobListStatic, setJobListStatic] = useState([]);

    const [deleteItem, setDeleteItem] = useState('none');
    const alertFadeIn = ()=>{
        setDeleteItem('success')
        setTimeout(() => {
            setDeleteItem('')
        }, 2000);
    }

    const handlePageChange = (e, value) => {
        // var curPage = parseInt(e.target.innerText, 10)
        setPage(value);
        if (value === 1) {
            setFirstSlice(0);
            setLastSlice(10);
        } else {
            setFirstSlice((value - 1) * 10);
            setLastSlice((value)*10);
        }
    };

    const getJobList = async () => {
        const response = await axios(`${BASE_URL}/job/${user._id}`)
        setJobList((response.data).sort((a, b) => {
            return a.createAt > b.createAt ? -1 : 1
        }))
        setJobListStatic((response.data).sort((a, b) => {
            return a.createAt > b.createAt ? -1 : 1
        }))

        if (response.data.length !== 0) setIsEmpty(false);
        if ((response.data.length / 10) % 1 === 0) {
            setTotalPage(parseInt(response.data.length/10))
        }else {
            setTotalPage(parseInt(response.data.length/10 + 1))
        }
    }

    const deleteJob = async (job_id) => {
        const response = await axios.delete(`${BASE_URL}/job/${user._id}/${job_id}`)
        if (response) {
            alertFadeIn();
        }
    }

    useEffect(() => {
        getJobList()
    }, [deleteItem])


    return (
        <Wrapper className="animate__animated animate__fadeIn">
            <SearchForm jobList={jobList} setJobList={setJobList} jobListStatic={jobListStatic} />
            <div className='inner_table'>
                <div className='inner_table_row1'>
                    <h2>All Jobs</h2>
                    <Link className="link" to='/addjob'>Add</Link>
                </div>
                <div className='table_wrapper'>
                    <table className='information_table'>
                        <tbody>
                            <tr className='tr'>
                                <th>Position</th>
                                <th>Company</th>
                                <th>Type</th>
                                <th>Date / Time</th>
                                <th>Status</th>
                                <th>Link</th>
                                <th>Delete</th>
                                <th className='last_column'>Update</th>
                            </tr>
                            {jobList.slice(firstSlice, lastSlice).map((job, index) => {
                                return <tr key={index}>
                                    <td>{job.position}</td>
                                    <td>{job.company}</td>
                                    <td>{job.type}</td>
                                    <td>{job.createAt}</td>
                                    <td><span className={job.status === 'pending' ? 'pending' : job.status === 'interview' ? 'interview' : job.status === 'offer' ? 'offer' : 'decline'}>{job.status}</span></td>
                                    <td><a className='no_underline' target="_blank" href={job.applyUrl} rel="noreferrer"><Button variant="text">Link</Button></a></td>
                                    <td>
                                        <IconButton aria-label="delete" size="large" className='delete_icon'>
                                            <DeleteIcon fontSize="small" onClick={() => deleteJob(job._id)} />
                                        </IconButton>
                                    </td>
                                    <td>
                                        <Link to={"/jobupdate/" + job._id}>
                                            <IconButton aria-label="fingerprint" color="success">
                                                <Fingerprint />
                                            </IconButton>
                                        </Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                {isEmpty ? <p className="empty">Ohh~ Empty</p> : <Pagination className="pagination" count={totalPage} color="primary" page={page} onChange={handlePageChange} />}

            </div>

             <Alert className={deleteItem ==='success' ? 'alert animate__animated animate__fadeInRight' : deleteItem ==='none' ? 'none': 'alert animate__animated  animate__fadeOutRight'} severity="error"><strong>Delete success!</strong></Alert>
        </Wrapper>
    );
}



export default JobListTable
