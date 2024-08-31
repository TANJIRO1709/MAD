import React from 'react'
import Header from './Header'

const Bglandingpage = () => {
  return (
    <>
    <div className='bg-[url("/pietro-de-grandi-y5vLKnZr6Zg-unsplash.jpg")] bg-cover bg-center pb-3'>
        <Header/>
             <section className="hero">
                <h1>It is A Big World Out There, Go Explore.</h1>
                <p>Discover new attractions and experiences to match your interests and travel style.</p>
                <button className="cta-button">Book Now</button>
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
                    <h3>Easy Bookings</h3>
                    <p>Best in class ticket booking system.</p>
                </div>
            </div>
    </div>
    <div className="line w-full h-1 bg-slate-50">
            </div>
    </>
  )
}

export default Bglandingpage
