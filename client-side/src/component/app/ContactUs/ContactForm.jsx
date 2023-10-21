import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form >
                <div className='flex gap-6'>
                    <input type="text " placeholder='Name' className='w-full border px-4 py-2 rounded-3xl outline-[rgb(18,162,180)] bg-[rgb(252,252,252)]' />
                    <input type="email" placeholder='Name' className='w-full border px-4 py-2 rounded-3xl outline-[rgb(18,162,180)] bg-[rgb(252,252,252)]' />
                </div>
                <div className='flex gap-6 mt-16'>
                <input type="text " placeholder='Name' className='w-full border px-4 py-2 rounded-3xl outline-[rgb(18,162,180)] bg-[rgb(252,252,252)]' />
                    <input type="email" placeholder='Name' className='w-full border px-4 py-2 rounded-3xl outline-[rgb(18,162,180)] bg-[rgb(252,252,252)]' />
                </div>
                <div className='mt-16'>
                    <textarea name="" id="" placeholder='Your Message' cols="30" rows="10" className='w-full border px-4 py-2 rounded-3xl outline-[rgb(18,162,180)] bg-[rgb(252,252,252)]'></textarea>
                </div>
                <button className='px-6 py-2 rounded-3xl mt-4 bg-[rgb(240,240,240)]'>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;