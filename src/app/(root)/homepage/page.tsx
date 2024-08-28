// src/app/page.js
import Header from "@/app/components/Header";
import Image from "next/image";

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

            <footer>
                <div className="upperfooter">
                <div className="footer-links">
                    <ul>
                    <li><a href=""><h4>Privacy & Terms</h4></a></li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis eveniet saepe consectetur. Eveniet at provident temporibus aspernatur ab doloribus, nemo, odio magnam sunt ducimus ratione cumque iure autem aperiam.
                    </p>
                    {/* <ul>
                        <li><a href=""><h4>Privacy & Terms</h4></a></li>
                        <li><a href="#">Air Cover For Hosts</a></li>
                        <li><a href="#">Hosting Resources</a></li>
                        <li><a href="#">Community Forum</a></li>
                        <li><a href="#">Hosting Responsibility</a></li>
                    </ul> */}
                </div>
            <div className="upperfooter2">
            <div className="footer-links">
                    <ul>
                        <li><a href=""><h4>Support</h4></a></li>
                        <li><a href="#">Help Centre</a></li>
                        <li><a href="#">Disability Support</a></li>
                        <li><a href="#">Cancellations Options</a></li>
                        <li><a href="#">Report Neighbourhood</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                    <li><a href=""><h4>Privacy & Terms</h4></a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div>
            </div>
                <div className="footer-logo">
                    <Image src="/0e36691d40232362e5e738d445944622.png" alt="MakeADream" width={100} height={100}/>
                    <h1>MakeADream</h1>
                </div>
                {/*<div className="footer-links">
                    <ul>
                    <li><a href=""><h4>Privacy & Terms</h4></a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href=""><h4>Privacy & Terms</h4></a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Log In</a></li>
                    </ul>
                </div> */}
                </div>
                <div className="middlefooter">
                </div>
                <div className="lowerfooter">
                    <p>© 2021 MakeADream, Inc. All rights reserved</p>
                    <div className="social-icons">
                        <a href="#">
                            <Image src="/insta.png" alt="Twitter" width={30} height={30}/>
                        </a>
                        <a href="#">
                            <Image src="/insta.png" alt="Twitter" width={30} height={30}/>
                        </a>
                        <a href="#">
                            <Image src="/insta.png" alt="Twitter" width={30} height={30}/>
                        </a>
                    </div> 
                </div>
            </footer>
        </div>
    );
}
