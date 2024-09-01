import React from 'react'
import Header from './Header'

const Bglandingpage = () => {
  return (
    <>
    <div className=' bg-cover bg-center pb-3'>
        <Header/>
             <section className="hero">
                <h1>It is A Big World Out There, Go Explore.</h1>
                <p>Discover new attractions and experiences to match your interests and travel style.</p>
                <button className="cta-button"><a href="">Explore</a></button>
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
    {/* <div className="line w-full h-1 bg-slate-50">
            </div> */}
    </>
  )
}

export default Bglandingpage
