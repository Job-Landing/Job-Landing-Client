import React,{useState} from 'react'
import avatar from '../asserts/images/avatar.jpg'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Wrapper from '../asserts/wrappers/ProfileUpdate'

const ProfileUpdate = () => {
    const [updateStatus, setUpdateStatus] = useState('none');
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
                        <p>Zanyuan Yang</p>
                        <p>jayingyoung@gmail.com</p>
                    </div>
                </div>
                <div className='form_wrapper'>
                    <form>
                        <div className='form_row'>
                            <label>Username</label> <br />
                            <input type="text" name="name" placeholder='Username' />
                        </div>
                        <div className='form_row'>
                            <label>Email</label> <br />
                            <input type="email" name="email" placeholder='E-mail' value='jayingyoung@gmail.com' disabled />
                        </div>
                        <div className='form_row'>
                            <label>Password</label> <br />
                            <input type="password" name="password" placeholder='Password' />
                        </div>
                        <Button variant="contained" size="medium" className='update' onClick={alertFadeIn}>Update</Button>
                    </form>
                </div>
            </div>

            <Alert className={updateStatus ==='success' ? 'alert animate__animated animate__fadeInRight' : updateStatus ==='none' ? 'none': 'alert animate__animated  animate__fadeOutRight'} severity="success"><strong>Update success!</strong></Alert>


        </Wrapper>
    );
}



export default ProfileUpdate
