import React, { useState } from 'react';
import { data } from '../../data/data';
import { Link } from 'react-router-dom';
import Busca from '../Busca/Busca';

export default function SecaoProduto() {


    const [cat, setCat] = useState(data);

    const [filteredItem, setFilteredItem] = useState(cat);

    const handleQuery = (query) => {
        const busca = cat.filter((item) =>
            String(item.name).toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItem(busca);
    }

    const filtroCat = (categoria) => {
        const filtro = cat.filter((item) => {
            return item.category === categoria
        })
        setFilteredItem(filtro);
    }

    return (
        <div className='flex flex-col h-full items-center'>
            <Busca info={cat} onSearch={handleQuery} />
            <div>
                <h1 className='text-white text-4xl'>Produtos</h1>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-white text-2xl'>Filtros</p>
                <div className='m-2 lg:flex-none sm:flex sm:flex-row items-center'>
                    <button onClick={() => setFilteredItem(data)}>Todos</button>
                    <button onClick={() => filtroCat('shoes')}>Sapatos</button>
                    <button onClick={() => filtroCat('shirt')}>Camiseta</button>
                    <button onClick={() => filtroCat('hoodie')}>Hoodies</button>
                    <button onClick={() => filtroCat('jacket')}>Jaquetas</button>
                    <button onClick={() => filtroCat('panties')}>Calças</button>
                    <button onClick={() => filtroCat('jewelry')}>Joias</button>
                    <button onClick={() => filtroCat('misc')}> Diversos</button >
                </div >
            </div >
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1'>
                {filteredItem.map((item, index) =>
                    <div key={index} className='text-white flex flex-col m-2 bg-dark-200 p-2 rounded-xl hover:scale-105'>
                        <img className='rounded-md my-auto' src={item.image} alt={`imagem do produto ${item.name}`}></img>
                        <h1 className='lg:text-xl text-xs uppercase font-medium '>{item.name}</h1>
                        <p className='lg:text-xl text-sm font-semibold'>${item.price}</p>
                        <div className='flex flex-col w-full'>
                            <div className='flex lg:text-xl text-sm bg-azul-100 p-1 rounded-lg font-medium mt-1'>
                                <Link className='m-auto' to={item.link} target="_blank">Comprar em CSSBUY</Link>
                            </div>
                            <div className='flex lg:text-xl text-sm bg-dark-100 p-1 rounded-lg font-medium mt-1'>
                                <Link className='m-auto' to={item.quality} target="_blank">Ver a Qualidade</Link>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div >
    )
}
