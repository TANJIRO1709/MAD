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

export function City25() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgLpm4arlGgDD8J1gM1nW1Yl7aZM8OD1pqw&s"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f3/56/da/bat-cave.jpg?w=1400&h=1400&s=1"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Uprising-mount_kerinci.jpg"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/1a/3c/ea/caption.jpg?w=1200&h=-1&s=1"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d4/85/1b/caption.jpg?w=1200&h=-1&s=1"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/LRT_Palembang_Ampera_Bridge.jpg/1200px-LRT_Palembang_Ampera_Bridge.jpg"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/76/91/8a/mentawai-islands.jpg?w=1200&h=-1&s=1"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    
    title: "Lake Toba ",
    description: "The largest volcanic lake in the world, Lake Toba is a stunning natural wonder surrounded by mountains. ",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bukit Lawang",
    description: "A top destination for jungle trekking and wildlife encounters.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mount Kerinci",
    description: "The highest volcano in Indonesia, Mount Kerinci is part of the Kerinci Seblat National Park.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Padang",
    description:"A coastal city known for its Minangkabau culture and delicious Padang cuisine.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tanjung Puting National Park",
    description: "The park is renowned for its orangutan population, and you can explore it via riverboat cruises.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Palembang",
    description: "The Ampera Bridge, Kemaro Island, and the traditional floating markets are key attractions.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mentawai Islands",
    description: " It’s a paradise for surfers and adventure travelers.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];