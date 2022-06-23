import React,{useState, useEffect} from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Alert from '@mui/material/Alert';
import Wrapper from '../asserts/wrappers/JobListTable'
import axios from 'axios';
import { BASE_URL } from '../utils/constant'
import { JobLandingContext } from '../context/context';
import Button from '@mui/material/Button';

const JobListTable = () => {
    const { user } = React.useContext(JobLandingContext);
    const [jobList, setJobList] = useState([]);
    const [deleteItem, setDeleteItem] = useState('none');
    const alertFadeIn = ()=>{
        setDeleteItem('success')
        setTimeout(() => {
            setDeleteItem('')
        }, 2000);
    }

    const getJobList = async () => {
        const response = await axios(`${BASE_URL}/job/${user._id}`)
        // console.log(response.data)
        setJobList(response.data)
    }

    const deleteJob = async (job_id) => {
        const response = await axios.delete(`${BASE_URL}/job/${user._id}/${job_id}`)
        if (response) {
            alertFadeIn();
        }
    }

    useEffect(() => {
        getJobList()
    },[deleteJob])


    return (
        <Wrapper className="animate__animated animate__fadeIn">
            <div className='inner_table'>
                <h2>All Jobs</h2>
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
                        {jobList.map((job, index) => {
                            return <tr key={index}>
                                <td>{job.position}</td>
                                <td>{job.company}</td>
                                <td>{job.type}</td>
                                <td>{job.createAt}</td>
                                <td><span className={job.status === 'pending' ? 'pending' : job.status === 'interview' ? 'interview' : job.status === 'offer' ? 'offer' : 'decline'}>{job.status}</span></td>
                                <td><a className='no_underline' target="_blank" href={job.applyUrl} rel="noreferrer"><Button variant="text">Link</Button></a></td>
                                <td>
                                    <IconButton aria-label="delete" size="large" className='delete_icon'>
                                        <DeleteIcon fontSize="small" onClick={()=>deleteJob(job._id)} />
                                    </IconButton>
                                </td>
                                <td>
                                    <IconButton aria-label="fingerprint" color="success">
                                        <Fingerprint />
                                    </IconButton>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
             <Alert className={deleteItem ==='success' ? 'alert animate__animated animate__fadeInRight' : deleteItem ==='none' ? 'none': 'alert animate__animated  animate__fadeOutRight'} severity="error"><strong>Delete success!</strong></Alert>
        </Wrapper>
    );
}



export default JobListTable
