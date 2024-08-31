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

export function City16() {
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
    src="https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image2 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXvnzcJcmqXQtxclwK1V6K-4bqec6Gt0yFQ&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image3 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/55/ec.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image4 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/56/6f.jpg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="background"
  />
</div>

);
const Image5 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3AiHxQCd3kb2BsljMsqwr4QwBe99ZI8KHg&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>
);
const Image6 = () => (
<div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydqBKdKq_FYALR3kDkxNMclbvQDH216Kivg&s"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Cover Image"
  />
</div>

);
const Image7 = () => (
 <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://www.barcelona-life.com/wp-content/uploads/2018/10/mnac-montjuic.jpg"
    alt="Cover Image"
  />
</div>

);

const items = [
  {
    title: "Sagrada Família",
    description: "Antoni Gaudí’s iconic basilica, still under construction, is known for its elaborate and unique architectural style",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Park Güell",
    description: "Another Gaudí masterpiece, this colorful park features whimsical mosaics, serpentine benches, and panoramic views of the city.",
    header: <Image2 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gothic Quarter",
    description: "This historic district is a maze of narrow medieval streets filled with shops, cafes, and historic buildings.",
    header: <Image3/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  { title: "La Rambla",
    description: "A bustling street in the heart of the city, La Rambla is lined with shops, restaurants, and street performers.",
    header: <Image4/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Casa Milà",
    description: "Known for its wavy stone facade and wrought-iron balconies, this features a unique rooftop with chimney sculptures and offers insight into modernist architecture.",
    header: <Image5/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Casa Batlló",
    description: "Another Gaudí creation, this building is famous for its colorful facade and innovative design. The interior is equally impressive, with curved lines and imaginative details.",
    header: <Image6/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Montjuïc",
    description: "A hill overlooking the city, Montjuïc is home to several attractions, including the Magic Fountain, the Montjuïc Castle, and the National Art Museum of Catalonia (MNAC).",
    header: <Image7 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];