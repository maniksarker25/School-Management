import React from 'react';
import { AiFillFileExclamation } from 'react-icons/ai';

const Categories = () => {
    return (
        <>
            <div className='cursor-pointer flex gap-5 border-b mb-5'>
                <AiFillFileExclamation className="mb-3 flex text-[#C0C2C2]" />
                <p className="text-[13px] text-[#9AB9E2]">Advices</p>
            </div>

            <div className='cursor-pointer flex gap-5 border-b mb-5'>
                <AiFillFileExclamation className="mb-3 flex text-[#C0C2C2]" />
                <p className="text-[13px] text-[#9AB9E2]">Distance Learning</p>
            </div>
            
            <div className='cursor-pointer flex gap-5 border-b mb-5'>
                <AiFillFileExclamation className="mb-3 flex text-[#C0C2C2]" />
                <p className="text-[13px] text-[#9AB9E2]">English for university</p>
            </div>

            <div className='cursor-pointer flex gap-5 border-b mb-5'>
                <AiFillFileExclamation className="mb-3 flex text-[#C0C2C2]" />
                <p className="text-[13px] text-[#9AB9E2]">News</p>
            </div>

            <div className='cursor-pointer flex gap-5 border-b mb-5'>
                <AiFillFileExclamation className="mb-3 flex text-[#C0C2C2]" />
                <p className="text-[13px] text-[#9AB9E2]">Professional English</p>
            </div>
        </>
    );
};

export default Categories;