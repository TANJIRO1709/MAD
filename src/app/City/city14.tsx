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

export function City14() {
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
    src="https://hotelverte.com/wp-content/uploads/2023/12/top-things-to-do-in-warsaw-old-town.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQoX6Y64rwsNMbznX83t3qda-l190N5giyw&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGzUZ8S9UimgJci8ap-rsokRObRkNyGPCCA&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/73/10/2e.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkh8-AxQloKxzjfvPDtqC7hkn_1l6b2wJ_w&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eh6-4TMP1jDI1VgabDhRXPbDTO2ejDP5Tg&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G2kp1rdOO3p7uShKxNcg93ZK7wnAgVAvYQ&s"
    alt="Cover Image"
  />
</div>
);

const items = [
  {
    title: "Warsaw Old Town",
    description: "Meticulously reconstructed after World War II, highlights include the Royal Castle, Market Square, and the Barbican.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Łazienki Park",
    description: "A large and picturesque park featuring the stunning Łazienki Palace (Palace on the Isle), beautiful gardens, and the Chopin Monument.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Wilanów Palace",
    description: "Often referred to as the Polish Versailles, this baroque palace and its extensive gardens are a beautiful example of royal architecture and landscaping.",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Warsaw Uprising Museum",
    description: "Dedicated to the 1944 Warsaw Uprising against Nazi occupation, this museum offers a comprehensive and moving account of the resistance and the city’s wartime history.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Palace of Culture and Science",
    description: "An iconic skyscraper and the tallest building in Poland, this Soviet-era landmark offers observation decks with panoramic views of the city.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Museum of the History of Polish Jews(POLIN)",
    description: "This award-winning museum provides an in-depth look at the history and culture of Polish Jews from the medieval period to the present day.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Złote Tarasy",
    description: "A modern shopping and entertainment complex located near the central train station, featuring a distinctive glass dome..",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];