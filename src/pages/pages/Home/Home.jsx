import React, { useState } from 'react';
import Banner from '../../component/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../../component/Chefs/Chefs';
import Review from '../../component/Review/Review';
import Accordion from '../../component/Accordion/Accordion';

const Home = () => {
    const [more, setMore] = useState(false);
    const chefs = useLoaderData();

    return (
        <div>
        
            <Banner />
            <div className='md:mx-[10%] md:mt-20'>
                <h3 className='text-4xl font-extrabold text-center font-mono'>Our {more ? "All" : "Famous"} Chefs</h3>
                {
                    more ?
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5'>
                            {
                                chefs.map(chef => <Chefs chef={chef} key={chef._id} />)
                            }
                        </div>
                        :
                        <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5'>
                            {
                                chefs.slice(0,6).map(chef => <Chefs chef={chef} key={chef._id} />)
                            }
                        </div>
                }
                {
                    more ? <button onClick={() => setMore(!more)} className='btn btn-warning rounded-sm normal-case px-10 text-lg block mx-auto my-10'>Famous Chefs</button> : <button onClick={() => setMore(!more)} className='btn btn-warning rounded-sm normal-case px-10 text-lg block mx-auto my-10'>See All Chefs</button>
                }
            </div>
            {/* Accordion */}
            <Accordion />

            {/* Clients Review */}
            <Review />

        </div>
    );
};

export default Home;