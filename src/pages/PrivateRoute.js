import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {JobLandingContext} from '../context/context';

const PrivateRoute = ({children}) => {
    const { user } = React.useContext(JobLandingContext);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

  return children;
};
export default PrivateRoute;