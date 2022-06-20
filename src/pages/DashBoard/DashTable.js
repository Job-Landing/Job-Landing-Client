import React, {useState} from 'react';
import Wrapper from "../../assets/wrappers/DashTable";
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';


const DashboardTable = () => {
    return (
        <Wrapper>
            <div className='table_wrapper'>
                <div className='table'>
                    <div className='inner_table'>
                        <h2>Information</h2>
                        <table className='information_table'>
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
                        </table>
                        <Button className='view_all' variant="text">View All <ChevronRightRoundedIcon/> </Button>
                    </div>

                    <div className='inner_table'>
                        <h2>Interview</h2>
                        <table className='information_table'>
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
                        </table>
                        <Button className='view_all' variant="text">View All <ChevronRightRoundedIcon/> </Button>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}

export default DashboardTable;