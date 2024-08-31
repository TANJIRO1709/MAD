import * as React from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { LogOut} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function DropdownMenuCheckboxes({user}:any) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button size="icon" className="rounded-full bg-transparent hover:bg-transparent">
          <Image
            src={"/Person.png"}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-full bg-transparent object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuLabel>
           Your Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <button type="submit" className="flex w-full items-center">
                <a href="/signin">Login</a>
            </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <button type="submit" className="flex w-full items-center">
                <a href="/signup">SignUp</a>
            </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
