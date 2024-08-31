import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function City15() {
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
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOi8fJcIKJN-HTTZjSQ4_K-ZR_CunvNYwaw&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://petnahafricatours.com/wp-content/uploads/2023/08/dubai-aqaurium.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0d/09/f2/b7.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://da28ojrjakn6f.cloudfront.net/tickets/4606/NEW/img_1709534792_1709534829__aq1.jpg?v=1.1.0"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a5/18/1f.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://i.ytimg.com/vi/0j-bWuG5utM/maxresdefault.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://da28ojrjakn6f.cloudfront.net/tickets/4606/NEW/img_1647248016_1647249468___att2626.jpg?v=1.1.0"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    
    title: "Stonehenge, Windsor Castle, and Bath",
    description: "As the oldest and largest occupied castle in the world",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Opulent State Apartments ",
    description: "Venture into the opulent State Apartments to discover a statue of Queen Victoria, the Waterloo Chamber, the King’s Rooms, Queen’s Rooms and world-famous masterpieces by the likes of Leonardo da Vinci and Rembrandt.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
  
    description: "Red uniforms and bearskin caps at the Changing of the Guard ceremony ",
    header: <Image3/>,
    
  },
  {
    title: "St George’s Chapel",
    description:
      "The setting for many royal weddings including that of Prince Harry and Meghan Markle’s and the final resting place of Queen Elizabeth II. ",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Salisbury Plains ",
    description: "The great and ancient stone circle of Stonehenge is one of the wonders of the world.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Neolithic houses",
    description: "Make sure to visit the award-winning visitor centre where you can see 250 archaelogical objects",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bath",
    description: "A UNESCO World Heritage Site, Bath is a stunning Georgian city with exceptional architecture.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];