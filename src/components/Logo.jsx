
import React from 'react';

function Logo() {
    return (
        <div className='bg-[rgb(45,41,41)] p-[40px] h-[600px] w-[400px] flex flex-col gap-40 justify-center items-center shadow'>
            <div className='relative w-[200px] h-[200px]'>
                <div className='w-full h-full bg-[rgb(45,41,41)] absolute top-0 left-0 transform rotate-45'>
                    <div className='h-full w-[20px] bg-[rgb(131,171,135,0.7)] absolute top-0 left-0'></div>
                    <div className='h-[20px] w-full bg-[rgb(175,102,64,0.7)] absolute top-0 left-0'></div>
                    <div className='h-full w-[20px] bg-[rgb(158,152,135,0.7)] absolute top-0 right-0'></div>
                    <div className='h-[20px] w-full bg-[rgb(69,132,195,0.7)] absolute bottom-0 left-0'></div>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-1 w-full'>
                    <p className='text-gray-300 text-3xl font-semibold'>
                        HTML<span className='text-[rgb(175,102,64)]'>&</span>CSS
                    </p>
                    <p className='text-gray-300 text-xs'>design and build websites</p>
                </div>
            </div>

            <div>
                <p className='text-gray-400'>JON DUCKETT</p>
            </div>
        </div>
    );
}

export default Logo;
