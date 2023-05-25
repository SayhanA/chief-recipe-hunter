import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const AboutUs = () => {
    const { user, loading } = useContext(AuthContext);
    const chefs = useLoaderData();
    // console.log(loading)

    return (
        <div>
            <div className='h-[100px]'></div>
            <div className='p-2 lg:w-[75%] text-3xl font-bold mx-auto '>
                {
                    chefs.map(data => <div key={data._id} className='mb-10'>
                        <h3>{data.name}</h3>
                        <div className='grid md:grid-cols-2 pt-5'>
                            <div className={`p-5 rounded-lg order-${data._id%2 ? "" : 1}`}>
                                <img className='rounded-lg w-full' src={data.image} alt="" />
                            </div>
                            <div className=' text-lg font-medium p-5'>
                                <p> <span className='font-bold'>Name</span> : Md. {data.name}</p>
                                <p> <span className='font-bold'>Birth</span>  Date: {data.birth_year}</p>
                                <p className='hidden lg:block'> <span className='font-bold'>Nationality</span> : {data.nationality}</p>
                                <p className='hidden lg:block'> <span className='font-bold'>Experience</span> : {data.experience}Years</p>
                                <p className='hidden lg:block'> <span className='font-bold'>Certified</span>  form: {data.known_for}</p>
                                <p className='hidden lg:block'> <span className='font-bold'>Ratings</span> : {data.ratings}</p>
                                <p className='hidden lg:block'> <span className='font-bold'>TotalLikes</span> : {data.likes}</p>
                                <p className='hidden lg:block'> <span className='font-bold'>TotalRecipes</span> : {data.recipes}</p>
                                <p> <span className='font-bold'>About me:</span> In the early 1990 i was in Dhaka Food Campaign. There i saw some food lover person. Those person gave a review of my food over 4.9 and that time i inspired to become a chef in my life.</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AboutUs;