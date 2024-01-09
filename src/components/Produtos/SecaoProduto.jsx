import React, { useState } from 'react';
import { data } from '../../data/data';
import { Link } from 'react-router-dom';

export default function SecaoProduto() {


    const [cat, setCat] = useState(data);

    const filtroCat = (categoria) => {
        setCat(
            data.filter((item) => {
                return item.category === categoria
            })
        )
    }

    return (
        <div className='flex flex-col h-full items-center'>
            <div>
                <h1 className='text-white text-xl'>Produtos</h1>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-white text-xl'>Filtros</p>
                <div className='m-2 lg:flex-none sm:flex sm:flex-row items-center'>
                    <button onClick={() => setCat(data)}>Todos</button>
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
                {cat.map((item, index) =>
                    <div key={index} className='text-white flex flex-col m-2 bg-dark-200 p-2 rounded-xl hover:scale-105'>
                        <img className='rounded-md' src={item.image} alt={`imagem do produto ${item.name}`}></img>
                        <h1 className='lg:text-xl text-xs uppercase font-semibold '>{item.name}</h1>
                        <p className='lg:text-xl text-sm font-semibold'>${item.price}</p>
                        <Link className='lg:text-xl text-sm bg-azul-100 p-1 rounded-lg font-semibold items-center ' to={item.link} target="_blank">Comprar em CSSBUY</Link>
                        <Link className='lg:text-xl text-sm bg-dark-100 p-1 rounded-lg font-semibold mt-2' to={item.quality} target="_blank">Ver a Qualidade</Link>
                    </div>)}
            </div>
        </div >
    )
}
