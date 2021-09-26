import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({specName}) => {
    return (
        <header>
            <Link to='/'>Creditus</Link>
            <p>{specName}</p>
        </header>
    );
}

export default Header;