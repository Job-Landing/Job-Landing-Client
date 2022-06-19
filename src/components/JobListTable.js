import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Alert from '@mui/material/Alert';
import Wrapper from '../asserts/wrappers/JobListTable'
import axios from 'axios';
import { BASE_URL } from '../utils/constant'

const JobListTable = () => {
    const [deleteItem, setDeleteItem] = useState('none');
    const alertFadeIn = ()=>{
        setDeleteItem('success')
        setTimeout(() => {
            setDeleteItem('')
        }, 2000);
    }

    const getJobList = async () => {
        const response = await axios(`${BASE_URL}/job`)
    }


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
                        <tr>
                            <td>Software Engineer Intern</td>
                            <td>Google</td>
                            <td>May 23, 2022</td>
                            <td><span className='pending'>pending</span></td>
                            <td>
                                <IconButton aria-label="delete" size="large" className='delete_icon'>
                                    <DeleteIcon fontSize="small" onClick={alertFadeIn} />
                                </IconButton>
                            </td>
                            <td>
                                <IconButton aria-label="fingerprint" color="success">
                                    <Fingerprint />
                                </IconButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Software Engineer Intern</td>
                            <td>Google</td>
                            <td>May 23, 2022</td>
                            <td><span className='interview'>interview</span></td>
                            <td>
                                <IconButton aria-label="delete" size="large" className='delete_icon'>
                                    <DeleteIcon fontSize="small" onClick={alertFadeIn} />
                                </IconButton>
                            </td>
                            <td>
                                <IconButton aria-label="fingerprint" color="success">
                                    <Fingerprint />
                                </IconButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Software Engineer Intern</td>
                            <td>Google</td>
                            <td>May 23, 2022</td>
                            <td><span className='offer'>offer</span></td>
                            <td>
                                <IconButton aria-label="delete" size="large" className='delete_icon'>
                                    <DeleteIcon fontSize="small"  onClick={alertFadeIn} />
                                </IconButton>
                            </td>
                            <td>
                                <IconButton aria-label="fingerprint" color="success">
                                    <Fingerprint />
                                </IconButton>
                            </td>
                        </tr>
                        <tr>
                            <td>Software Engineer Intern</td>
                            <td>Google</td>
                            <td>May 23, 2022</td>
                            <td><span className='decline'>decline</span></td>
                            <td>
                                <IconButton aria-label="delete" size="large" className='delete_icon'>
                                    <DeleteIcon fontSize="small" onClick={alertFadeIn} />
                                </IconButton>
                            </td>
                            <td>
                                <IconButton aria-label="fingerprint" color="success">
                                    <Fingerprint />
                                </IconButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
             <Alert className={deleteItem ==='success' ? 'alert animate__animated animate__fadeInRight' : deleteItem ==='none' ? 'none': 'alert animate__animated  animate__fadeOutRight'} severity="error"><strong>Delete success!</strong></Alert>
        </Wrapper>
    );
}



export default JobListTable
