import React,{useState} from 'react'
import avatar from '../asserts/images/avatar.jpg'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Wrapper from '../asserts/wrappers/ProfileUpdate'
import { JobLandingContext } from '../context/context';
import useRequest from '../hooks/use-request';
import { BASE_URL } from '../utils/constant';

const ProfileUpdate = () => {
    const { user } = React.useContext(JobLandingContext);
    const initialState = {
        username: user.username,
        email: user.email,
        originalPassword: '',
        password: ''
    }
    const [updateStatus, setUpdateStatus] = useState('none');
    const [originalPassword, setOriginalPassword] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [values, setValues] = useState(initialState);

    const { doRequest, errors } = useRequest({
        url: `${BASE_URL}/user/${values.originalPassword}`,
        method: 'put',
        body: {
            username: values.username,
            email: user.email,
            password: values.password,
        },
        onSuccess: (data) => {
            alertFadeIn()
            //   Router.push('/');
        },
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await doRequest();
    };

    const alertFadeIn = ()=>{
        setUpdateStatus('success')
        setTimeout(() => {
            setUpdateStatus('')
        }, 2000);
    }
    return (
        <Wrapper className='animate__animated animate__fadeIn'>
            <div>
                <div className='information_wrapper'>
                    <img className='avatar' src={avatar} alt="avatar" />
                    <div className='information'>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className='form_wrapper'>
                    <form onSubmit={handleSubmit}>
                        <div className='form_row'>
                            <label>Username</label> <br />
                            <input type="text" name="username" value={values.username} onChange={handleChange} disabled />
                        </div>
                        <div className='form_row'>
                            <label>Email</label> <br />
                            <input type="email" name="email" placeholder='E-mail' value={user.email} disabled />
                        </div>
                        <div className='form_row'>
                            <label>Original Password</label> <br />
                            <input type="password" name="originalPassword" placeholder='Original Password' onChange={handleChange} required />
                        </div>
                        <div className='form_row'>
                            <label>New Password</label> <br />
                            <input type="password" name="password" placeholder='New Password' onChange={handleChange} required />
                        </div>
                        <Button type="submit" variant="contained" size="medium" className='update'>Update</Button>
                    </form>
                </div>
                {errors}
            </div>

            <Alert className={updateStatus ==='success' ? 'alert animate__animated animate__fadeInRight' : updateStatus ==='none' ? 'none': 'alert animate__animated  animate__fadeOutRight'} severity="success"><strong>Update success!</strong></Alert>


        </Wrapper>
    );
}



export default ProfileUpdate
