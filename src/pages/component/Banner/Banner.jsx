import React, { useState } from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
    const [num, setNum] = useState(1)

    return (
        <div>
            <div className={`home-banner${num} flex`} >
                <div className=' w-[50%] text-gray-200 p-32'>
                    <div className='pt-20'>
                        <h3 className='text-white text-5xl font-bold font-serif'>Art Of Cooking</h3>
                        <p className='text-white border border-t-0 border-l-0 border-r-0 w-fit'>Make day with us.</p>
                    </div>
                    <p className='mt-9 text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem alias quasi libero cupiditate adipisci minima possimus voluptatem explicabo atque repellat ducimus ratione, error illo, recusandae consequatur perspiciatis, ipsa molestias!</p>
                    <Link className='btn btn-warning normal-case px-10 rounded-sm text-lg font-bold mt-10'>Visit us <FaLongArrowAltRight className='text-xl ml-3' /> </Link>
                </div>
                <div className=' w-[50%] relative'>
                    <div className='chef-1 bg-white w-[250px] h-[500px] absolute z-50 right-[50%] bottom-0'>

                    </div>
                    <div className='chef-2 bg-white w-[250px] h-[500px] absolute bottom-0 right-40'>

                    </div>
                    <div className='chef-3 bg-white w-[250px] h-[450px] absolute right-0 bottom-0 z-40 '>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;