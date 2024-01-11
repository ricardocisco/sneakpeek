import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";


export default function Busca() {

    const [query, setQuery] = useState('')

    const handleQuery = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    const handleSearch = () => {
        console.log('Pesquisado por: ', query);
    }

    return (
        <div className='flex items-center bg-white rounded-2xl py-1 px-6'>

            <input
                value={query}
                onChange={handleQuery}
                placeholder='Oque você procura?'
                className=' border-slate-300 placeholder-slate-400  outline-none focus:outline-none ml-1'
            />
            <button onClick={handleSearch}><IoMdSearch /></button>
        </div>
    )
}
