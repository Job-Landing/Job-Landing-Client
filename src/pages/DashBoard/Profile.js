import React, {useState} from 'react'

const JobAPI = process.env.REACT_APP_BACKEND + "/user/update/" + process.env.REACT_APP_USER


const Profile = () => {
    const initProfile = {
        name: 'userName',
        email: 'user@email.com',
        password: 'password'
    }
    const [profile, setUpdateProfile] = useState(initProfile);

    const handleChange = (e) => {
        setUpdateProfile({...profile, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch(JobAPI, {
            method: "POST",
            body: JSON.stringify(profile),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }


    return (
        <div className='animate__animated animate__fadeIn'>
            <div>
                <div className='form_wrapper'>
                    <form>
                        <div className='form_row'>
                            <label>Username</label> <br/>
                            <input type="text" name="name" value={profile.name} onChange={handleChange}
                                   placeholder={profile.name}/>
                        </div>
                        <div className='form_row'>
                            <label>Email</label> <br/>
                            <input type="email" name="email" placeholder='E-mail' value={profile.email} disabled/>
                        </div>
                        <div className='form_row'>
                            <label>Password</label> <br/>
                            <input type="password" name="password" value={profile.password} onChange={handleChange}
                                   placeholder='Password'/>
                        </div>
                        <button onClick={handleSubmit}>submit</button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Profile