import React from 'react';
import Nav from './myComp/Nav';

function Header(){
    return(
        <header className='p-3 text-bg-primary d-flex justify-content-between align-items-center'>
            <h1>Nayem's Canvas</h1>
            <Nav />
        </header>
    );
}

export default Header;