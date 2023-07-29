import React from 'react';
import { NavLink } from 'react-router-dom';
import navActive from './navActive.module.css'
const NavActiveRoutes = ({ children, to,toggleNav }) => {
    return (
        <NavLink to={to} className={({ isActive, isPending }) => isActive ? navActive.active : isPending ? navActive.pending : navActive.all} onClick={toggleNav}>
            {children}
        </NavLink>
    );
};

export default NavActiveRoutes;