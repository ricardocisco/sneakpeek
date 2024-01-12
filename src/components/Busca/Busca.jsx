import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";

export default function Busca({ info, onSearch }) {

    const [query, setQuery] = useState('')

    const handleQuery = (e) => {
        e.preventDefault()
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }

    return (
        <div className='flex items-center bg-dark-200 rounded-md text-white justify-between'>
            <input
                value={query}
                onChange={handleQuery}
                placeholder='Oque você procura?'
                className=' bg-dark-200 placeholder:text-white placeholder:font-semibold outline-none focus:outline-none ml-2 lg:py-3 md:py-2 py-1 lg:px-7 md:px-5 px-3 lg:w-[300px] md:w-[300px] w-4/5'
            />
            <IoMdSearch className='text-2xl hover:scale-110 mr-2' />
        </div>
    )
}
