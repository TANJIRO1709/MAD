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

export function City28() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://image-tc.galaxy.tf/wijpeg-63jcrxr00zzg5adihwr7g8sby/chatuchak-weekend-market_standard.jpg?crop=240%2C0%2C1440%2C1080"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/Khlong-Lat-Mayom.jpg"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCg1ceu8z9AUXhOJ31MXrKDtOWslqncOJ8qw&s"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIG83_Zkddfx6MsB-Ur6ceALHtEb88lYWpw&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://smarthistory.org/wp-content/uploads/2020/12/Temple-complex-Wat-Phra-Kaew.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b8/3b/d3/lumpini-park-4.jpg?w=1200&h=-1&s=1"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/84/9b.jpg"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Chatuchak Weekend Market",
    description: "One of the largest markets in the world, offers an overwhelming variety of goods, including clothing, accessories, antiques, plants, and street food.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Floating market",
    description: "Bangkok is famous for its floating markets, where vendors sell goods from boats.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jim Thompson House",
    description: "The former home of American businessman and silk entrepreneur Jim Thompson, this traditional Thai-style house has been preserved as a museum.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Temple of the Reclining Buddha",
    description: "This temple is home to the giant reclining Buddha statue, which is 46 meters long and covered in gold leaf.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "LTemple of the Emerald Buddha",
    description: "The Grand Palace is one of Bangkok’s most famous landmarks and was the official residence of the Thai Kings for centuries. ",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lumphini Park",
    description: "A large public park in the heart of Bangkok, Lumphini Park offers a peaceful escape from the city’s hustle and bustle.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MBK Center",
    description: "A massive shopping mall known for its affordable prices and wide variety of goods, including electronics, clothing, and souvenirs.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];