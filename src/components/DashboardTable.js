import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Wrapper from '../asserts/wrappers/DashboardTable'

const DashboardTable = () => {
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
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                    <td><span className='pending'>pending</span></td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                    <td><span className='interview'>interview</span></td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                    <td><span className='offer'>offer</span></td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                    <td><span className='decline'>decline</span></td>
                                    <td>Detail</td>
                                </tr>
                            </tbody>
                        </table>
                        <Button className='view_all' variant="text">View All <ChevronRightRoundedIcon/> </Button>
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
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                </tr>
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                </tr>
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                </tr>
                                <tr>
                                    <td>Software Engineer Intern</td>
                                    <td>Google</td>
                                    <td>May 23, 2022</td>
                                </tr>
                            </tbody>
                        </table>
                        <Button className='view_all' variant="text">View All <ChevronRightRoundedIcon/> </Button>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}

export default DashboardTable;