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

export function City34() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx1RYt7Td6kVekghmryoca7UKkgUtVWU9IA&s"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKu_glaEs5i8mZm8X4jHdWryJWUVu7amLeQ&s"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/6b/7a/3a/miraflores.jpg?w=1200&h=-1&s=1"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6DE9R2Ouxx0Qg1NkeRLThXzkAsTFve381A&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>
);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/f3/80.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_JOibfapu-Wnv4fWwDTtgBbUF1mJabK9QA&s"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdZ87P0SHZkAqQdodeLR_MKAbJNN3jxwYdQ&s"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Larco Museum",
    description: "A world-renowned museum dedicated to pre-Columbian art and history, featuring a collection of ceramics, textiles, and gold and silver artifacts.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Plaza Mayor",
    description: "The main square of Lima, surrounded by important buildings such as the Government Palace, the Cathedral of Lima, and the Archbishop’s Palace.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Miraflores",
    description: "A trendy district in Lima known for its parks, shopping, and oceanfront views.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Barranco",
    description: "A bohemian neighborhood known for its vibrant street art, colonial architecture, and lively nightlife.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Parque de la Reserva",
    description: "A large park in Lima known for its Circuito Mágico del Agua, a series of illuminated fountains that put on a spectacular light and music show in the evenings.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Catacombs of San Francisco",
    description: "A historic church and monastery in Lima, known for its extensive catacombs that contain the remains of thousands of people.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Parque de las Leyendas",
    description: "A large zoo and archaeological park in Lima, featuring exhibits on Peru’s diverse wildlife, as well as ancient ruins and cultural displays.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];