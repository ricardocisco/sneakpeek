import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <div className='flex flex-col items-center mt-5'>
            <div className='flex items-center text-white font-bold text-xl'>
                <FaRegCopyright />
                <p>SNPK. 2023</p>
            </div>
            <div className=' text-white text-3xl'>
                <Link to=""><FaDiscord /></Link>
            </div>
        </div>
    )
}
