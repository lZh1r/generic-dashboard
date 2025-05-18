'use client';

import Link from "next/link";
import {LogOut, Moon, Settings, Sun, User} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";

function NavBar() {

    const {setTheme} = useTheme();

    return (
        <nav className='p-4 flex items-center justify-between'>
            collapse
            <div className='flex items-center gap-4'>
                <Link href={'/'}>Dashboard</Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"outline"}>
                            <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                            <span className='sr-only'>Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/126076657?v=4"/>
                            <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                        <span className='sr-only'>Account menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={15}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User className="mr-2" /> Profile</DropdownMenuItem>
                        <DropdownMenuItem><Settings className="mr-2" /> Settings</DropdownMenuItem>
                        <DropdownMenuItem variant={"destructive"}><LogOut className="mr-2" /> Log Out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

        </nav>
    );
}

export default NavBar;