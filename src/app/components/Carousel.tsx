import React from 'react'
import ThreeDCardDemo from '../Card/page'
import Link from "next/link";
const Carousel = ({city}:{city:string}) => {
  return (
    <>
        <section className='flex flex-col'>
            <div className="cityname p-5">
                <h1 className='text-white text-[3rem]'>{city}</h1>
            </div>
            <div className="cardcarousel flex flex-row flex-wrap justify-around">
               <Link href="/Render1"> <ThreeDCardDemo  title="Sports" imagelink="/sports.jpg"description="Take a look at the destination youshould stop by if you are a sports freak"/> </Link>
               <Link href="/Render2">  <ThreeDCardDemo title="Clubs & Nightlife" imagelink="/nightlife.jpg" description="To have an exciting nightlife in dubai, explore the right clubs and bars"/> </Link>
               <Link href="/Render3"> <ThreeDCardDemo title="Places" imagelink="/places.jpg" description="New to Dubai? We have planned places to explore"/></Link> 
               <Link href="/Render4"> <ThreeDCardDemo title="Concerts" imagelink="/concerts.jpg" description=" Bored of daily routine? Take a break. Here are some musical concerts in Dubai taking place this month"/> </Link> 
            </div>
        </section>
    </>
  )
}

export default Carousel
