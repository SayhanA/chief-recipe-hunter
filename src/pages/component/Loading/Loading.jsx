import React from 'react';

const Loading = () => {
    return (
        <div className='h-[600px]'>
            <div className="h-[600px] border border-blue-300 shadow rounded-md w-full mx-auto">
                <div className=" h-[600px] animate-pulse flex flex-col space-x-4">
                    <div className=" bg-slate-200 h-full w-full "></div>
                    <div className='absolute top-0 ' >
                        <div className='md: h-[300px] md:w-[700px] border absolute left-[100px] top-[190px]'>
                            <div className='md:h-[60px] mb-2 md:w-[350px] bg-gray-600 rounded-xl'></div>
                            <div className='md:h-[30px] mb-5 md:w-[150px] bg-gray-600 rounded-xl'></div>
                            <div className='md:h-[100px] mb-5 w-full bg-gray-600 rounded-xl'></div>
                            <button className='btn md:w-[150px] py-2'></button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;