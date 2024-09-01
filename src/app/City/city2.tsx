import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function City2() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={item.title} // Use a unique identifier as the key
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
    <Image
      src="https://cms.friendswithyou.com/uploads/projects/LittleCloud-Deck-main-image.png"
      className="absolute inset-0 w-full h-full object-cover"
      alt="Cover Image"
    />
  </div>
);

const Image2 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSty4g7I8nj4w9tnSFBAnEUkf-c5fwK31Xsw&s"
      className="absolute inset-0 w-full h-full object-cover"
      alt="Cover Image"
    />
  </div>
);

const Image3 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvDGx8pvc_odur8ShT0AmNnqY4uB6AYqCqiQ&s"
      className="absolute inset-0 w-full h-full object-cover"
      alt="Cover Image"
    />
  </div>
);

const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src="https://www.mbartsandculture.org/wp-content/uploads/2022/01/Image-1-1024x683.jpeg"
      className="absolute inset-0 w-full h-full object-cover"
      alt="background"
    />
  </div>
);

const Image5 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYNkPfzHtMr4G9TSMSTpI6c39Ib_V5q2y-g&s"
      className="absolute inset-0 w-full h-full object-cover"
      alt="Cover Image"
    />
  </div>
);

const Image6 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlmJGbRTT-Jp84ulb9geifSIq7jDQezHCWQ&s"
      className="absolute inset-0 w-full h-full object-cover"
      alt="Cover Image"
    />
  </div>
);

const Image7 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      className="absolute inset-0 w-full h-full object-cover"
      src="https://cms.friendswithyou.com/uploads/projects/Amanda-Fletcher-LittleCloud-Sky-1920x1440.jpg"
      alt="Cover Image"
    />
  </div>
);

const items = [
  {
    title: "Little Cloud",
    description:
      "A symbol of hope and the unification between humans and the natural world.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Symbol of our mission",
    description:
      "Transports the viewer to a peaceful, joyous, and more positive state",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "A spiritual essence",
    description:
      "We have developed this icon, which reveals that everything in our world has a soul and a purpose.",
    header: <Image3 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Animist perspective",
    description:
      "Bringing this sculpture to life invokes a continuation into the proliferation of healing art objects.",
    header: <Image4 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Symbol of our mission",
    description:
      "A 30-foot blimp in the Macy's Thanksgiving Day Parade, and beyond.",
    header: <Image5 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Symbol of our mission",
    description:
      "Large-scale outdoor sculptures, limited-edition bronze sculptures, limited edition prints, hanging inflatable sculptures.",
    header: <Image6 />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Little Cloud World",
    description:
      "We have created this worldwide symbol that embodies an emotional and personable storyline.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
