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

export function City26() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Houseboats%2C_Dal_Lake%2C_Kashmir.jpg"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Gulmarg_-_Jannat_on_Earth.jpg"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmmLlefhizb4TFAwWCiPluZiIBgYmBXswYQ&s"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Sonmarg_rishav7336.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCxMelr1lASFp2L_dcimluosMJ4DdyM-Ghw&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyrTs2N1Axwfqj12uIjuXJwXSI1H5hN1F2A&s"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVdRk3e1L4pjQdHLADKslih3hIHa-Ah1mig&s"
    alt="Cover Image"
  />
</div>
);

const items = [
  {
    title: "Srinagar",
    description: "Famous for its beautiful Dal Lake, where you can experience a shikara ride and stay in a traditional houseboat.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gulmarg",
    description: "Offers stunning views of snow-capped mountains, and the Gulmarg Gondola is one of the highest cable cars in the world.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pahalgam",
    description: "A picturesque town located at the confluence of the Lidder River and Sheshnag Lake.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sonamarg",
    description: "Breathtaking landscapes and snow-covered fields.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Leh-Ladakh",
    description: "Discover stunning landscapes, Buddhist monasteries, and adventure activities like trekking, river rafting, and mountain biking.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kupwara",
    description: "A hidden gem in Kashmir, Kupwara is known for its pristine beauty, lush green meadows, and majestic mountains.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dachigam National Park",
    description: "Home to the endangered Hangul deer and a variety of other wildlife.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];