import React, { useState } from 'react';

const JobLandingContext = React.createContext();

const JobLandingProvider = ({ children }) => {
    const [example, setExample] = useState("example");

    return <JobLandingContext.Provider value={{example, setExample}}>
        {children}
    </JobLandingContext.Provider>;
}

export { JobLandingProvider, JobLandingContext };