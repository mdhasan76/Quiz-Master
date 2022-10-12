import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    //
    return (
        <section className=' shadow-lg py-5 bg-white sticky top-0 z-10 '>
            <nav className='flex justify-between max-w-7xl mx-auto px-4'>
                <div>
                    <h1 className='text-lg sm:text-3xl font-bold text-cyan-500'><span className='text-pink-400'>Q</span>uiz Master </h1>
                </div>

                <div className=''>
                    <div onClick={() => setOpen(!open)} className='h-6 w-6 font-bold md:hidden'>
                        {
                            open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />
                        }

                    </div>
                    <div className={` md:flex  absolute md:static right-10 duration-500 ${open ? 'top-12 rounded bg-slate-50 p-5' : 'top-[-300px]'}`}>
                        <Link className='text-lg block font-medium px-2' to={'/'}>Home</Link>
                        <Link className='text-lg block font-medium px-2' to={'/topics'}>Topics</Link>
                        <Link className='text-lg block font-medium px-2' to={'/statistics'}>Statistics</Link>
                        <Link className='text-lg block font-medium px-2' to={'/blog'}>Blog</Link>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;