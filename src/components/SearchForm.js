import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchForm = ({jobList, setJobList, jobListStatic}) => {
    // Search filter
    const statusOptions = ['Pending', 'Interview', 'Offer', 'Decline'];
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const statusFilter = () => {
        if (value === null) setJobList(jobListStatic);
        else if (value.toLowerCase() === 'interview') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'interview';
            })
            setJobList(newItem);
        } else if (value.toLowerCase() === 'pending') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'pending';
            })
            setJobList(newItem);
        } else if (value.toLowerCase() === 'decline') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'decline';
            })
            setJobList(newItem);
        } else if (value.toLowerCase() === 'offer') {
            setJobList(jobListStatic)
            const newItem = jobList.filter((item) => {
                return item.status === 'offer';
            })
            setJobList(newItem);
        }
    }

    const typesOptions = ['Full-time', 'Part-time', 'Remote', 'Internship'];
    const [type, setType] = useState('');
    const [inputType, setInputType] = useState('');
    const typeFilter = () => {
        if (type === null) setJobList(jobListStatic);
        else if (type.toLowerCase() === 'full-time') {
            const newItem = jobList.filter((item) => {
                return item.type === 'full-time';
            })
            setJobList(newItem);
        } else if (type.toLowerCase() === 'part-time') {
            const newItem = jobList.filter((item) => {
                return item.type === 'part-time';
            })
            setJobList(newItem);
        } else if (type.toLowerCase() === 'remote') {
            const newItem = jobList.filter((item) => {
                return item.type === 'remote';
            })
            setJobList(newItem);
        } else if (type.toLowerCase() === 'internship') {
            const newItem = jobList.filter((item) => {
                return item.type === 'internship';
            })
            setJobList(newItem);
        }
    }

    const [position, setPosition] = useState('');
    const positionFilter = (searchValue) => {
        setPosition(searchValue)
        const newItem = jobListStatic.filter((item) => {
            return item.position.toLowerCase().includes(searchValue.toLowerCase())
        })
        setJobList(newItem);
    }

    const [company, setCompany] = useState('');
    const companyFilter = (searchValue) => {
        setCompany(searchValue)
        const newItem = jobListStatic.filter((item) => {
            return item.company.toLowerCase().includes(searchValue.toLowerCase())
        })
        setJobList(newItem);
    }

    const clearSearchForm = () => {
        setValue('')
        setType('')
        setPosition('')
        setCompany('')
        setJobList(jobListStatic)
    }

    useEffect(() => {
        statusFilter()
    }, [value, inputValue])

    useEffect(() => {
        typeFilter()
    }, [type, inputType])

    return (
        <div className="filter_form">
            <div className='inner_table_row1'>
                <h2>Search Form</h2>
            </div>
            <div className='filter_form_wrapper'>
                <div className='filter search_filter'>
                    <TextField
                        id="demo-helper-text-aligned-no-helper"
                        label="Position"
                        value={position}
                        onChange={(e) => {
                            positionFilter(e.target.value);
                        }}
                    />
                </div>
                <div className='filter search_filter'>
                    <TextField
                        id="demo-helper-text-aligned-no-helper"
                        label="Company"
                        value={company}
                        onChange={(e) => {
                            companyFilter(e.target.value);
                        }}
                    />
                </div>
                <div className='filter status_filter'>
                    <Autocomplete
                        value={value}
                        onChange={(e, newValue) => {
                            setValue(newValue);
                            setJobList(jobListStatic)
                        }}
                        inputValue={inputValue}
                        onInputChange={(e, newInputValue) => {
                            setInputValue(newInputValue);
                            setJobList(jobListStatic)
                        }}
                        id="controllable-states-demo"
                        options={statusOptions}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Status" />}
                    />
                </div>
                <div className='filter type_filter'>
                    <Autocomplete
                        value={type}
                        onChange={(e, newValue) => {
                            setType(newValue);
                            setJobList(jobListStatic)
                        }}
                        inputValue={inputType}
                        onInputChange={(e, newInputValue) => {
                            setInputType(newInputValue);
                            setJobList(jobListStatic)
                        }}
                        id="controllable-states-demo"
                        options={typesOptions}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Type" />}
                    />
                </div>
                <div>
                    <span className="link clear" onClick={clearSearchForm}>Clear</span>
                </div>
            </div>

        </div>
    );
}

export default SearchForm;