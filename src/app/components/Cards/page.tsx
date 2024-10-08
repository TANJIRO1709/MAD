"use client"; // Add this if you are using hooks or any client-side features
import React from "react";
import { CanvasRevealEffect } from "@/app/components/ui/canvas-reveal-effect";
import AceternityIcon from "@/app/components/icons"; // Adjust this import based on your file structure
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/app/components/icon"


const CanvasRevealEffectDemo: React.FC = () => {
  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-transparent dark:bg-black w-full gap-4 mx-auto px-8">
      <Card title="I haven't been everywhere, but it's on my list. Travel is not just about the destination; it's about the journey, the people you meet, and the stories you collect along the way. Each trip adds another layer to the rich tapestry of your life, expanding your worldview and igniting a sense of adventure that fuels your soul." icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <Card title="Traveling it leaves you speechless, then turns you into a storyteller. The experiences, sights, and emotions you encounter while exploring new places shape who you are. Every adventure is an opportunity to grow, to learn, and to connect with cultures that enrich your understanding of the world." icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-yellow" colors={[[236, 72, 153], [232, 121, 249]]} dotSize={2} />
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
      <Card title="The world is a book, and those who do not travel read only one page. By stepping outside our comfort zones and venturing into the unknown, we discover the beauty of diversity, the depth of humanity, and the connection we share with people from different walks of life. Travel opens our hearts and minds, reminding us that we are all part of a larger story." icon={<AceternityIcon />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
    </div>
  );
};

const Card = ({ title, icon, children }: { title: string; icon: React.ReactNode; children?: React.ReactNode; }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}

      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] relative"

    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CanvasRevealEffectDemo; // Make this the default export
