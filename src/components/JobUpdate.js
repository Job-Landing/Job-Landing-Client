import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import DatePicker from 'react-date-picker';
import Button from '@mui/material/Button';
import Wrapper from '../asserts/wrappers/AddJobForm';
import { BASE_URL } from '../utils/constant';
import { format } from 'date-fns';
import axios from 'axios';
import { JobLandingContext } from '../context/context';
import Alert from '@mui/material/Alert';

const JobUpdate = () => {
  let { jobId } = useParams();
  const [initialState, setInitialState] = useState({});
  const [singleItem, setSingleItem] = useState({});

  const [updateStatus, setUpdateStatus] = useState('none');
  const alertFadeIn = () => {
    setUpdateStatus('success');
    setTimeout(() => {
      setUpdateStatus('');
    }, 2000);
  };
  const { user } = React.useContext(JobLandingContext);
  const [date, setDate] = useState(new Date());

  async function submitJobForm(e) {
    e.preventDefault();
    const { company, position, location, type, status, applyUrl, comment } =
      singleItem;
    console.log('newJob: ', singleItem);
    const newJob = {
      company: company,
      position: position,
      location: location,
      type: type,
      status: status,
      applyUrl: applyUrl,
      createAt: format(date, 'yyyy-MM-dd'),
      comment: comment,
      _id: jobId,
    };
    console.log(newJob);

    const response = await axios.put(
      `${BASE_URL}/job/${user._id}/${jobId}`,
      newJob
    );
    if (response) {
      alertFadeIn();
    }
  }

  const recoverJob = (e) => {
    setSingleItem(initialState);
  };
  // get form value
  const handleChange = (e) => {
    setSingleItem({ ...singleItem, [e.target.name]: e.target.value });
  };

  const getSingleItem = async () => {
    const response = await axios(`${BASE_URL}/job/${user._id}`);
    for (var i = 0; i < response.data.length; i++) {
      if (response.data[i]._id === jobId) {
        setInitialState(response.data[i]);
        setSingleItem(response.data[i]);
        console.log(response.data[i]);
      }
    }
  };

  useEffect(() => {
    getSingleItem();
  }, []);

  return (
    <Wrapper>
      <div className="form_wrapper">
        <form onSubmit={submitJobForm}>
          <div className="form_row1">
            <div>
              <label htmlFor="position" className="label">
                Position
              </label>{' '}
              <br />
              <input
                className="input"
                type="text"
                name="position"
                onChange={handleChange}
                value={singleItem.position}
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="label">
                Company
              </label>{' '}
              <br />
              <input
                className="input"
                type="text"
                name="company"
                onChange={handleChange}
                value={singleItem.company}
                required
              />
            </div>
          </div>
          <div className="form_row1">
            <div>
              <label htmlFor="location" className="label">
                Location
              </label>{' '}
              <br />
              <input
                className="input"
                type="text"
                name="location"
                onChange={handleChange}
                value={singleItem.location}
                required
              />
            </div>
            <div>
              <label htmlFor="applyUrl" className="label">
                Job Page Url
              </label>{' '}
              <br />
              <input
                className="input"
                type="text"
                name="applyUrl"
                onChange={handleChange}
                value={singleItem.applyUrl}
                required
              />
            </div>
          </div>
          <div className="form_row2">
            <div>
              <Box sx={{ minWidth: 120 }} className="box">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select1"
                    name="status"
                    value={singleItem.status + ''}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="interview">Interview</MenuItem>
                    <MenuItem value="decline">Decline</MenuItem>
                    <MenuItem value="offer">Offer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div>
              <Box sx={{ minWidth: 120 }} className="box">
                <FormControl fullWidth>
                  <InputLabel id="type-label">Type</InputLabel>
                  <Select
                    labelId="type-label"
                    id="demo-simple-select2"
                    name="type"
                    value={singleItem.type + ''}
                    label="Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="full-time">Full Time</MenuItem>
                    <MenuItem value="part-time">Part Time</MenuItem>
                    <MenuItem value="internship">Internship</MenuItem>
                    <MenuItem value="remote">Remote</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div>
              <DatePicker
                name="date"
                onChange={setDate}
                value={date}
                className="date_picker"
              />
            </div>
          </div>
          <div className="form_row1">
            <TextField
              id="outlined-multiline-static"
              label="Comment"
              multiline
              rows={3}
              value={singleItem.comment + ''}
              name="comment"
              onChange={handleChange}
            />
          </div>
          <div className="btn">
            <Button variant="contained" className="submit" type="submit">
              Update
            </Button>
            <Button variant="contained" className="clear" onClick={recoverJob}>
              Recover
            </Button>
          </div>
        </form>
        <Alert
          className={
            updateStatus === 'success'
              ? 'alert animate__animated animate__fadeInRight'
              : updateStatus === 'none'
              ? 'none'
              : 'alert animate__animated  animate__fadeOutRight'
          }
          severity="success"
        >
          <strong>Update success!</strong>
        </Alert>
      </div>
    </Wrapper>
  );
};

export default JobUpdate;
