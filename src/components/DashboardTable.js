import React, {useState} from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const DashboardTable = () => {
    return (
        <Wrapper className='animate__animated animate__zoomInDown'>
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

const Wrapper = styled.section`
    margin-top: 40px;
    .table{
        display: grid;
        grid-template-columns: 3fr 2fr;
        column-gap: 20px;
    }
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
    }
    tr td:nth-child(1){
        padding: 8px 5px 8px 15px;
    }
    tr td:nth-child(1), tr td:nth-child(2),tr td:nth-child(3),tr td:nth-child(4),tr td:nth-child(5){
         width: 20%;
    }
    tr td:nth-child(2),tr td:nth-child(3),tr td:nth-child(4),tr td:nth-child(5){
        text-align: center;
        justify-content: center;
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
`

export default DashboardTable;