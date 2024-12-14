import React from 'react';
import Nav from './myComp/Nav';

function Footer(){
    return(
        <footer className='p-3 text-bg-secondary d-flex justify-content-between align-items-center'>
            <h1>Footer</h1>
            <Nav />
        </footer>
    );
}

export default Footer;