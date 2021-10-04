import React from 'react';
import img from './image/404-error.jpg'

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="w-50" src={img} alt="" />
        </div>
    );
};

export default NotFound;