import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu, IoIosClose } from "react-icons/io";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='text-slate-100 p-4'>
            <div className='flex max-w-screen-xl mx-auto justify-between' >
                <Link className='lg:text-3xl text-lg font-semibold' to="/">Sneak Peek</Link>
                <ul className={`mt-3 lg:mt-0 lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                    <button className="cursor-pointer lg:text-2xl text-sm font-semibold border border-white rounded-lg p-1 hover:text-white hover:border-azul-100">Entre no Discord</button>
                </ul>
                <div className='lg:hidden' onClick={toggleMenu}>
                    {isOpen ? (
                        <IoIosClose className='text-white size-8' />

                    ) : (
                        <IoIosMenu className='text-white size-8' />
                    )}

                </div>
            </div>
        </nav >
    )
}
