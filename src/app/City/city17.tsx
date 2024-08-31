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

export function City17() {
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
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1570036969725-133e9943d646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFnaGlhJTIwc29waGlhfGVufDB8fDB8fHww"
    className="object-cover w-full"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1629140778196-cfec1a75f777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9wa2FwaSUyMHBhbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
    className="object-cover w-full"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1580139644189-14a08f064717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D"
    className="object-cover w-full"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1691324745671-5492378d1695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9zcGhvcnVzJTIwY3J1aXNlfGVufDB8fDB8fHww"
    className="object-cover w-full"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://plus.unsplash.com/premium_photo-1680185461539-0ed8352312a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW5jZXNzJTIwaXNsYW5kcyUyMGlzdGFuYnVsfGVufDB8fDB8fHww"
    className="object-cover w-full"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1687861349516-7a523b16120b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXRhJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D"
    className="object-cover w-full"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="object-cover w-full"
    src="https://images.unsplash.com/photo-1710924447482-94a28e497e6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFzaWxpY2ElMjBjaXN0ZXJufGVufDB8fDB8fHww"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Haghia Sophia",
    description: "A historic mosque and former cathedral, showcasing stunning Byzantine architecture.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Topkapi Palace ",
    description: "This palace offers a glimpse into the opulent lifestyle of the Ottoman Empire with its courtyards, rooms, and treasure-filled museums.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title:"Blue Mosque",
    description: "Known for its blue-tiled interior, this mosque is a masterpiece of Ottoman architecture ",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bosphorus Cruise",
    description:
      "Take a boat ride along the Bosphorus Strait to see the city's skyline and famous landmarks from the water",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Princes' Islands",
    description: "A short ferry ride from the city, these islands offer a peaceful escape with beaches, car-free streets, and historic buildings.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Galata Tower",
    description: "Offering panoramic views of Istanbul, this medieval stone tower is a great spot to see the city from above.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Basilica Cistern",
    description: "An underground water reservoir built by the Byzantines, this atmospheric site is famous for its rows of columns and the mysterious Medusa heads.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
