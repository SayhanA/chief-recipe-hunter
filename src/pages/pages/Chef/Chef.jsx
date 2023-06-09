import React, { Suspense, useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Index from '../../component/CardCarsal/CardCarosal';
import RecommendedRecipes from '../../component/RecomandedRecipes/RecommendedRecipes';

const RecipesCard = React.lazy(() => import('../../component/RecipesCard/RecipesCard'))

const Chef = () => {
    const [show, setShow] = useState(false);
    const [chefData, setChefData] = useState({});
    const loader = useLoaderData();
    const { chef } = useParams();
    // console.log(chefData)

    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-sayhan-a-sayhana.vercel.app/chef/${chef}`)
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
            <div className='h-[600px] lg:h-[760px] bg-[url("/styleimg/cat-han-W_5Eakb1598-unsplash.jpg")] bg-no-repeat bg-cover' >
                <div className='w-full h-full bg-gradient-to-r from-[#00000080] to-[#00000010] grid lg:grid-cols-2 relative'>
                    <div className='overflow-hidden'>
                        <img className='absolute lg:w-[900px] bottom-0 lg:-left-72' src={`/chefImages/${chef}.png`} alt="" />
                    </div>
                    <div className='relative'>
                        <img className='hidden lg:block absolute left-0' src="/styleimg/landing-slide-1-img-10.png" alt="" />
                        <img className='hidden lg:block absolute bottom-0 left-40' src="/styleimg/landing-slide-1-img-3.png" alt="" />
                        <img className='hidden lg:block absolute right-20 top-20' src="/styleimg/landing-slide-1-img-6.png" alt="" />
                        <img className='hidden lg:block absolute top-[50%] left-20' src="/styleimg/landing-slide-1-img-7.png" alt="" />
                        <img className='hidden lg:block absolute top-[30%] left-[350px] w-[200px]' src="/styleimg/nuts.png" alt="" />
                        <img className='hidden lg:block absolute top-0 left-80 w-[200px]' src="/styleimg/nuts.png" alt="" />
                        <img className='hidden lg:block absolute bottom-20 right-0 w-[200px]' src="/styleimg/nuts.png" alt="" />
                        <img className='absolute w-[200px] lg:w-[450px] lg:-left-[400px] -top-52 lg:top-[30%]' src="/styleimg/welcome.png" alt="" />
                        <p className='border-b-2 ml-5 lg:pb-5 border-yellow-300 absolute lg:-left-[300px] -top-32 lg:top-[60%] text-white font-semi-bold text-2xl lg:text-4xl font-mono'>{chef}</p>
                        <p className=' absolute bottom-[240px] lg:-left-[300px] lg:bottom-[16%] text-white lg:text-lg px-3 lg:w-[500px] font-mono'>Hi, This is {chef}.I am working for {chefData.experience}years on this profession and crated {chefData.recipes}<sup>+</sup> recipes and {chefData.likes} likes. I have speciality in ({chefData.dish}) dishes...</p>
                        {/* <p className='absolute bottom-0 -rotate-90 '><ReactStarsRating value={chefData.ratings} /></p> */}
                    </div>
                </div>
            </div>

            <Index loader={loader} />

            <Suspense fallback={<div>Loading...</div>}>

                <h3 className='text-center text-2xl lg:text-4xl font-mono my-10'>My Recipes</h3>

                {
                    show ? <div className='mx-2 md:mx-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            loader.map(recipes => <RecipesCard recipes={recipes} key={recipes.idMeal}></RecipesCard>)
                        }
                    </div> :
                        <div className='mx-2 md:mx-[10%] grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                loader.slice(0, 12).map(recipes => <RecipesCard recipes={recipes} key={recipes.idMeal}></RecipesCard>)
                            }
                        </div>
                }
                <button onClick={() => setShow(!show)} className='btn btn-warning rounded-sm mx-auto block px-10 my-10'>{show ? "Show Less" : "Show More"}</button>
            </Suspense>

            <RecommendedRecipes />
            
        </div>
    );
};

export default Chef;