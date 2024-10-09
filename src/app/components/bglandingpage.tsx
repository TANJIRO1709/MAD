import React from 'react'
import HeaderClient from './HeaderClient';
const Bglandingpage = () => {
  return (
    <>
    <div className=' bg-cover bg-center pb-3'>
        <HeaderClient/>
             <section className="hero">
                <div>
                <h1>Where Will Your Next Adventure Take You?</h1>
                <p>From breathtaking landscapes to vibrant cities, your perfect adventure is just a step away</p>
                </div>
            </section>
            
            <div className="card-container mb-3">
                <div className="card">
                    <h3>Top Choices</h3>
                    <p>Total 600+ destinations you can work with.</p>
                </div>
                <div className="card">
                    <h3>Quality Guidance</h3>
                    <p>Our tour guide has 20+ years of experience.</p>
                </div>
                <div className="card">
                    <h3>Explore Events</h3>
                    <p>Explore what events can you find in a city. </p>
                </div>
            </div>
    </div>
   
    </>
  )
}

export default Bglandingpage
