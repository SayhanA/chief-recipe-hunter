import React, { useState } from 'react';
import './Accordion.css'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Accordion = () => {
    const [field, setField] = useState(1);

    return (
        <div className={`h-[700px]  lg:mx-[10%] text-white mb-20 container${field}`}>
            <h3 className='pt-10 pb-3 text-2xl md:text-4xl font-bold font-mono text-center border-red-500 border-b-4 w-fit mx-auto'>Our Events & Services</h3>
            <div className='md:event md:w-11/12 mx-auto'>
                <div className='md:w-[50%] mt-10'>
                    <div onClick={() => setField(1)} className={`md:leading-6 text-lg border rounded-md p-3 flex justify-between `}>Margie Event {field === 1 ? <FaAngleUp className='text-2xl' /> : <FaAngleDown className='text-2xl' />} </div>
                    <div className={`border p-5 ${field === 1 ? "md:h-[250px]" : "hidden"}`}>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure perferendis nemo ad itaque a perspiciatis quia, quisquam id beatae, voluptas suscipit est adipisci repellat ut vero soluta! Sit, vero!</p>
                        <p>Total Merriage events: 370 <sup className='text-lg'>+</sup></p>
                        <p> Experience: 25 years <sup className='text-lg'>+</sup></p>
                        <div className='flex gap-2  mt-3'>
                            <Rating className=' text-yellow-700' style={{ maxWidth: 120 }} value='4.5' readOnly />
                            <p className='text-center'>(4.5)</p>
                        </div>
                    </div>
                    <div onClick={() => setField(2)} className={`leading-6 text-lg border rounded-md p-3 flex justify-between `}>Birthday Party {field === 2 ? <FaAngleUp className='text-2xl' /> : <FaAngleDown className='text-2xl' />} </div>
                    <div className={`border ${field === 2 ? "h-[250px] p-5" : "hidden"}`}>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure perferendis nemo ad itaque a perspiciatis quia, quisquam id beatae, voluptas suscipit est adipisci repellat ut vero soluta! Sit, vero!</p>
                        <p>Total Birthday Party: 370 <sup className='text-lg'>+</sup></p>
                        <p> Experience: 25 years <sup className='text-lg'>+</sup></p>
                        <div className='flex gap-2  mt-3'>
                            <Rating className='text-yellow-700' style={{ maxWidth: 120 }} value='4.3' readOnly />
                            <p className='text-center'>(4.5)</p>
                        </div>
                    </div>
                    <div onClick={() => setField(3)} className={`leading-6 text-lg border rounded-md p-3 flex justify-between`}>Celebrating Event {field === 3 ? <FaAngleUp className='text-2xl' /> : <FaAngleDown className='text-2xl' />} </div>
                    <div className={`border ${field === 3 ? "h-[250px] p-5" : "hidden"}`}>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure perferendis nemo ad itaque a perspiciatis quia, quisquam id beatae, voluptas suscipit est adipisci repellat ut vero soluta! Sit, vero!</p>
                        <p>Total Birthday Party: 370 <sup className='text-lg'>+</sup></p>
                        <p> Experience: 25 years <sup className='text-lg'>+</sup></p>
                        <div className='flex gap-2  mt-3'>
                            <Rating className='text-yellow-700' style={{ maxWidth: 120 }} value='4.5' readOnly />
                            <p className='text-center'>(4.5)</p>
                        </div>
                    </div>
                    <div onClick={() => setField(4)} className={`leading-6 text-lg border rounded-md p-3 flex justify-between `}>Get Together event {field === 4 ? <FaAngleUp className='text-2xl' /> : <FaAngleDown className='text-2xl' />} </div>
                    <div className={`border p-5 ${field === 4 ? "h-[250px]" : "hidden"}`}>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure perferendis nemo ad itaque a perspiciatis quia, quisquam id beatae, voluptas suscipit est adipisci repellat ut vero soluta! Sit, vero!</p>
                        <p>Total Merriage events: 370 <sup className='text-lg'>+</sup></p>
                        <p> Experience: 25 years <sup className='text-lg'>+</sup></p>
                        <div className='flex gap-2  mt-3'>
                            <Rating className=' text-yellow-700' style={{ maxWidth: 120 }} value='4.5' readOnly />
                            <p className='text-center'>(4.5)</p>
                        </div>
                    </div>
                    
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Accordion;