import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Wrapper from '../asserts/wrappers/DashboardTable'
import axios from 'axios';
import {BASE_URL} from '../utils/constant'


const DashboardTable = () => {
    const [dashboardItem, setDashboardItem] = useState([]);

    const getDashboardItemList = async () => {
        const response = await axios(`${BASE_URL}/job/62b39778f055ba465b4596fb`)
        if (response.status === 200) {
            setDashboardItem(response.data)
            console.log(response.data)
            // console.log(streamItem)
        }
    }

    useEffect(() => {
        getDashboardItemList()
    }, [])

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
                            {/*TODO: link DB*/}
                            {dashboardItem.map((item) => {
                                return <tr key={item._id}>
                                    <td>{item.position}</td>
                                    <td>{item.company}</td>
                                    <td>May 23, 2022</td>
                                    <td><span className={item.status}>{item.status}</span></td>
                                    <td>Detail</td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                        <a href="/joblist"><Button className='view_all' variant="text">View
                                                                                       All <ChevronRightRoundedIcon/>
                        </Button></a>

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

                            {/*TODO: link DB*/}
                            <tr>
                                <td>Software Engineer Intern</td>
                                <td>Google</td>
                                <td>May 23, 2022</td>
                            </tr>

                            </tbody>
                        </table>
                        <a href="/job/interview"><Button className='view_all' variant="text">View
                                                                                             All <ChevronRightRoundedIcon/>
                        </Button></a>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}

export default DashboardTable;