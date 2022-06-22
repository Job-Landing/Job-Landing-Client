import React, {useState, useEffect} from 'react'
import Wrapper from '../asserts/wrappers/JobStreaming'
import axios from 'axios';
import {BASE_URL} from '../utils/constant'

const JobStreaming = () => {
    const path = window.location.pathname.replace("/", "")

    const [streamItem, setStreamItem] = useState([]);

    const getJobStreamingList = async () => {
        const response = await axios(`${BASE_URL}/stream`)
        if (response.status === 200) {
            setStreamItem(response.data)
            console.log(response.data)
            // console.log(streamItem)
        }
    }

    useEffect(() => {
        getJobStreamingList()
    }, [])

    return (
        <Wrapper className="animate__animated animate__fadeIn">
            <div className='inner_table'>
                <h2>Job Streaming</h2>
                <table className='information_table'>
                    <tbody>
                    <tr className='tr'>
                        <th>Position</th>
                        <th>Company</th>
                        <th>Apply Url</th>
                        <th>Create Time</th>
                        <th className='last_column'>Status</th>
                    </tr>
                    {path === 'jobstreaming' ?
                        streamItem.map((item) => {
                            return <tr key={item._id}>
                                <td>{item.position}</td>
                                <td>{item.company}</td>
                                <td><a href={item.applyUrl}>{item.applyUrl}</a></td>
                                <td>May 23, 2022</td>
                                <td><span className='pending'>pending</span></td>
                            </tr>
                        })
                        :
                        streamItem.slice(0, 5).map((item) => {
                            return <tr key={item._id}>
                                <td>{item.position}</td>
                                <td>{item.company}</td>
                                <td>{item.applyUrl}</td>
                                <td>May 23, 2022</td>
                                <td><span className='pending'>pending</span></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
}


export default JobStreaming
