import Gallery from "@/app/Carousel/carousel";
import Bglandingpage from "@/app/components/bglandingpage";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import { FocusCardsDemo } from "@/app/Focus/focus";

export default function HomePage() {
  return (
    <div className=" bg-[url(/backgroundimagemad6.jpg)] container no-scrollbar">
      <Bglandingpage />
      <Gallery />

      <FocusCardsDemo />

      <div className="gem">
        <p>Craving new experiences? Click Gemini to reveal destinations where excitement and discovery never end.......</p>
        <div className="gembutton"><button>Ask AI</button></div>
        
      </div>

      <footer className="footer">
        <div className="topSection">
          <h2>Let’s Enjoy Your Journey with Us</h2>
          <div className="socialLinks">
            <a href="#">Instagram</a>
            <a href="#">Twitter X</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
          </div>
          <div className="rightSection">
            <p>
              Experience the Best in Travel: A Journey Beyond Your Imagination,
              Where Every Destination Becomes Reality
            </p>
            <button className="joinButton">Join Us Now</button>
            <p className="email">📧 hellototravel@makeadream.com</p>
          </div>
        </div>

        <div className="bottomSection">
          <p>© Copyright 2024, MakeADream All Rights Reserved</p>
          <div className="navLinks">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Service</a>
            <a href="#">Blogs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
