import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from 'react-date-picker';
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/AddJobForm'

// async function submitJobForm(email, name) {
//     return fetch('URL', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: email,
//             name: name
//         })
//     })
//     .then(data => data.json())
// }

const AddJobForm = () => {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState(new Date());

    const submitJob = (e) => {

    }
    const clearJob = (e) => {

    }
    // get form value
    const onChangePassword = (e) => {
        setPosition(e.target.value)
    }
    const onChangeCompany = (e) => {
        setCompany(e.target.value)
    }
    const onChangeLocation = (e) => {
        setLocation(e.target.value)
    }
    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
    };
    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    return (
        <Wrapper>
            <div className="form_wrapper">
                <form>
                    <div className="form_row1">
                        <div>
                            <label htmlFor="position" className="label">Position</label> <br/>
                            <input className="input" type="text" name="position" onChange={onChangePassword}
                                   value={position}/>
                        </div>
                        <div>
                            <label htmlFor="company" className="label">Company</label> <br/>
                            <input className="input" type="text" name="Company" onChange={onChangeCompany}
                                   value={company}/>
                        </div>
                        <div>
                            <label htmlFor="location" className="label">Location</label> <br/>
                            <input className="input" type="text" name="location" onChange={onChangeLocation}
                                   value={location}/>
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
                                        value={status}
                                        label="Status"
                                        onChange={handleChangeStatus}
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
                                        value={type}
                                        label="Type"
                                        onChange={handleTypeChange}
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
                            <DatePicker onChange={setDate} value={date} className='date_picker'/>
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
