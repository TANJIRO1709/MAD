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

export function City27() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://images.unsplash.com/photo-1593620529462-619501b0f7f1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover w-full"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://plus.unsplash.com/premium_photo-1697730390320-8412ee5eae82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwZ29hfGVufDB8fDB8fHww" className="object-cover w-full"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://plus.unsplash.com/premium_photo-1669035429780-1c445170c382?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVkaHNhZ2FyJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D"
  className="object-cover w-full"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1648367896037-7a2a022ab7d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuYWppfGVufDB8fDB8fHww"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1702890761067-4d6fdb0abced?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9ydCUyMGFndWFkYXxlbnwwfHwwfHx8MA%3D%3D"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5qdW5hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"className="object-cover w-full"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://images.unsplash.com/photo-1584111729010-e86a3debb34e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyZmx5JTIwYmVhY2glMjBnb2F8ZW58MHx8MHx8fDA%3D"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Baga Beach",
    description: "It’s a hotspot for tourists looking to enjoy Goa’s beach culture.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Old Goa",
    description: "A UNESCO World Heritage site, and home to several historical churches and cathedrals",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dudhsagar Waterfalls",
    description: "The four-tiered waterfall is surrounded by lush greenery and is a popular spot for trekking and nature lovers.",
    header: <Image3/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Panaji",
    description: "Known for its charming colonial architecture, vibrant streets, and the famous Our Lady of the Immaculate Conception Church.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fort Aguada",
    description: "Offers stunning views of the Arabian Sea and houses a lighthouse.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Anjuna Beach",
    description: "A favorite among backpackers and those seeking a laid-back vibe.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Butterfly Beach",
    description: " It’s known for its scenic beauty and sightings of butterflies and dolphins.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];