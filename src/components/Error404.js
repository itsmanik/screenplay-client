import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Error404.css'; // Optional: Create a CSS file for styling

const Error404 = () => {
    return (
        <div className="error-404">
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default Error404;