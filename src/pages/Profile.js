import React from 'react';
import Wrapper from '../asserts/wrappers/Profile'
import {Sidebar, Navbar, InfoBox, ProfileUpdate} from '../components'


const Profile = () => {
    return (
        <Wrapper>
          <Sidebar />
        <div className="right">
            <Navbar/>
            <InfoBox/>
            <ProfileUpdate/>
          </div>
        </Wrapper>
    );
}


export default Profile;