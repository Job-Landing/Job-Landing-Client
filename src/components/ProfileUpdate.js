import React,{useState} from 'react'
import styled from 'styled-components'
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import avatar from '../images/avatar.jpg'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



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

const Wrapper = styled.section`
    padding-top: 20px;
    .box_wrapper2{
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;

    }

    .information_wrapper{
        display: flex;
        align-items: center;
        padding: 40px 10px 10px 0;
    }
    .avatar{
        width: 150px;
        height: 150px;
        border-radius:50%;
    }
    .information{
        margin-left: 20px;
    }
    .information p{
        font-size: 20px;
        font-weight: 500;
    }

    .form_row{
        display: block;
        margin-bottom: 20px;
    }
    input{
        width:  400px;
        height: 30px;
        border-radius:2px;
        transition: 0.3s;
        border-style: solid;
        border:0;
        outline:0;
        padding: 2px 0 2px 10px;
        font-weight: 500;
        margin-top: 8px;
    }
    input:disabled {
        background-color: #696d94;
        color: #1e203b;
    }
    .update{
        margin-top: 10px;
    }
    .form_wrapper{
        margin-top: 20px;
    }
    img{
        width: 500px;
    }

    .alert{
        width: 200px;
        position: fixed;
        top: 120px;
        right: 70px;
    }

    .none{
        display: none;
    }



`

export default ProfileUpdate
