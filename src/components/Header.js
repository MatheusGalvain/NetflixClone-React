import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>    
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='NetFlix'></img>
                </a>
            </div>
                <div className='header--user'>
                    <a href='/'>
                    <img src='https://cdn.icon-icons.com/icons2/2044/PNG/512/netflix_logo_icon_124344.png' alt="Usuário"></img>
                    </a>
                </div>
        </header>
    );
}