import React,{useState} from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from 'react-date-picker';
import Button from '@mui/material/Button';

const AddJobForm = () => {

    const [status, setStatus] = React.useState('');
    const [type, setType] = React.useState('');
    const [value, onChange] = useState(new Date());

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    return (
        <Wrapper>
            <div className="form_wrapper">
                <form>
                    <div className="form_row1">
                        <div>
                            <label htmlFor="position" className="label">Position</label> <br />
                            <input className="input" type="text" name="position" />
                        </div>
                        <div>
                            <label htmlFor="position" className="label">Company</label> <br />
                            <input className="input" type="text" name="Company" />
                        </div>
                        <div>
                            <label htmlFor="position" className="label">Location</label> <br />
                            <input className="input" type="text" name="location" />
                        </div>
                    </div>

                    <div className="form_row2">
                        <div>
                            <Box sx={{ minWidth: 120 }} className='box'>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select1"
                                        value={status}
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
                            <Box sx={{ minWidth: 120 }} className='box'>
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
                            <DatePicker onChange={onChange} value={value} className='date_picker' />
                        </div>
                    </div>
                    <div className='btn'>
                        <Button variant="contained" className='submit'>Submit</Button>
                        <Button variant="contained" className='clear'>Clear</Button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding-top: 20px;

    .form_wrapper{
        width: 100%;
        background-color:white;
        color: black;
        border-radius: 15px;
        padding: 30px 0 30px 0;
        background: #F6F6F6;
    }


    .form_row1{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 50px;
        padding: 0 40px 20px 20px;
    }
    .form_row2{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 40px;
        padding: 0 30px 20px 20px;
    }
    .label{
        font-weight: 600;
        font-size: 18px;
        margin-left: 8px;
    }
    .input{
        width: 100%;
        padding: 15px 0 15px 10px;
        border-radius: 15px;
        border:none;
        margin-top: 15px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: 0.5s;
    }
    .box{
        background-color: white;
    }

    .date_picker{
        height: 55px;
        width: 100%;
        background-color:white;
        border-color:#c4c4c4;
    }

    .react-date-picker, .react-date-picker__wrapper, .MuiOutlinedInput-root, .MuiSelect-select, .MuiFormControl-root, .MuiBox-root{
        /* background: red; */
        outline: none;
        border-radius: 10px;
        border-color:#c4c4c4;
    }
    .react-date-picker__inputGroup__month{
        margin-left: 10px;
    }
    .react-date-picker__wrapper:hover{
        border-color:black;
    }
    .submit{
        background-color: #8489ba;
        margin-right: 10px;
    }
    .submit:hover{
        background-color: #8f93b8;
    }
    .clear{
        background-color: #969696;
        margin-right: 30px;
    }
    .clear:hover{
        background-color: #a1a1a1;
    }
    .btn{
        width: 100%;
        display: flex;
        /* padding: 0 20px 0 20px; */
        justify-content:flex-end;
    }

`

export default AddJobForm
