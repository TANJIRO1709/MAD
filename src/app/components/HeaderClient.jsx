// HeaderClient.js
"use client"; // This makes the component a Client Component
import Image from "next/image";
import React, { useEffect } from "react";
import DropdownMenuCheckboxes from "./Imagedropdown";
import { getLoggedInUser } from "@/lib/server/users.actions";

export default function HeaderClient() {
  const[user,setuser]=React.useState(null);
  useEffect(()=>{
    const loggedin = async () => {
      const user=await getLoggedInUser();
      setuser(user) 
    }
    loggedin();
  },[])
  return (
    <header className="header">
      <div className="logo">
        <Image
          src="/websitelogo3.jpg"
          width={35}
          height={35}
          className="md:mr-2 md:w-[50px] md:h-[50px] md:ml-2"
          alt="Website Logo"
        />
        <p className="webname">MakeADream</p>
      </div>
      {/* Pass the user data to the dropdown */}
      <DropdownMenuCheckboxes user={user} />
    </header>
  );
}
