// src/app/page.js
import Header from "@/app/components/Header";

export default function HomePage() {
  return (
    <div className="container">
      <Header/>
      <section className="hero">
        <h1>It’s A Big World Out There, Go Explore.</h1>
        <p>Discover new attractions and experiences to match your interests and travel style.</p>
        <button className="cta-button">Book Now</button>
      </section>
      <div className="card-container">
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
    
  );
}