import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function City24() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={cn(i === 3 || i === 6 ? "md:col-span-2" : "")}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m8CCp2ayFTl0xSczXjWxZj5R8CfaQol4Tg&s"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1PkvyUrkorluM_y4qERTTM5pzBzEjuj6vA&s"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tLWT1qOp5gTpn0Igw0gEz2ZGPAAXJLPwMQ&s"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdWTelEpHplrHoDWVZBKfuy8W3NWV55ICYg&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://cdn.britannica.com/88/132688-050-E9739DD9/Skyline-Jakarta-Indonesia.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/76/9a/93/dataran-tinggi-dieng.jpg?w=1200&h=-1&s=1"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://upload.wikimedia.org/wikipedia/commons/d/d6/TMII_Istana_Anak-anak_Indonesia.JPG"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    
    title: "Borobudur (Central Java)",
    description: "The world’s largest Buddhist temple, Borobudur is an ancient, majestic monument with intricate carvings and stupas.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mount Bromo (East Java)",
    description: "An active volcano famous for its stunning sunrise views.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Prambanan (Central Java)",
    description: "Another UNESCO World Heritage site,a magnificent Hindu temple complex dedicated to the Trimurti gods:",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Yogyakarta",
    description:"Key attractions include the Sultan's Palace (Kraton), Taman Sari Water Castle, and the vibrant Malioboro Street for shopping and dining.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jakarta",
    description: " Must-visit places include the National Monument (Monas), Kota Tua (Old Town), and the Istiqlal Mosque.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dieng Plateau",
    description: "A volcanic plateau with a cool climate, ancient Hindu temples, colorful sulfur lakes, and scenic terraced landscapes.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Taman Mini Indonesia Indah",
    description: "A cultural park showcasing the diverse cultures, architecture, and traditions of Indonesia’s various provinces.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];