import React, {useState, useEffect} from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Alert from '@mui/material/Alert';
import Wrapper from '../asserts/wrappers/JobListTable'
import axios from 'axios';
import {BASE_URL} from '../utils/constant'

const JobListTable = () => {
    const [deleteItem, setDeleteItem] = useState('none');
    const alertFadeIn = () => {
        setDeleteItem('success')
        setTimeout(() => {
            setDeleteItem('')
        }, 2000);
    }
    const [jobList, setList] = useState([]);

    const getJobList = async () => {
        const response = await axios(`${BASE_URL}/job/62b39778f055ba465b4596fb`)
        if (response.status === 200) {
            setList(response.data)
            console.log(response.data)
            // console.log(streamItem)
        }
    }

    const deleteJob = async (id) => {
        console.log(id);
        fetch(`${BASE_URL}/job/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                alertFadeIn();
                return response.json()
            }).then(
            getJobList()
        );
    }

    useEffect(() => {
        getJobList()
    }, [])

    return (
        <Wrapper className="animate__animated animate__fadeIn">
            <div className='inner_table'>
                <h2>All Jobs</h2>
                <table className='information_table'>
                    <tbody>
                    <tr className='tr'>
                        <th>Position</th>
                        <th>Company</th>
                        <th>Date / Time</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th className='last_column'>Update</th>
                    </tr>
                    {jobList.map((item) => {
                        return <tr key={item._id}>
                            <td>{item.position}</td>
                            <td>{item.company}</td>
                            <td>May 23, 2022</td>
                            <td><span className={item.status}>{item.status}</span></td>
                            <td>
                                <IconButton aria-label="delete" size="large" className='delete_icon'>
                                    <DeleteIcon fontSize="small" onClick={() => {
                                        deleteJob(item._id)
                                    }}/>
                                </IconButton>
                            </td>
                            <td>
                                <IconButton aria-label="fingerprint" color="success">
                                    <Fingerprint/>
                                </IconButton>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
            <Alert
                className={deleteItem === 'success' ? 'alert animate__animated animate__fadeInRight' : deleteItem === 'none' ? 'none' : 'alert animate__animated  animate__fadeOutRight'}
                severity="error"><strong>Delete success!</strong></Alert>
        </Wrapper>
    );
}


export default JobListTable
