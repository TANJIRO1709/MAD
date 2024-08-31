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

export function City30() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UXFwMihn6u4DNnPRlQK1owSJd68KgiLdAA&s"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://c8.alamy.com/comp/KWP1DK/house-of-liberty-museum-casa-de-la-libertad-in-sucre-bolivia-KWP1DK.jpg"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://boliviatravelsite.com/Images/Attractionphotos/recoleta-sucre-005.jpg"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqUj2REdnomMZNxNtFh5qqW-G9nfezy9PyA&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoKKqat8qMIoORIASvVviTj72cB8A5QW3iQ&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5n7dqGP8jMduquPVosCvqBsPvj4QiNrszg&s"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ701VPHLghO5XKPA21Tuuxutvybq8pQZsTUg&s"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Plaza 25 de Mayo",
    description: "The main square in Sucre, surrounded by historic buildings like the Casa de la Libertad, where Bolivia’s Declaration of Independence was signed.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Casa de la Libertad",
    description: "A museum dedicated to Bolivia’s independence, located in a historic building in Plaza 25 de Mayo. It’s a must-visit for history enthusiasts.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "La Recoleta",
    description: "The Recoleta Convent and the surrounding area offer a peaceful retreat with beautiful gardens.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Parque Cretácico",
    description: "A unique attraction featuring one of the largest collections of dinosaur footprints in the world.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "San Felipe Neri Church",
    description: "A beautiful colonial church with a rooftop that offers panoramic views of Sucre.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mercado Central",
    description: "A bustling market where you can experience local life, taste traditional Bolivian food, and shop for fresh produce, textiles, and handicrafts.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Parque Bolívar",
    description:"A popular park in Sucre with fountains, statues, and a replica of the Eiffel Tower.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];