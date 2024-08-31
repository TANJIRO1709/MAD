import { cn } from "@/lib/utils";
import React from "react";
import {BentoGridItem , BentoGrid} from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function City11() {
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
    src="https://literarytoursegypt.com/wp-content/uploads/2022/08/Khan-El-Khalili-Bazaar-1024x685.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.squarespace-cdn.com/content/v1/5f56423f4aca615934476295/1636618598798-W4UHMXZJXLLJ853B3KCW/Citadel+3.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://www.egypttoursportal.com/images/2018/10/Architecture-of-Al-Azhar-Mosque-Egypt-Tours-Portal.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://cdn.mos.cms.futurecdn.net/YMa7Wx2FyjQFUjEeqa72Rm-1200-80.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://images.squarespace-cdn.com/content/v1/56c13cc00442627a08632989/1585432288121-15NNGMB5XEP5CJ1YSGL3/egyptianmuseum.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXdpHcrUdZnbx6nc76ROGkkhPxN3w2Z4mcw&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://explore.rehlat.ae/static/media/searchdestination/thingstodo/images/cairo/zamalek_(gezira_island)/large_1280px-Zamalek,_Cairo_Governorate,_Egypt_-_panoramio.webp"
    alt="Cover Image"
  />
</div>
);

const items = [
  {
    
    title: "Khan El Khalili Bazaar",
    description: "A bustling market in the heart of Islamic Cairo, Khan El Khalili is a maze of narrow streets filled with shops selling spices, jewelry, textiles, and souvenirs.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cairo Citadel",
    description: "A medieval Islamic fortification, the Cairo Citadel offers stunning views of the city.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  { title: "Al-Azhar Mosque",
    description: "One of the oldest mosques in Cairo and a leading center of Islamic learning, Al-Azhar Mosque is a symbol of Cairo's religious heritage.",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pyramids of Gaza",
    description: "The Pyramids of Giza include the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Egyptian Museum",
    description: "The Egyptian Museum houses an extensive collection of ancient Egyptian artifacts, including the treasures of Tutankhamun, mummies, statues, and jewelry.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Coptic Cairo",
    description: "Known for its ancient Christian churches and heritage sites, including the Hanging Church (Saint Virgin Mary's Coptic Orthodox Church), the Coptic Museum, and the Ben Ezra Synagogue.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Zamalek",
    description: "An upscale district on Gezira Island in the Nile, Zamalek is known for its leafy streets, elegant villas, and vibrant cultural scene.",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
