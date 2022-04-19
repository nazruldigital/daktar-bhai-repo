import React from 'react';
import logo from '../../Images/not found 2.jpg'

const NotFound = () => {
    return (
        <div>
            <h2><b>404 Page Not found</b></h2>
            <img className='w-50' src={logo} alt="" />
        </div>
    );
};

export default NotFound;