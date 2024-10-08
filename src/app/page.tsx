// src/app/page.tsximport Gallery from "@/app/Carousel/carousel";
import Bglandingpage from "@/app/components/bglandingpage";
import Carousel from "@/app/components/Carousel";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { FocusCardsDemo } from "@/app/Focus/focus";
import { AnimatePresence, motion } from "framer-motion";
import CanvasRevealEffectDemo from "@/app/components/Cards/page"
import Gallery from "./Carousel/carousel";
const testimonials = [
  {
    quote:
      "Every sunset in Santorini felt like a painting come to life. The vibrant colors reflecting off the caldera were the perfect backdrop for unforgettable evenings.",
    name: "Isabella Rossi",
    title: "Traveler from Italy",
  },
  {
    quote:
      "Safari in the Serengeti was a life-changing experience. Witnessing the majesty of lions and the grace of giraffes in their natural habitat was beyond words.",
    name: "Liam Smith",
    title: "Wildlife Photographer from Australia",
  },
  {
    quote:
      "Visiting the ancient ruins of Petra was like stepping back in time. The intricate carvings and the breathtaking landscape made it a highlight of my travels.",
    name: "Aisha Khan",
    title: "Historian from the UK",
  },
  {
    quote:
      "The beaches of Bali are pure paradise. From surfing in Kuta to relaxing in Ubud, every moment felt like a slice of heaven on earth.",
    name: "Michael Nguyen",
    title: "Beach Lover from Vietnam",
  },
  {
    quote:
      "New York City is a whirlwind of energy and creativity. Every neighborhood offers something new, whether it’s food, art, or culture. It's a place that never sleeps!",
    name: "Rachel Green",
    title: "Culinary Blogger from New Jersey",
  },
  {
    quote:
      "The cherry blossoms in Kyoto are a sight to behold. Walking through the parks during sakura season felt magical, and the delicate beauty of the flowers was awe-inspiring.",
    name: "Taro Yamada",
    title: "Nature Lover from Japan",
  },
  {
    quote:
      "Exploring the fjords of New Zealand was an adventure of a lifetime. The dramatic landscapes and stunning vistas left me speechless at every turn.",
    name: "Emma Thompson",
    title: "Adventure Seeker from the UK",
  },
  {
    quote:
      "A trip to the Galápagos Islands was like entering a nature documentary. Swimming with sea lions and watching giant tortoises in the wild was surreal.",
    name: "Oliver Garcia",
    title: "Marine Biologist from Mexico",
  },
  {
    quote:
      "The vibrant street art in Buenos Aires tells the story of the city. Each mural is a window into the local culture and spirit, making every walk an exploration.",
    name: "Sofia Delgado",
    title: "Art Enthusiast from Argentina",
  },
  {
    quote:
      "The tranquility of the Scottish Highlands is unmatched. Hiking through the lush valleys and beside the serene lochs felt like a journey into a fairytale.",
    name: "James McLeod",
    title: "Nature Enthusiast from Scotland",
  },
];
export default function Home() {
    return (
      <div>
       <div className=" bg-[url(/backgroundimagemad6.jpg)] container no-scrollbar">
      <Bglandingpage />
      <Gallery />

      <FocusCardsDemo />

 
 <div className="flex items-center justify-center pt-24">
            <div className="max-w-lg w-full p-6 bg-black rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">AI for Travel Planning</h2>
                <p className="text-white mb-6">
                    Discover the best destinations, get personalized itineraries, and explore travel tips with our AI-powered travel assistant. 
                    Plan your perfect trip effortlessly and let the AI do the heavy lifting!
                </p>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-transform transform active:translate-y-1 active:shadow-inner shadow-lg hover:bg-teal-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50">
                    <a href="/Gemini">Ask AI</a>
                </button>
            </div>
        </div>


<div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-transparent items-center justify-center relative overflow-hidden">
  <InfiniteMovingCards
    items={testimonials}
    direction="right"
    speed="slow"
  />
</div>


<CanvasRevealEffectDemo/>


      <footer className="footer">
        <div className="topSection">
          <h2>Lets Enjoy Your Journey with Us</h2>
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
      </div>
    );
  }