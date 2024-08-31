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

export function City3() {
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
    src="https://variety.com/wp-content/uploads/2024/06/Batman-Costume.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKnk-QKggnuDU2z8dF6-eqmMprkf-odeIgw&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://www.coventgarden.london/media/ukebdxda/free-roam-comic-zone-batman-unmasked.jpg?anchor=center&mode=crop&width=952&height=1078&rnd=133628323729270000"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://www.ianvisits.co.uk/articles/wp-content/uploads/2024/06/Batman-Unmasked-exhibition-02.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oWZf53loU2rSWcF1B4_JSAaDCUP5KQPZSA&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavR6T5769l4DRrkK0ccwpzuOTDPxTU0Uaew&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2024/06/23175531/Batman-Cowls-on-display-%C2%A9-BatmanUnmasked-1024x683.jpg"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    
    title: "Batman Unmasked",
    description: "Experience the cinematic world of Batman like never before, as you take a journey through the Warner Bros",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title:  "DC universe",
    description: "Archives, discovering a jaw-dropping collection of Batman memorabilia and props.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Batman",
    description: "Explore the Batcave and Batman films (1989-2022) as you enter the world of Gotham City. ",
    header: <Image3/>,
    
  },
  {
    title: "Robert Pattinson",
    description:
      "Venture into the Gotham City universe, arriving at Rogue's Gallery, a dark space devoted to the iconic DC Super-Villains rivalling Batman over the years",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jim Carrey’s Riddler outfit ",
    description: "Jim Carrey’s Riddler outfit (1995) and Arnold Schwarzenegger’s Mr. Freeze suit (1997) will also be making an appearance, alongside  Joaquin Phoenix's red suit in “Joker” (2019) and the infamous nurses uniform worn by Heath Ledger in “The Dark Knight.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    
    description: "Navigating through a series of nine rooms feeling as though you have stepped into the DC universe itself.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dark Knight",
    description: "Fans of all ages will be able to enter the exhibition, navigate nine themed rooms and see Batsuits, Super-Villain suits, props and weapons up close.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];