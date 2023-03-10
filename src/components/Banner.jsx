import React from 'react';
import bgImg from '../img/nature.jpg';
import LeafDrop from './LeafDrop';

const Banner = () => {
    return (
        <div>

            <div className='h-screen bg-cover bg-no-repeat justify-center items-center'
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className='text-white font-bold flex text-center items-center justify-center'>
                    <h1 className='mt-80 text-5xl l
                    md:text-9xl'>Love The Nature</h1>
                </div>
            </div>
            <LeafDrop></LeafDrop>

        </div>
    );
};

export default Banner;