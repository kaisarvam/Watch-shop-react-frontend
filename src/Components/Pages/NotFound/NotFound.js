import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            
            <h4>Error Code 404 </h4>
            <p>Page Not Found</p>
            <NavLink to="/home"> 
            <p> click here to go Back Home </p>
           <img src="./404.gif" alt="" /> 
           </NavLink>
        </div>
    );
};

export default NotFound;