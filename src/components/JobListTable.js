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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const JobListTable = () => {
    const { user } = React.useContext(JobLandingContext);
    const [isEmpty, setIsEmpty] = useState(true);
    const [currPage, setCurrPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [firstSlice, setFirstSlice] = useState(0);
    const [lastSlice, setLastSlice] = useState(10);
    const [jobList, setJobList] = useState([]);
    const [jobListStatic, setJobListStatic] = useState([]);

    // Search filter
    const statusOptions = ['Pending', 'Interview', 'Offer', 'Decline'];
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const statusFilter = () => {
        if (value === null) setJobList(jobListStatic);
        else if (value.toLowerCase() === 'interview') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'interview';
            })
            setJobList(newItem);
        } else if (value.toLowerCase() === 'pending') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'pending';
            })
            setJobList(newItem);
        } else if (value.toLowerCase() === 'decline') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'decline';
            })
            setJobList(newItem);
        } else if (value.toLowerCase() === 'offer') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'offer';
            })
            setJobList(newItem);
        }
    }

    const typesOptions = ['Full-time', 'Part-time', 'Remote', 'Internship'];
    const [type, setType] = useState('');
    const [inputType, setInputType] = useState('');
    const typeFilter = () => {
        if (type === null) setJobList(jobListStatic);
        else if (value.toLowerCase() === 'full-time') {
            const newItem = jobList.filter((item) => {
                return item.type === 'full-time';
            })
            setJobList(newItem);
        } else if (type.toLowerCase() === 'part-time') {
            const newItem = jobList.filter((item) => {
                return item.type === 'part-time';
            })
            setJobList(newItem);
        } else if (type.toLowerCase() === 'remote') {
            const newItem = jobList.filter((item) => {
                return item.type === 'remote';
            })
            setJobList(newItem);
        } else if (type.toLowerCase() === 'internship') {
            const newItem = jobList.filter((item) => {
                return item.type === 'internship';
            })
            setJobList(newItem);
        }
    }

    const clearSearchForm = () => {
        setValue('')
        setInputValue('')
        setType('')
        setInputValue('')
    }

    const [deleteItem, setDeleteItem] = useState('none');
    const alertFadeIn = ()=>{
        setDeleteItem('success')
        setTimeout(() => {
            setDeleteItem('')
        }, 2000);
    }

    const handlePageChange = (e) => {
        var curPage = parseInt(e.target.innerText, 10)
        setCurrPage(curPage);
        if (curPage === 1) {
            setFirstSlice(0);
            setLastSlice(10);
        } else {
            setFirstSlice((curPage - 1) * 10);
            setLastSlice((curPage)*10);
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
        statusFilter()
    }, [value, inputValue])

    useEffect(() => {
        typeFilter()
    }, [type, inputType])

    useEffect(() => {
        getJobList()

    }, [deleteItem])




    return (
        <Wrapper className="animate__animated animate__fadeIn">
            <div className="filter_form">
                <div className='inner_table_row1'>
                    <h2>Search Form</h2>
                </div>
                <div className='filter_form_wrapper'>
                    <div className='filter search_filter'>
                        <TextField
                            id="demo-helper-text-aligned-no-helper"
                            label="Position"
                        />
                    </div>
                    <div className='filter status_filter'>
                        <Autocomplete
                            value={value}
                            onChange={(e, newValue) => {
                                setValue(newValue);
                                setJobList(jobListStatic)
                            }}
                            inputValue={inputValue}
                            onInputChange={(e, newInputValue) => {
                                setInputValue(newInputValue);
                                setJobList(jobListStatic)
                            }}
                            id="controllable-states-demo"
                            options={statusOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Status" />}
                        />
                    </div>
                    <div className='filter type_filter'>
                        <Autocomplete
                            value={type}
                            onChange={(e, newValue) => {
                                setType(newValue);
                                setJobList(jobListStatic)
                            }}
                            inputValue={inputType}
                            onInputChange={(e, newInputValue) => {
                                setInputType(newInputValue);
                                setJobList(jobListStatic)
                            }}
                            id="controllable-states-demo"
                            options={typesOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Type" />}
                        />
                    </div>
                    <div className='filter sort_filter'>
                        <Autocomplete
                            value={value}
                            onChange={(e, newValue) => {
                                setValue(newValue);
                                setJobList(jobListStatic)
                            }}
                            inputValue={inputValue}
                            onInputChange={(e, newInputValue) => {
                                setInputType(newInputValue);
                                setJobList(jobListStatic)
                            }}
                            id="controllable-states-demo"
                            options={statusOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Sort" />}
                        />
                    </div>
                    <div>
                        <span className="link clear" onClick={clearSearchForm}>Clear</span>
                    </div>
                </div>

            </div>
            <div className='inner_table'>
                <div className='inner_table_row1'>
                    <h2>All Jobs</h2>
                    <Link className="link" to='/addjob'>Add</Link>
                </div>
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
                {isEmpty ? <p className="empty">Ohh~ Empty</p> : <Pagination className="pagination" count={totalPage} color="primary" page={currPage} onChange={handlePageChange} />}

            </div>

             <Alert className={deleteItem ==='success' ? 'alert animate__animated animate__fadeInRight' : deleteItem ==='none' ? 'none': 'alert animate__animated  animate__fadeOutRight'} severity="error"><strong>Delete success!</strong></Alert>
        </Wrapper>
    );
}



export default JobListTable
