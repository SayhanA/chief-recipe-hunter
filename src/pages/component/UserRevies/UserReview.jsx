import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Label, TextInput, Textarea } from 'flowbite-react';
import { FaUserAlt } from 'react-icons/fa';

const UserReview = () => {
    const [name, setNames] = useState();
    const [feedback, setFeedback] = useState();
    const [myRating, setMyRating] = useState()
    const [rating, setRating] = useState(0)
    const { user, loading } = useContext(AuthContext);
    console.log(user)

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
        console.log(feedback)
    }

        return (
            <div className='md:mx-[10%] mb-[5%]'>
                <h3 className='text-center text-2xl lg:text-4xl font-bold font-mono my-10'>Review Our Recipes</h3>
                {
                    !loading && user ? <div>
                        <div className='grid lg:grid-cols-2 max-w-[95%] mx-auto'>
                            <div className=' bg-yellow-50 rounded-3xl py-10'>
                                <div className='w-[150px] rounded-full overflow-hidden border-[10px] border-blue-400 mx-auto'>
                                    <img className='w-full h-full' src={user.photoURL} alt="" />
                                </div>

                                <p className='text-center text-2xl pt-2 font-bold'>{ name ? name : user.displayName}</p>
                                <div className=' mx-auto mt-2 w-fit flex items-center'><Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} /><span className='text-xl font-bold'>( {rating} )</span></div>

                                <p className='font-bold mt-10 text-center text-lg max-w-[500px] word mx-auto'>Review: {feedback}</p>
                            </div>
                            <div className=''>
                                <form onSubmit={handleForm} className='max-w-[400px] mx-auto'>
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
                                        placeholder="User Photo"
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
                                        placeholder="Recipe name Or Chef name"
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
                                        onChange={handleFeedback}
                                        id="username3"
                                        placeholder="Type your review"
                                        required={true}
                                        addon="required"
                                        name='feedback'
                                        value={feedback}
                                    />
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                    <input className='btn btn-outline w-full' type="submit" value="Submit review" />
                                </form>
                            </div>
                        </div>
                    </div>
                        : <div>
                        <div className='flex flex-wrap max-w-[95%] mx-auto'>
                            <div className='w-[50%] bg-yellow-50 rounded-3xl py-10'>
                                
                                    <FaUserAlt className='text-[100px] mx-auto text-gray-500 flex justify-center items-center' />
                                

                                    <p className='text-center text-2xl pt-2 font-bold'>{ name ? name : "User Name"}</p>
                                <div className=' mx-auto mt-2 w-fit'><Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} /></div><span>{rating}</span>

                                <p className='font-bold mt-10 text-center text-lg max-w-[500px] word mx-auto'>Review: {feedback}</p>
                            </div>
                            <div className='w-[50%]'>
                                <form onSubmit={handleForm} className='max-w-[400px] mx-auto'>
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                    <TextInput
                                    
                                        id="username3"
                                        placeholder="User name"
                                        required={true}
                                        addon="Required"
                                        name="name"
                                    
                                    />


                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="photo"

                                        />
                                    </div>
                                    <TextInput
                                        id="photo"
                                        placeholder="User Photo"
                                        required={true}
                                        addon="Required"
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
                                        required={true}
                                        addon="Required"
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
                                        placeholder="Recipe name Or Chef name"
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
                                        onChange={handleFeedback}
                                        id="username3"
                                        placeholder="Type your review"
                                        required={true}
                                        addon="required"
                                        name='feedback'
                                        value={feedback}
                                    />
                                    <div className="mb-5 block">
                                        <Label
                                            htmlFor="username"

                                        />
                                    </div>
                                    <input className='btn btn-outline w-full' type="submit" value="Submit review" />
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
   
};

export default UserReview;