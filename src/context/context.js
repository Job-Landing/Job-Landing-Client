import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const JobLandingContext = React.createContext();
const JobLandingProvider = ({ children }) => {
    const [example, setExample] = useState("example");
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        console.log("loginning")
        navigate('/dashboard', {replace: true});
        // return <Navigate to="/dashboard" replace />;
    };

    const logout = () => {
        setUser(null);
        navigate('/', {replace: true});
        // return <Navigate to="/" replace />;
    };

    return <JobLandingContext.Provider value={{example, setExample,user,login,logout}}>
        {children}
    </JobLandingContext.Provider>;
}

export { JobLandingProvider, JobLandingContext };