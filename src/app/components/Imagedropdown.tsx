"use client";
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
import { logoutAccount } from "@/lib/server/users.actions";
import { useRouter } from 'next/navigation'

export default function DropdownMenuCheckboxes({user}:any) {
  const router = useRouter()
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if(loggedOut) router.push('/signin')
  }
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
               {
                user? <a href="#">Vibhuu</a>: <a href="/signin">Login</a>
               }
            </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <button type="submit" className="flex w-full items-center">
                {
                  user?<button onClick={handleLogOut}>Logout</button>:<a href="/signup">Signup</a>
                }
            </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
