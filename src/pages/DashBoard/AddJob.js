import React, {useState} from 'react'

const initialState = {
    company: '',
    position: '',
    jobLocation: '',
    applyUrl: '',
    userName: 'user'
}
const addJobAPI = process.env.REACT_APP_BACKEND + "/job"


const Add = (() => {
    const [values, setValues] = useState(initialState);
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {company, position, jobLocation, applyUrl} = values;
        const newJob = {company: company, position: position, jobLocation: jobLocation, applyUrl: applyUrl};
        await fetch(addJobAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob),
        })
            .catch(error => {
                window.alert(error);
                return;
            });
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h3>add job</h3>
                <div className='form-center'>
                    {/*company*/}
                    <div className='form-row'>
                        <label htmlFor='company' className='form-label'>Company</label>
                        <input
                            type='text'
                            value={values.company}
                            name='company'
                            onChange={handleChange}
                            className='form-input'
                        />
                    </div>
                    {/*position*/}
                    <div className='form-row'>
                        <label htmlFor='position' className='form-label'>Position</label>
                        <input
                            type='text'
                            value={values.position}
                            name='position'
                            onChange={handleChange}
                            className='form-input'
                        />
                    </div>
                    {/*jobLocation*/}
                    <div className='form-row'>
                        <label htmlFor='jobLocation' className='form-label'>Job Location</label>
                        <input
                            type='text'
                            value={values.jobLocation}
                            name='jobLocation'
                            onChange={handleChange}
                            className='form-input'
                        />
                    </div>
                    {/*applyUrl*/}
                    <div className='form-row'>
                        <label htmlFor='applyUrl' className='form-label'>Apply Url</label>
                        <input
                            type='text'
                            value={values.applyUrl}
                            name='applyUrl'
                            onChange={handleChange}
                            className='form-input'
                        />
                    </div>
                    {/* btn container */}
                    <div className='btn-container'>
                        <button type='submit' className='btn btn-block submit-btn'>submit</button>
                    </div>
                </div>
            </form>
        </div>

    )
})

export default Add