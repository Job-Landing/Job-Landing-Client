import React, { useState } from 'react';

const ExampleContext = React.createContext();

const ExampleProvider = ({ children }) => {
    const [example, setExample] = useState("example");

    return <ExampleContext.Provider value={{example, setExample}}>
        {children}
    </ExampleContext.Provider>;
}

export { ExampleProvider, ExampleContext };