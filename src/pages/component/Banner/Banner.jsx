import React, { useState } from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
    const [num, setNum] = useState(1)

    return (
        <div className=''>
            <div className={`home-banner${num} flex flex-wrap`} >
                <div className='w-full  md:w-[50%] text-gray-200 p-5 md:pt-20 md:pl-20'>
                    <div className='pt-20 md:pt-10'>
                        <h3 className='text-white text-2xl md:text-5xl font-bold font-serif md:mt-20'>Art Of Cooking</h3>
                        <p className='text-white border border-t-0 border-l-0 border-r-0 w-fit lg:text-xl lg:pt-5'>Make day with us.</p>
                    </div>
                    <p className='mt-3 md:mt-9 md:text-[17px] lg:text-lg'>We have a large barites of Bangladeshi food recipes and we are trying our best to create more recipes to serve our food lover customers. We are committed to serve out best service to our Clients.....</p>
                    <Link className='btn btn-warning normal-case md:px-10 rounded-sm md:text-lg font-bold mt-3 md:mt-10'>Visit us <FaLongArrowAltRight className='text-xl ml-3' /> </Link>
                </div>
                <div className='w-full md:w-[50%] relative '>
                    <div className='chef-1 bg-white md:w-[250px] md:h-[500px] w-[100px] h-[250px] absolute z-30 md:right-[50%] bottom-0 right-[35%]'>

                    </div>
                    <div className='chef-2 bg-white md:w-[250px] md:h-[500px] w-[100px] h-[250px] absolute bottom-0 md:right-40 right-[14%] z-20'>

                    </div>
                    <div className='chef-3 bg-white md:w-[250px] md:h-[450px] w-[100px] h-[250px] absolute md:right-0 bottom-0 z-10 right-[0%]'>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;