import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Nav(){
    return(
        <>
            <nav>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link text-white topNavA'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link text-white topNavA'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-link text-white topNavA'>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link text-white topNavA'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Nav;