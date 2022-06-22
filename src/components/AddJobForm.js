import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from 'react-date-picker';
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/AddJobForm'
import {BASE_URL} from '../utils/constant'

const initialState = {
    company: '',
    position: '',
    location: '',
    type: '',
    status: '',
    applyUrl: '',
    createdBy: 'test@test.com'
}

async function submitJobForm(email, job) {
    const {company, position, location, type, status, applyUrl} = job;
    const newJob = {
        company: company,
        position: position,
        location: location,
        type: type,
        status: status,
        applyUrl: applyUrl,
        createdBy: email
    };

    return fetch(`${BASE_URL}/job`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    })
        .then(data => data.json())
        .catch(error => {
            window.alert(error);
            return;
        });
}

const AddJobForm = () => {
    const [job, setValues] = useState(initialState);
    const [date, setDate] = useState(new Date());

    const submitJob = (e) => {
        console.log(`job at ${job.company} submitted!`);
        const response = submitJobForm("test@test.com", job);
    }
    const clearJob = (e) => {

    }
    // get form value
    const handleChange = (e) => {
        setValues({...job, [e.target.name]: e.target.value})
    }

    return (
        <Wrapper>
            <div className="form_wrapper">
                <form>
                    <div className="form_row1">
                        <div>
                            <label htmlFor="position" className="label">Position</label> <br/>
                            <input className="input" type="text" name="position" onChange={handleChange}
                                   value={job.position}/>
                        </div>
                        <div>
                            <label htmlFor="company" className="label">Company</label> <br/>
                            <input className="input" type="text" name="company" onChange={handleChange}
                                   value={job.company}/>
                        </div>
                    </div>
                    <div className="form_row1">
                        <div>
                            <label htmlFor="location" className="label">Location</label> <br/>
                            <input className="input" type="text" name="location" onChange={handleChange}
                                   value={job.location}/>
                        </div>
                        <div>
                            <label htmlFor="location" className="label">Job Page Url</label> <br/>
                            <input className="input" type="text" name="applyUrl" onChange={handleChange}
                                   value={job.applyUrl}/>
                        </div>
                    </div>

                    <div className="form_row2">
                        <div>
                            <Box sx={{minWidth: 120}} className='box'>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select1"
                                        name="status"
                                        value={job.status}
                                        label="Status"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value='pending'>Pending</MenuItem>
                                        <MenuItem value='interview'>Interview</MenuItem>
                                        <MenuItem value='decline'>Decline</MenuItem>
                                        <MenuItem value='offer'>Offer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div>
                            <Box sx={{minWidth: 120}} className='box'>
                                <FormControl fullWidth>
                                    <InputLabel id="type-label">Type</InputLabel>
                                    <Select
                                        labelId="type-label"
                                        id="demo-simple-select2"
                                        name="type"
                                        value={job.type}
                                        label="Type"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value='full-time'>Full Time</MenuItem>
                                        <MenuItem value='part-time'>Part Time</MenuItem>
                                        <MenuItem value='internship'>Internship</MenuItem>
                                        <MenuItem value='remote'>Remote</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div>
                            <DatePicker name="date" onChange={setDate} value={date} className='date_picker'/>
                        </div>
                    </div>
                    <div className='btn'>
                        <Button variant="contained" className='submit' onClick={submitJob}>Submit</Button>
                        <Button variant="contained" className='clear' onClick={clearJob}>Clear</Button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}


export default AddJobForm
