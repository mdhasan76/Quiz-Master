import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className=' shadow-lg py-3'>
            <nav className='flex justify-between max-w-7xl mx-auto px-4'>
                <div>
                    <h1 className='text-3xl font-bold text-cyan-400'><span className='text-pink-400'>Q</span>uize Master </h1>
                </div>
                <div>
                    <Link className='text-lg font-medium px-2' to={'/topics'}>Topics</Link>
                    <Link className='text-lg font-medium px-2' to={'/statistics'}>Statistics</Link>
                    <Link className='text-lg font-medium px-2' to={'/blog'}>Blog</Link>
                </div>
            </nav>
        </section>
    );
};

export default Header;