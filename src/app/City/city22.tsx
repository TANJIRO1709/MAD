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

export function City22() {
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
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3RF8ooUlfewsTtvgwKx_R8vtvVM8yksoRg&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://mauritiusattractions.com/slir/w854/content/images/guide/i-336/le-morne-brabant%20(1).jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://cdn.britannica.com/09/93509-050-4F6AD522/waterfront-tourists-Mauritius-Port-Louis.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://mauritiusexplored.com/wp-content/uploads/2018/10/Blue-bay-in-Mauritius-.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_E4FAPOR7fC3I6l3hOU7CRCDOUjuAjxrGQ&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2YRaXgblkn_WUA1XqRxQ9Gdq8TemsOLXCQ&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rochester_falls.jpg/1200px-Rochester_falls.jpg"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Seven Colored Earths",
    description: " Located in Chamarel, this natural phenomenon features sand dunes of seven distinct colors, creating a surreal landscape.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Le Morne Brabant",
    description: "Offers stunning hiking trails with panoramic views of the island and surrounding turquoise waters.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Port Louis",
    description: "Visit Caudan Waterfront, Central Market, and the historic Aapravasi Ghat, a UNESCO World Heritage site.",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Blue Bay Marine Park",
    description:"A top spot for snorkeling, diving, and glass-bottom boat tours.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Grand Bassin",
    description: "A sacred lake and important pilgrimage site for Hindus in Mauritius.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Eureka House",
    description: "A beautifully preserved colonial mansion in Moka, offering a glimpse into the island’s colonial past.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Rochester Falls",
    description: "Known for its unique rectangular rock formations and serene surroundings.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
