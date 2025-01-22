import React from 'react';
import '../App.css';

const HeaderComponent = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='/' className='navbar-brand'>Employee Management App</a>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent
