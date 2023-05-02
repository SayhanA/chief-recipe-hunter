import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';

import ReactStarsRating from 'react-awesome-stars-rating';
import Index from '../../component/CardCarsal/CardCarosal';
import RecipesCard from '../../component/RecipesCard/RecipesCard';

const Chef = () => {
    const [chefData, setChefData] = useState({});
    const loader = useLoaderData();
    const { chef } = useParams();
    // console.log(chefData)

    useEffect(() => {
        fetch(`http://localhost:5000/chef/${chef}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // console.log(data)
                    setChefData(data)
                }
            })
    }, [])


    return (
        <div>
            <div className='h-[760px] bg-[url("/styleimg/cat-han-W_5Eakb1598-unsplash.jpg")] bg-no-repeat bg-cover' >
                <div className='w-full h-full bg-gradient-to-r from-[#00000080] to-[#00000010] grid grid-cols-2 relative'>
                    <div className='overflow-hidden'>
                        <img className='absolute w-[900px] bottom-0 -left-72' src={`/public/chefImages/${chef}.png`} alt="" />
                    </div>
                    <div className='relative'>
                        <img className='absolute left-0' src="/public/styleimg/landing-slide-1-img-10.png" alt="" />
                        <img className='absolute bottom-0 left-40' src="/public/styleimg/landing-slide-1-img-3.png" alt="" />
                        <img className='absolute right-20 top-20' src="/public/styleimg/landing-slide-1-img-6.png" alt="" />
                        <img className='absolute top-[50%] left-20' src="/public/styleimg/landing-slide-1-img-7.png" alt="" />
                        <img className='absolute top-[30%] left-[350px] w-[200px]' src="/public/styleimg/nuts.png" alt="" />
                        <img className='absolute top-0 left-80 w-[200px]' src="/public/styleimg/nuts.png" alt="" />
                        <img className='absolute bottom-20 right-0 w-[200px]' src="/public/styleimg/nuts.png" alt="" />
                        <img className='absolute -left-[400px] top-[30%]' src="/public/styleimg/welcome.png" alt="" />
                        <p className='border-b-2 pb-5 border-yellow-300 absolute -left-[300px] top-[60%] text-white font-semi-bold text-4xl font-mono'>{chef}</p>
                        <p className=' absolute -left-[300px] bottom-[20%] text-white text-lg w-[500px] font-mono'>Hi, This is {chef}.I am working for {chefData.experience}years on this profession and crated {chefData.recipes}<sup>+</sup> recipes and i have speciality in ({chefData.dish}) dishes...</p>
                        {/* <p className='absolute bottom-0 -rotate-90 '><ReactStarsRating value={chefData.ratings} /></p> */}
                    </div>
                </div>
            </div>

            <Index loader={loader} />

            <h3 className='text-center text-4xl font-mono my-10'>My Recipes</h3>

            <div className=' mx-32 grid lg:grid-cols-3 gap-5'>
                {
                    loader.map(recipes => <RecipesCard recipes={recipes} key={recipes.idMeal}></RecipesCard>)
                }
            </div>

        </div>
    );
};

export default Chef;