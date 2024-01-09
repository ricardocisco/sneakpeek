import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { SliderBox } from '../components/Slider/Slider'

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className='h-full flex flex-col items-center'>
                <h1 className='lg:text-7xl md:text-5xl xs:text-3xl text-white mt-8'>Sneak Peek</h1>
                <div>
                    <p className='lg:text-4xl md:text-3xl xs:text-xl font-light text-white mt-8'>O LUGAR Nº 1 PARA SUAS REPLICAS</p>
                    <div className='flex items-center justify-around mt-8'>
                        <Link to="/produtos" className='lg:text-2xl md:text-2xl xs:text-xl text-white bg-azul-100 lg:p-2 md:p-2 xs:p-1 rounded-xl'>Produtos</Link>
                        <Link to="/" className=' lg:text-2xl md:text-2xl xs:text-xl text-white border-2 lg:p-2 md:p-2 xs:p-1 rounded-xl'>Entre no Discord</Link>
                    </div>
                </div>
            </main>
            <SliderBox />
        </div>
    )
}
