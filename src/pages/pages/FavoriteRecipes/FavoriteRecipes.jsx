import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { removeMeal } from '../../../../fakedb';
import './FavouriteRecipes.css'
import { FaTrashAlt } from 'react-icons/fa';

const FavoriteRecipes = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [items, setItems] = useState([]);
    const { resId } = useContext(AuthContext);
    const loader = useLoaderData();

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('ordered_meals'));
        if (item) {
            const keys = Object.keys(item);
            setItems(keys)
        }
    }, [resId, isTrue])

    const handleRemove = (id) => {
        removeMeal(id);
        setIsTrue(!isTrue);
    }


    const arr = [];
    for (const item of items) {
        // console.log(typeof item)
        const fevItem = loader.find(data => data.idMeal === item)
        arr.push(fevItem);
    }

    return (
        <div>
            <div className='h-[80px]'></div>
            <div className="overflow-x-auto w-full px-[15%]">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
    
                            <th>Image</th>
                            <th>Recipe</th>
                            <th>Favorite Color</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            arr.map(data => <tr key={data.idMeal}>
                                
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className={`mask w-80 h-52 border relative`}>
                                                <img src={data.strMealThumb} alt="" />
                                                <div className='overflow-hidden w-32 rounded-full absolute -right-8 bottom-0'><img className=' rounded-full bg-yellow-300 ' src={`/chefImages/${data.chef}.png`} alt="" /></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{data.chef}</div>
                                            <div className="text-sm opacity-50">{data.strArea}{data.area}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {data.strMeal}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{data.ratings}</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button onClick={() => handleRemove(data.idMeal)} className="btn btn-outline border-0 text-red-600 text-4xl "><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }
                        
                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default FavoriteRecipes;