import { redirect } from "next/navigation";

export default async function Home() {
  
  if (true) redirect("/homepage") 
    return (
      <div>
       <div className=" bg-[url(/backgroundimagemad6.jpg)] container no-scrollbar">
     
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
