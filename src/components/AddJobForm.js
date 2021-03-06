import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import DatePicker from 'react-date-picker';
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/AddJobForm'
import { BASE_URL } from '../utils/constant'
import { format } from "date-fns";
import axios from "axios"
import { JobLandingContext } from '../context/context';
import Alert from '@mui/material/Alert';

const AddJobForm = () => {
    const [updateStatus, setUpdateStatus] = useState('none');
    const alertFadeIn = ()=>{
        setUpdateStatus('success')
        setTimeout(() => {
            setUpdateStatus('')
        }, 2000);
    }
    const { user } = React.useContext(JobLandingContext);
    const [date, setDate] = useState(new Date());
    const initialState = {
        company: '',
        position: '',
        location: '',
        type: 'full-time',
        status: 'pending',
        applyUrl: '',
        comment: ''
    }
    const [job, setValues] = useState(initialState);

    async function submitJobForm(e) {
        e.preventDefault();
        const {company, position, location, type, status, applyUrl, comment} = job;
        const newJob = {
            company: company,
            position: position,
            location: location,
            type: type,
            status: status,
            applyUrl: applyUrl,
            createAt: format(date, "yyyy-MM-dd"),
            comment: comment
        };
        console.log(newJob)

        const response = await axios.post(`${BASE_URL}/job/${user._id}`, newJob)
        if (response) {
            alertFadeIn()
            clearJob()
        }
            // .catch(error => {
            //     this.setState({ errorMessage: error.message });
            //     console.error('There was an error!', error);
            // });

    }

    const clearJob = (e) => {
        setValues(initialState)
    }
    // get form value
    const handleChange = (e) => {
        setValues({ ...job, [e.target.name]: e.target.value })
    }

    return (
        <Wrapper>
            <div className="form_wrapper">
                <form onSubmit={submitJobForm}>
                    <div className="form_row1">
                        <div>
                            <label htmlFor="position" className="label">Position</label> <br/>
                            <input className="input" type="text" name="position" onChange={handleChange}
                                   value={job.position} required />
                        </div>
                        <div>
                            <label htmlFor="company" className="label">Company</label> <br/>
                            <input className="input" type="text" name="company" onChange={handleChange}
                                   value={job.company} required />
                        </div>
                    </div>
                    <div className="form_row1">
                        <div>
                            <label htmlFor="location" className="label">Location</label> <br/>
                            <input className="input" type="text" name="location" onChange={handleChange}
                                   value={job.location} required />
                        </div>
                        <div>
                            <label htmlFor="applyUrl" className="label">Job Page Url</label> <br/>
                            <input className="input" type="text" name="applyUrl" onChange={handleChange}
                                   value={job.applyUrl} required />
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
                    <div className="form_row1">
                        <TextField
                            id="outlined-multiline-static"
                            label="Comment"
                            multiline
                            rows={3}
                            value={job.comment}
                            name='comment'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='btn'>
                        <Button variant="contained" className='submit' type='submit'>Submit</Button>
                        <Button variant="contained" className='clear' onClick={clearJob}>Clear</Button>
                    </div>
                </form>
                 <Alert className={updateStatus ==='success' ? 'alert animate__animated animate__fadeInRight' : updateStatus ==='none' ? 'none': 'alert animate__animated  animate__fadeOutRight'} severity="success"><strong>Add success!</strong></Alert>
            </div>
        </Wrapper>
    );
}


export default AddJobForm