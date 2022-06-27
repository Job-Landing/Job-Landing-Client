import React,{useState, useEffect} from 'react'
import Wrapper from '../asserts/wrappers/JobStreaming'
import Button from '@mui/material/Button';
import axios from 'axios';
import { BASE_URL } from '../utils/constant'

const JobStreaming = () => {
    const path = window.location.pathname.replace("/", "")

    const [streamItem, setStreamItem] = useState([]);

    const getJobStreamingList = async () => {
        const response = await axios(`${BASE_URL}/stream`)
        if (response.status === 200) {
            // setStreamItem(response.data)
            setStreamItem((response.data).sort((a, b) => {
                return a.createAt > b.createAt ? -1 : 1
            }))
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
                            <th>Type</th>
                            <th>Create Time</th>
                            <th className='last_column'>Link</th>
                        </tr>
                        {path === 'jobstreaming' ?
                            streamItem.map((item) => {
                                return <tr key={item._id}>
                                    <td>{item.position}</td>
                                    <td>{item.company}</td>
                                    <td>{item.type}</td>
                                    <td>{item.createAt.substring(0,10)}</td>
                                    <td><a className='no_underline' target="_blank" href={item.applyUrl} rel="noreferrer"><Button variant="text">Link</Button></a></td>
                                </tr>
                            })
                        :
                            streamItem.slice(0, 5).map((item) => {
                                return <tr key={item._id}>
                                    <td>{item.position}</td>
                                    <td>{item.company}</td>
                                    <td>{item.type}</td>
                                    <td>{item.createAt.substring(0,10)}</td>
                                    <td><a className='no_underline' target="_blank" href={item.applyUrl} rel="noreferrer"><Button variant="text">Link</Button></a></td>
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
