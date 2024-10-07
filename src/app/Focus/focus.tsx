
import { FocusCards } from "@/app/components/ui/focus-cards";


export function FocusCardsDemo() {
  const cards = [
    {
      title: "Mountains for Life",
      src: "/mountains.jpg",
    },
    {
      title: "Paris",
      src: "/paris.jpg",
    },
    {
      title: "Breath Taking Concerts",
      src: "/concert.jpg",
    },
   
    {
      title: "The road not taken",
      src: "/road.jpg",
    },
    {
      title: "The First Rule",
      src: "/man.jpg",
    },

    {
      title: "Camping",
      src: "/camping .jpg"
    },
    
  ];


  return <FocusCards cards={cards} />;
}
