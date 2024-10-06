import Image from "next/image";
import React from "react";
import DropdownMenuCheckboxes from "./Imagedropdown";
import { getLoggedInUser } from "@/lib/server/users.actions";

export default async function Header() {
  const user = await getLoggedInUser();
  return (
    <header className="header">
      <div className="logo">
        <Image src="/websitelogo3.jpg" 
        
        width={35} 
        height={35}
        className="md:mr-2 md:w-[50px] md:h-[50px] md:ml-2"
        />
        <p className="webname">MakeADream</p>
      </div>
        <DropdownMenuCheckboxes user={user}/>
    </header>
  );
}
