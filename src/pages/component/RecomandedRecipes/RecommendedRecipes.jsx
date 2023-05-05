import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Label, TextInput, Textarea } from 'flowbite-react';
import { FaUserAlt } from 'react-icons/fa';

const RecommendedRecipes = () => {
    const [name, setNames] = useState();
    const [feedback, setFeedback] = useState();
    const [myRating, setMyRating] = useState()
    const [rating, setRating] = useState(0)
    const { user, loading } = useContext(AuthContext);
    // console.log(user)

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;
        // const rating = form.rating.value;
        const name = form.name.value;
        setNames(name);
    }



    const handleUser = (e) => {
        const name = e.target.value;
        setNames(name)
    }
    const handleFeedback = (e) => {
        const feedbacks = e.target.value;
        setFeedback(feedbacks)
        // console.log(feedback)
    }

    return (
        <div className='md:mx-[10%] mb-[5%]'>
            <h3 className='text-center text-2xl lg:text-4xl font-bold font-mono my-10 '>Recommend Us a Recipe</h3>
            <div>
                <div>
                    <div className='w-[100px] rounded-full overflow-hidden border-[5px] border-yellow-300 mx-auto'>
                        <img className='w-full h-full' src={user.photoURL} alt="" />
                    </div>

                    <p className='text-center text-2xl pt-2 font-bold'>{name ? name : user.displayName}</p>
                </div>
                <div className=' max-w-[95%] mx-auto'>

                    <div className=''>
                        <form onSubmit={handleForm} className='max-w-[1200px] mx-auto pt-10'>
                            <div className='grid md:grid-cols-2 md:gap-[5%]'>
                                <div>


                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                    <TextInput
                                        id="username3"
                                        placeholder="Recipe name"
                                        required={true}
                                        addon="Required"
                                        name='chef'
                                    // value={chef}
                                    />



                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>

                                    <Textarea
                                        id="username3"
                                        placeholder="Recipe Details information"
                                        required={true}
                                        addon="required"
                                        name='feedback'
                                        
                                    />
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>

                                    <Textarea
                                        id="username3"
                                        placeholder="Recipe Ingredients"
                                        required={true}
                                        addon="required"
                                        name='feedback'
                                    />
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>

                                    <Textarea
                                        id="username3"
                                        placeholder="Recipe Making Process"
                                        required={true}
                                        addon="required"
                                        name='feedback'
                                    />
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                    <TextInput

                                        id="username3"
                                        placeholder="User name"
                                        // required={true}
                                        addon="Optional"
                                        name="name"

                                    />


                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="photo"

                                        />
                                    </div>
                                    <TextInput
                                        id="photo"
                                        placeholder="User Photo URL"
                                        // required={true}
                                        addon="Optional"
                                        name='photo'
                                    // value={photo}
                                    />
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="photo"

                                        />
                                    </div>
                                    <TextInput
                                        id="photo"
                                        placeholder="Recipe Photo URL"
                                        // required={true}
                                        addon="Optional"
                                        name='photo'
                                    // value={photo}
                                    />

                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                    <TextInput
                                        id="username3"
                                        placeholder="User Profession"
                                        // required={true}
                                        addon="Optional"
                                        name='profession'
                                    // value={Profession}
                                    />

                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                    <TextInput
                                        id="username3"
                                        placeholder="Recommended Chef Name"
                                        required={true}
                                        addon="Required"
                                        name='chef'
                                    // value={chef}
                                    />

                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div></div>
                            </div>
                            <input className='btn btn-outline w-[70%] mx-auto block' type="submit" value="Submit review" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default RecommendedRecipes;