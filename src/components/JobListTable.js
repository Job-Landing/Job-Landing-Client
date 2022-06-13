import React,{useState} from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';

const JobListTable = () => {
    return (
        <Wrapper>
            <div className='inner_table'>
                <h2>Job List</h2>
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
                                    <DeleteIcon fontSize="small" />
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
                                    <DeleteIcon fontSize="small" />
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
                                    <DeleteIcon fontSize="small" />
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
                                    <DeleteIcon fontSize="small" />
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
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding-top: 20px;

    /* Table */
    .inner_table{
        background-color: rgba(50, 50, 64, 0.79);
        border-radius: 15px;
        padding: 0 15px 15px 15px;
    }
    h2{
        margin: 0;
        padding: 20px 0 0 0;
        padding-left: 20px;
    }
    table, th, td {
        border-collapse: collapse;
    }
    .information_table{
        padding: 20px;
        margin-top: 20px;
    }
    .tr{
        background-color: #8489ba;
    }

    th{
        padding: 10px 0 10px 0;
    }
    th:nth-child(1){
        text-align: left;
        border-radius: 15px 0 0 15px;
        padding-left: 15px;
    }
    .last_column{
        border-radius: 0 15px 15px 0;
        padding-right: 15px;
    }
    tr td:nth-child(1){
        padding: 8px 5px 8px 15px;
    }
    tr td:nth-child(1){
        width: 30%;
    }
    tr td:nth-child(2),tr td:nth-child(3){
        width: 20%;
    }
    tr td:nth-child(4),tr td:nth-child(5), tr td:nth-child(6){
        width: 20%;
    }
    tr td:nth-child(2),tr td:nth-child(3),tr td:nth-child(4),tr td:nth-child(5),tr td:nth-child(6){
        text-align: center;
        justify-content: center;
    }
    tr td:nth-child(6){
        padding-right: 15px;
    }
    .view_all{
        float: right;
        margin-right: 10px;
    }
    td{
        font-size: 14px;
    }
    .interview{
        background-color: #D9D7F1;
        color: #7166EC;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }
    .offer{
        background-color: #eaf8e2;
        color: green;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }
    .pending{
        background-color: #fdf5d1;
        color: #b1832e;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }
    .decline{
        background-color: #FCDAD7;
        color: #a9313a;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }

    .delete_icon{
        color: white;
    }

`

export default JobListTable
