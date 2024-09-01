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

export function City19() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://images.unsplash.com/photo-1596891347912-212c389463b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VsdGFuJTIwcWFib29zJTIwZ3JhbmQlMjBtb3NxdWV8ZW58MHx8MHx8fDA%3D"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://images.unsplash.com/photo-1703659305541-9adbe1441df3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://images.unsplash.com/photo-1597725095342-a4796c65bbec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXV0cmFoJTIwY29ybmljaGV8ZW58MHx8MHx8fDA%3D"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://plus.unsplash.com/premium_photo-1668723712092-c9a5bca04743?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVydW0lMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D"
    className="object-cover w-full"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1722929664144-e9871cc34ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhbW5peWF0JTIwaXNsYW5kcyUyMG11c2NhdHxlbnwwfHwwfHx8MA%3D%3D"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://media.istockphoto.com/id/2159258432/photo/muscat-oman-al-alam-palace.jpg?s=2048x2048&w=is&k=20&c=0Snc2y5vRpF5x1jQMsaslXLOLRCJaOQbuv8HvGxDJSQ="/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://images.unsplash.com/photo-1585134339424-0fc98d0bfe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b21hbnxlbnwwfHwwfHx8MA%3D%3D"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    
    title: "Sultan Qaboos Grand Mosque",
    description: "Largest Mosque in Oman,known for its stunning architecture, intricate chandeliers, and one of the world's largest hand-woven carpets.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Royal Opera House Muscat",
    description: "A cultural landmark in Muscat, this venue hosts a variety of performances, from opera to ballet, and is known for its beautiful architectural design.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mutrah Corniche",
    description: "A scenic waterfront area with a long promenade offering beautiful views of the sea and mountains.",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Qurum Beach",
    description: "A popular beach in Muscat, great for a relaxing day by the sea. It's also lined with cafes and restaurants.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Daymaniyat Islands",
    description: "A group of small islands off the coast of Muscat, known for their clear waters, coral reefs, and abundant marine life, making them a perfect destination for snorkeling and diving.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Al Alam Palace",
    description: "The ceremonial palace of Sultan Qaboos, located in Old Muscat, it’s an impressive building surrounded by lush gardens.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Wadi Al Arbeen",
    description:"A beautiful wadi (valley) with pools of clear water, surrounded by rugged mountains.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];