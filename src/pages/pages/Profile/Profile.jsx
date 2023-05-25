import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Label, TextInput, Textarea } from 'flowbite-react';
import { FaUserAlt } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const [name, setNames] = useState();
    const [photo, setPhoto] = useState();
    const [rating, setRating] = useState(0)
    const { user, loading, updateUser, } = useContext(AuthContext);
    // console.log(user)

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        setNames(name)

        const photo = form.photo.value;
        setPhoto(photo)

        console.log(name, photo);
        updateUser(name, photo);
        form.reset();

    }

    if (loading) {
        return (
            <div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-200 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='md:mx-[10%] mb-[5%]'>
                <div className='h-[100px]'></div>
                <h3 className='text-center text-2xl lg:text-4xl font-bold font-mono my-10'>User Profile</h3>
                {
                    user ? <div>
                        <div className='flex flex-col gap-3'>
                            <div className='w-[150px] h-[150px] rounded-full overflow-hidden border-[5px] border-yellow-300 mx-auto'>
                                <img className='w-full h-full' src={user.photoURL} alt="" />
                            </div>

                            <p className='text-center text-2xl pt-2 font-bold'>{name ? name : user.displayName}</p>
                            <div className=' mx-auto w-fit flex items-center'><Rating style={{ maxWidth: 150 }} value={4.5} readOnly /><span className='text-xl font-bold'>( {rating} )</span></div>
                            <p className='text-center text-xl'>User email: {user.email}</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-mono text-center mt-10'>Update User Profile</h3>
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



                                <input className='btn btn-outline w-full' type="submit" value="Submit review" />
                            </form>
                        </div>

                    </div>
                        : <Navigate to="/login" />
                }
            </div>
        );
    }

};

export default Profile;

// Demo User Image Link :  https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50