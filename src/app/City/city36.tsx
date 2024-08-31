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

export function City36() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/bd/c2/fd/caption.jpg?w=1400&h=1400&s=11"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://visitorlando.widen.net/content/ni5valehol/jpeg/5866-dino-digs-exhibit-2.jpg?crop=false&position=c&q=80&color=ffffffff&u=c4dqed"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-YAnweuTFE6GZhyKux8ABxsGlyKyDnzv7g&s"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSF338GCEn8jepZFnBoMpZKUj8xFT7qpw7KQ&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73b8rRCx0s2nB-BnhMHuqLJgh68A3gUQgqw&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94rKnSvrbzOn85M40VjbpLBjpjBq535rgtw&s"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxf914tjHXEDlWo9vrajBUx3Ex6mgDLRsqLA&s"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Walt Disney World Resort",
    description: "The most visited vacation resort in the world, Walt Disney World consists of four theme parks: Magic Kingdom, EPCOT, Disney’s Hollywood Studios, and Disney’s Animal Kingdom.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Orlando Science Center",
    description: "A family-friendly museum with interactive exhibits on science and technology.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gatorland",
    description: "Known as the “Alligator Capital of the World,” Gatorland is a wildlife park that offers close encounters with alligators, crocodiles, and other reptiles.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Universal Orlando Resort",
    description: "A major theme park complex with two main parks: Universal Studios Florida and Universal’s Islands of Adventure.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SeaWorld Orlando",
    description: "A marine-themed park featuring animal exhibits, shows, and thrilling rides. Highlights include the Mako roller coaster, the Orca Encounter, and the Shark Encounter.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ICON Park",
    description: "An entertainment complex featuring The Wheel, a 400-foot observation wheel offering panoramic views of Orlando.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Leu Gardens",
    description: "A beautiful 50-acre botanical garden located near downtown Orlando, featuring tropical plants, roses, palms, and camellias.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];