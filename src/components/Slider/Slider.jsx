import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../data/data';
import { Link } from 'react-router-dom';
import './slider.css';

export const SliderBox = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className='flex flex-col w-full p-10 items-center'>
            <Slider {...settings} className='w-10/12'>
                {data.map((item, index) =>
                    <div key={index} className='important-box'>
                        <img className='w-72 rounded-md' src={item.image} alt={`imagem do produto ${item.name}`}></img>
                        <h1 className='lg:text-xl text-xs uppercase font-semibold '>{item.name}</h1>
                        <p className='lg:text-xl text-sm font-semibold'>${item.price}</p>
                        <div className='flex flex-col w-full'>
                            <div className='flex lg:text-xl text-sm bg-azul-100 p-1 rounded-lg font-semibold mt-1'>
                                <Link className='m-auto' to={item.link} target="_blank">Comprar em CSSBUY</Link>
                            </div>
                            <div className='flex lg:text-xl text-sm bg-dark-100 p-1 rounded-lg font-semibold mt-1'>
                                <Link className='m-auto' to={item.quality} target="_blank">Ver a Qualidade</Link>
                            </div>
                        </div>
                    </div>)}
            </Slider>
        </div>
    )
}
