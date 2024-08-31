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

export function City9() {
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
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2suVwT4zfldWmkUAlmb-jpN-QQwHfiAICA&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://www.prysmian.com/sites/www.prysmian.com/files/2024-01/burj-khalifa-build-02.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3n4e9Kh9rDQ6U3lxRzaLb_xfMF8MWUiEmcg&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://www.burjkhalifa.ae/images/home-bg.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/489308809.jpg?k=ee48a892e90578f209d5525c0c19a5aaa1fc4132aca7104f2d23c872c9f9901e&o=&hp=1"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yfKNUZIfC9qe-Vz5SkVWSpPhDONel-ek-A&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://volzero.com/img/news/88071_banner.jpg"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    
    title: "The Burj Khalifa",
    description: "It is the world's tallest structure. ",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Construction of the Burj Khalifa ",
    description: "The primary structure is reinforced concrete and some of the structural steel for the building originated",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
  
    description: "The United Arab Emirates government provided Dubai with financial support as the developer",
    header: <Image3/>,
    
  },
  {
    title: "Sheikh Khalifa bin Zayed Al Nahyan.",
    description:
      "Then president of the United Arab Emirates, Khalifa bin Zayed, organized federal financial support. ",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Islamic architecture  ",
    description: "The Y-shaped tripartite floor geometry is designed to optimise residential and hotel space.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Great Mosque of Samarra",
    description: "The Burj Khalifa's central core houses all vertical transportation except egress stairs within each of the wings.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Address Downtown Dubai",
    description: "The structure also features a cladding system which is designed to withstand Dubai's hot summer temperatures.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];