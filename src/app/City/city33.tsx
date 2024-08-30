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

export function BentoGridDemo() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://image-tc.galaxy.tf/wijpeg-5as3kpt2zbbzzygipb2j4dndx/covent-garden_wide.jpg?crop=0%2C51%2C980%2C551"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://static1.squarespace.com/static/62015f66f840ef671da14ae7/t/6492626032b36f4ab4776f41/1687315047650/Covent+Garden+007.JPG?format=1500w"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://cdn.londonandpartners.com/asset/covent-garden-the-historic-market-building-in-covent-garden-c12a64ce60c119fef5e2b040604a090d.jpg"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwkzSgYCvuCec8KJn_m8lWqasl8tE17DR9Q&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://cdn.londonandpartners.com/asset/covent-garden-market-covent-garden-apple-market-d92f9f4d4dd48c08dcfb1b41483c02c7.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://images.squarespace-cdn.com/content/v1/62015f66f840ef671da14ae7/282019ee-301b-4caa-b80e-8f6c332814aa/Covent+Garden+040.JPG"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/302000/302547-St-Pauls-Church-London.jpg"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Cerro de Monserrate",
    description: "A mountain overlooking Bogotá, with a sanctuary at the top dedicated to El Señor Caído.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "La Candelaria",
    description: "The historic center of Bogotá, known for its colorful colonial buildings, cobblestone streets, and vibrant cultural scene.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Museo del Oro",
    description: "A museum dedicated to the works of Fernando Botero, one of Colombia’s most famous artists.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jardín Botánico de Bogotá",
    description: "A beautiful botanical garden showcasing Colombia’s diverse flora.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Usaquén",
    description: "A charming neighborhood known for its colonial architecture, Sunday flea market, and a wide range of restaurants and cafes.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Andrés Carne de Res",
    description: "A famous restaurant and nightlife spot known for its lively atmosphere, eclectic decor, and traditional Colombian dishes.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Zipaquirá Salt Cathedral",
    description: "This underground cathedral is carved out of a salt mine and is one of Colombia’s most unique attractions.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];