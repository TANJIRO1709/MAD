import React from 'react'
import Image from "next/image";
const Largescreenfooter = () => {
  return (
    <section className='flex-col hidden md:flex text-white mb-5'>
        <footer className='flex gap-5 lg:mx-auto lg:justify-between'>
            <div className="footer-links flex flex-col items-center md:w-1/3 lg:w-1/5">
                <a href="" className=""><h4>Privacy & Terms</h4></a>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis eveniet saepe . Eveniet at provident temporibus aspernatur ab doloribus, nemo, odio magnam sunt ducimus ratione cumque iure autem aperiam.
                </p>
            </div>
            <div className="lg:w-1/5 flex justify-center">
                <ul>
                    <li><a href=""><h4>Support</h4></a></li>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Disability Support</a></li>
                    <li><a href="#">Cancellations Options</a></li>
                    <li><a href="#">Report Neighbourhood</a></li>
                </ul>
            </div>
            <div className="footer-logo xl:flex flex-col items-center hidden lg:w-1/5">
                <Image 
                src="/0e36691d40232362e5e738d445944622.png"
                alt="MakeADream"
                width={100}
                height={100}
                />
                <h1 className="text-[2rem] mt-3">Make A Dream</h1>
            </div>
            <div className="lg:w-1/5 flex justify-center">
                <ul>
                    <li><a href=""><h4>Privacy & Terms</h4></a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In</a></li>
                </ul>
            </div>
            <div className="lg:w-1/5 flex justify-center">
                <ul>
                    <li><a href=""><h4>Support</h4></a></li>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Disability Support</a></li>
                    <li><a href="#">Cancellations Options</a></li>
                    <li><a href="#">Report Neighbourhood</a></li>
                </ul>
            </div>
        </footer>
        <div className="footer-logo flex flex-col items-center -mt-7 xl:hidden">
            <Image 
            src="/0e36691d40232362e5e738d445944622.png"
            alt="MakeADream"
            width={100}
            height={100}
            />
            <h1 className="text-[2rem] mt-3">Make A Dream</h1>
        </div>
    </section>
  )
}

export default Largescreenfooter
