import { Rating } from '@smastrom/react-rating';
import React, { useContext, useState } from 'react';
import { FaBookmark, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { AiTwotoneLike } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '../../../../fakedb';
import { AuthContext } from '../../../provider/AuthProvider';

const RecipesCard = ({ recipes }) => {
    const [disable, setDisable] = useState(false);
    const [recipe, setRecipe] = useState({})

    const { likedRecipes } = useContext(AuthContext);
    // console.log(recipes)

    const { strMealThumb, area, strMeal, strInstructions, idMeal, ratings, strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6 } = recipes;

    const handleLike = (props) => {
        toast("Your item is bookmarked");
        setDisable(true);
        likedRecipes(props)
        addToDb(props)
    }
    return (
        <div style={{background:"var(--card_bg)"}} className="card  bg-base-100 shadow-xl rounded-lg">
            <div className={`bg-red-100 h-[270px] rounded-lg relative`}>
                <img className='w-full h-full rounded-t-lg' src={strMealThumb} alt="" />

            </div>
            <div className="card-body p-7">
                <h2 className="card-title">{strMeal}</h2>
                <p><span className='font-bold'>Process To Make:</span> {strInstructions.slice(0, 120)} ... <span className='underline text-blue-700'>[Read more]</span></p>
                <p><span className='font-bold'>Ingredients:</span> {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}, {strIngredient6}....etc. <span className='underline text-blue-700'></span></p>

                <p className='font-bold'>Origin Location: {strArea} {area}</p>
                
                <p className='font-bold'>Visited: {idMeal}p</p>

                <div className='font-bold flex items-center gap-1'>Rating: <Rating style={{ maxWidth: 120 }} value={ratings} readOnly /> ({ratings})</div>
                
                <div className="card-actions justify-end">
                    <button onClick={() => handleLike(idMeal)} className="btn btn-warning normal-case rounded-md text-lg" disabled={disable} > Favorite <AiTwotoneLike className='text-xl ml-2 ' /> </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecipesCard;