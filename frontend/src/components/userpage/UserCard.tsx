"use client";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {zustandStore} from "@/lib/zustand-store";
import {useParams} from "next/navigation";
import {capitalize} from "@/lib/lib";

function UserCard() {

    const params = useParams<{username: string}>();
    const isLoggedUser = params.username === zustandStore((state) => state.username);
    const displayName = zustandStore((state) => state.displayName);

    return (
        <div className="rounded-lg bg-primary-foreground p-4">
            <div className="flex gap-4 items-center">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/126076657?v=4"/>
                    <AvatarFallback>PF</AvatarFallback>
                </Avatar>
                <h1 className="text-lg font-medium">{
                    isLoggedUser ? displayName : capitalize(params.username)
                }</h1>
            </div>

        </div>
    );
}

export default UserCard;