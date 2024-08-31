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
                <ThreeDCardDemo title="Sports" imagelink="/sports.jpg"description="Take a look at the destination youshould stop by if you are a sports freak"/>
                <ThreeDCardDemo title="Clubs & Nightlife" imagelink="/nightlife.jpg" description="To have an exciting nightlife in dubai, explore the right clubs and bars"/>
                <ThreeDCardDemo title="Places" imagelink="/places.jpg" description="New to Dubai? We have planned places to explore"/>
                <ThreeDCardDemo title="Concerts" imagelink="/concerts.jpg" description=" Bored of daily routine? Take a break. Here are some musical concerts in Dubai taking place this month"/>
                <ThreeDCardDemo title="Sports" imagelink="/sports.jpg"description="Take a look at the destination youshould stop by if you are a sports freak"/>
                <ThreeDCardDemo  title="Clubs & Nightlife" imagelink="/nightlife.jpg" description="To have an exciting nightlife in dubai, explore the right clubs and bars"/>
                <ThreeDCardDemo  title="Clubs & Nightlife" imagelink="/nightlife.jpg" description="To have an exciting nightlife in dubai, explore the right clubs and bars"/>
                <ThreeDCardDemo  title="Clubs & Nightlife" imagelink="/nightlife.jpg" description="To have an exciting nightlife in dubai, explore the right clubs and bars"/>
            </div>
        </section>
    </>
  )
}

export default Carousel
