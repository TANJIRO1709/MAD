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

export function City23() {
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyJ4wnT-kLGDaht5CGUd1Ws1YQ8G8EJafWw&s"/></div>
);
const Image2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoW8nBSUlmaQ3RWQMsxGQCoOoEFEcrjp-DSQ&s"/></div>
);
const Image3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEEKG_eazL9e-w-VQJMz5sHTseyiwZaSa6A&s"/></div>
);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrO8GfzKmvgdRni-JmfPPyW8OHfkc08TyLA&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2AD6DznS8q-yWXR_mNvgbHfP9sjJ9rqXVg&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0a73epws_oHrUD40ETzTvSOvPuQo0kmb8hw&s"/></div>
);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmyoYeB87etTZctrffRI3TtUueEtj-SLhSQ&s"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Bukit Bintang:",
    description: "The entertainment and shopping district of Kuala Lumpur",
    header: <Skeleton/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Batu Caves",
    description: "Famous for its large statue of Lord Murugan and the 272 colorful steps leading up to the main temple cave.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Petronas Twin Towers",
    description: "Visit the Skybridge and the observation deck on the 86th floor for stunning views of the city.",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kuala Lumpur Bird Park",
    description:
      "Home to thousands of birds from various species.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Islamic Arts Museum Malaysia",
    description: "The museum’s beautiful architecture and extensive collection make it a must-visit for culture enthusiasts.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jalan Alor",
    description: "One of the best places in Kuala Lumpur to experience local street food.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Masjid Negara",
    description: "Known for its unique architecture, including a star-shaped dome and a 73-meter-high minaret. ",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];