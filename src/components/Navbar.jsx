import React from 'react';
import Container from './Container';
import logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
        <Container>
            <nav className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="logo" className='w-32'/>
                </div>

                <div className='hidden md:flex items-center list-none gap-18 text-2xl font-semibold'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <button>Contact</button>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;