import Gallery from "@/app/Carousel/carousel";
import Bglandingpage from "@/app/components/bglandingpage";
import Carousel from "@/app/components/Carousel";
import Largescreenfooter from "@/app/components/largescreenfooter";
import Image from "next/image";

export default function HomePage() {
    return (
        <div className=" bg-[url(/pietro-de-grandi-y5vLKnZr6Zg-unsplash.jpg)] container no-scrollbar">
            <Bglandingpage/>
            <Gallery/>
            <Carousel city="Dubai"/>
            <Carousel city="London"/>
            <Carousel city="New York"/>
            <Carousel city="Paris"/>
            <Carousel city="Tokyo"/>
            <footer className="bg-[#3E523E] p-4 mt-5 w-full max-h-fit">
                <div className="upperfooter max-w-full text-white md:hidden">
                    <div className="footer-links flex flex-col items-center md:w-1/3">
                        <a href="" className="mb-3"><h4>Privacy & Terms</h4></a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis eveniet saepe consectetur. Eveniet at provident temporibus aspernatur ab doloribus, nemo, odio magnam sunt ducimus ratione cumque iure autem aperiam.
                        </p>
                    </div>
                    <div className="upperfooter2 flex justify-between mt-4 md:hidden">
                        <div className="">
                                <ul>
                                    <li><a href=""><h4>Support</h4></a></li>
                                    <li><a href="#">Help Centre</a></li>
                                    <li><a href="#">Disability Support</a></li>
                                    <li><a href="#">Cancellations Options</a></li>
                                    <li><a href="#">Report Neighbourhood</a></li>
                                </ul>
                            </div>
                        <div className="">
                            <ul>
                            <li><a href=""><h4>Privacy & Terms</h4></a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Log In</a></li>
                            </ul>
                        </div>
                    </div>
                <div className="footer-logo flex flex-col items-center mt-4">
                    <Image src="/0e36691d40232362e5e738d445944622.png"
                     alt="MakeADream"
                    width={70}
                    height={70}
                    />
                    <h1 className="text-2xl mt-3">Make A Dream</h1>
                    </div>
                </div>
                <Largescreenfooter/>
                 <div className="middlefooter h-[2px] max-w-full bg-white mt-2">
                 </div>
                 <div className="lowerfooter flex justify-between items-center p-3 text-white">
                     <p className="text-sm md:text-lg lg:text-xl">© 2021 MakeADream, Inc. All rights reserved</p>
                     <div className="social-icons flex gap-2">
                         <a href="#">
                             <Image src="/insta.png"
                              alt="Twitter"
                               width={35}
                            height={35}
                            
                            />
                         </a>
                         <a href="#">
                             <Image src="/insta.png" alt="Twitter" width={35} height={35}/>
                         </a>
                         <a href="#">
                             <Image src="/insta.png" alt="Twitter" width={35} height={35}/>
                         </a>
                     </div> 
                 </div>
            </footer>
        </div>
    );
}
