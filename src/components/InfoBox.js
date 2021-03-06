import React,{useState} from 'react'
import styled from 'styled-components'
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Wrapper from '../asserts/wrappers/InfoBox'


const InfoBox = () => {
    const path = window.location.pathname.replace("/", "")


    return (
        // <Wrapper className="animate__animated animate__fadeIn"></Wrapper>
        <Wrapper>
            <div className='box_wrapper_bottom'>
                <div className='box_wrapper_top'>
                    <div className='box_wrapper1'>
                        {
                            path === 'profile' ? <FaceRoundedIcon className='icon' /> : path === 'joblist' ? <FormatListBulletedRoundedIcon className='icon' /> : path === 'addjob' ? <AddTaskRoundedIcon className='icon' /> : path ==='jobstreaming' ? <LiveTvIcon className='icon' /> : <UpdateRoundedIcon className='icon' />
                        }
                    </div>
                    <div className='box_wrapper2'>
                        <h5>{path === 'profile' ? 'Profile' : path === 'joblist' ? 'Job List' : path ==='addjob' ? 'Add Job' : path ==='jobstreaming' ? 'Job Streaming' : 'Update Job' }</h5>
                        <div className='row1'></div>
                        <div className='row2'></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default InfoBox
