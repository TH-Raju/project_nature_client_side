import React from 'react';

const BanTitle = () => {
    return (
        <div className='container w-5/6 mx-auto my-16'>
            <div className='md:flex items-center justify-around gap-2'>
                <div>
                    <img src={require('../img/tree.jpg')} className="h-3/5 w-3/4 md:h-5/6 md:w-3/4 " alt="tree" />
                </div>
                <div className='lg:mx-6   md:mx-4 '>
                    <h2 className='lg:text-5xl md:text-4xl font-bold'>The sky, the mountain, the tree...</h2>
                    <p className='px-4 py-3 text-lg lg:text-2xl'>“I declare this world is so beautiful that I can hardly believe it exists.” The beauty of nature can have a profound effect upon our senses, those gateways from the outer world to the inner, whether it results in disbelief in its very existence as Emerson notes, or feelings such as awe, wonder, or amazement. </p>
                </div>
            </div>
            <div className='lg:flex flex-row-reverse items-center justify-around gap-2'>
                <div>
                    <img src={require('../img/moon.jpg')} className="h-3/5 w-3/4 lg:h-5/6 lg:w-3/4 lg:-mt-24 lg:shadow-xl shadow-gray-600 lg:rounded-tl-3xl" alt="tree" />
                </div>
                <div className='lg:mx-6 md:mx-4 '>
                    <h2 className='lg:text-4xl md:text-3xl '>I declare this world is so beautiful that I can hardly believe it exists</h2>
                </div>

            </div>
            <div className='lg:mx-6 rounded-tl-2xl mb-10 md:p-7 sm:mt-10 shadow-lg shadow-gray-500 lg:right-80 lg:-mt-40  lg:absolute md:mx-4 bg-white lg:w-80'>
                <h2 className='lg:text-3xl md:text-2xl font-bold'>Unseen beauty.</h2>
                <p className='px-4 py-3 text-lg lg:text-xl'>My work explores and reveals the invisible, inviting the viewer to look beyond the seen to appreciate the beauty and mystery of the unseen. </p>
            </div>
        </div>
    );
};

export default BanTitle;