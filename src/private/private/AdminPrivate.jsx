import React, { useContext } from 'react';
import { contextProvier } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminPrivate = ({ children }) => {
    const { user, userRole, loading } = useContext(contextProvier)
    const location = useLocation()
    if (loading) {
        return <h1 className='text-center py-16'>Loading...</h1>
    }
    if (userRole == 'admin') {
        return children;
    }
    if (user) {
        return <Navigate to={'/'} state={{ from: location }}></Navigate>
    }

    return <Navigate to={'/login'} state={{ from: location }}></Navigate>;
};

export default AdminPrivate;