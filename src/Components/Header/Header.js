import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="text-success fw-bold">Worls Best Web Developer Team</h1>
            <h5 className="fw-normal">Let’s consider the core web development team roles, required skills and talents, that will make together a strong base for a good team.</h5>
            <h3>To Higer Devloper Total budget: <span className="budget"><span className="text-success">100 Milion</span></span> dollar.</h3>
        </div>
    );
};

export default Header;