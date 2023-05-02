import React, { useContext } from 'react';
import { FaHandHoldingHeart, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../../provider/AuthProvider';

const Chefs = ({ chef }) => {
    const { user, handleChef } = useContext(AuthContext);
    
    const { _id, name, image, known_for, experience, likes, birth_year, recipes, nationality, ratings, dish } = chef;

    return (
        <div className="card rounded-lg bg-base-100 shadow-xl">
            <img src={image} className='w-full h-[250px] rounded-t-lg' alt="Shoes" />
            <div className="card-body">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p className=''>{known_for}</p>
                </div>
                <div>
                    <p className='font-bold '>Years of experience: {experience} years</p>
                    <p className='font-bold '>Total recipes: {recipes} years</p>
                    <p className='font-bold '>Speciality: {dish} </p>
                </div>
                <div className='font-bold flex gap-2'>
                    <p>Ratings:</p>
                    <Rating className='' style={{ maxWidth: 100 }} value={ratings} readOnly />
                    <span>{ratings}</span>
                </div>
                <div>
                    <div className="card-actions justify-end flex items-center">
                        <div className='flex items-center mr-auto gap-2 text-yellow-300 hover:text-yellow-500'>
                            <FaHandHoldingHeart className='text-2xl shadow-2xl' />
                            <span className='font-bold text-lg text-black'>{likes}</span>
                        </div>

                        <Link to={`/chefs/${name}`} className="btn btn-warning rounded-sm normal-case flex gap-3 px-7">View Recipes <FaLongArrowAltRight className='text-xl' /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;