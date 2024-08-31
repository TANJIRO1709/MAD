import React from 'react'
import ThreeDCardDemo from '../Card/page'

const Carousel = ({city}:{city:string}) => {
  return (
    <>
        <section className='flex flex-col'>
            <div className="cityname p-5">
                <h1 className='text-white text-[3rem]'>{city}</h1>
            </div>
            <div className="cardcarousel flex flex-row flex-wrap justify-around">
                <ThreeDCardDemo/>
                <ThreeDCardDemo/>
                <ThreeDCardDemo/>
                <ThreeDCardDemo/>
                <ThreeDCardDemo/>
                <ThreeDCardDemo/>
                <ThreeDCardDemo/>
                <ThreeDCardDemo/>
            </div>
        </section>
    </>
  )
}

export default Carousel
