import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Wrapper from '../asserts/wrappers/DashboardTable'


const DashboardTable = ({jobList}) => {

    return (
        <Wrapper className='animate__animated animate__fadeIn'>
            <div className='table_wrapper'>
                <div className='table'>
                    <div className='inner_table'>
                        <h2>Information</h2>
                        <table className='information_table'>
                            <tbody>
                                <tr className='tr'>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th>Date / Time</th>
                                    <th>Status</th>
                                    <th className='last_column'>Action</th>
                                </tr>
                                {jobList.slice(0, 5).map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.position}</td>
                                        <td>{item.company}</td>
                                        <td>{item.createAt}</td>
                                        <td><span className={item.status === 'pending' ? 'pending' : item.status ==='interview' ? 'interview' : item.status === 'decline' ? 'decline' : 'offer'}>{item.status}</span></td>
                                        <td>Detail</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <Link to='/joblist'><Button className='view_all' variant="text">View All <ChevronRightRoundedIcon/> </Button></Link>
                    </div>

                    <div className='inner_table'>
                        <h2>Interview</h2>
                        <table className='information_table'>
                            <tbody>
                                <tr className='tr'>
                                    <th>Position</th>
                                    <th>Company</th>
                                    <th className='last_column'>Date / Time</th>
                                </tr>
                                {jobList.filter((item1 => item1.status === 'interview')).map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.position}</td>
                                        <td>{item.company}</td>
                                        <td>{item.createAt}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <Link to='/joblist'><Button className='view_all' variant="text">View All <ChevronRightRoundedIcon/> </Button></Link>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}

export default DashboardTable;