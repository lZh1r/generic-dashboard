'use client';

import {useParams} from "next/navigation";
import {Badge} from "@/components/ui/badge";
import {useEffect, useState} from "react";
import {userInfo} from "@/lib/user-info";
import {zustandStore} from "@/lib/zustand-store";
import {capitalize} from "@/lib/lib";
import {useLoggedIn} from "@/lib/useLoggedIn";

function UserInfo() {

    const params= useParams<{ username: string }>();
    const isLoggedUser = useLoggedIn();


    //should be fetched from db
    const [userData, setUserData] = useState<userInfo>(
        isLoggedUser ? zustandStore.getState() :
        {
            username: params.username,
            email: "123123@gmail.com",
            workplace: "NASA",
            role: "admin",
            displayName: capitalize(params.username),
            status: "Stuff"
        }
    );

    useEffect(() => {
        if (isLoggedUser) {
            setUserData(zustandStore.getState());
        }
    }, []);

    return (
        <div className="rounded-lg bg-primary-foreground p-4">
            <div className='flex justify-between items-center'>
                <h1 className="font-medium text-lg">User Information</h1>
            </div>
            <div className="space-y-4 mt-6 items-center">
                <div className='flex gap-1'>
                    <span className="font-medium">Username:</span>
                    <span>{userData.username}</span>
                </div>
                <div className='flex gap-1'>
                    <span className="font-medium">Email:</span>
                    <span>{userData.email}</span>
                </div>
                <div className='flex gap-1'>
                    <span className="font-medium">Work Place:</span>
                    <span>{userData.workplace}</span>
                </div>
                <div className='flex gap-1'>
                    <span className="font-medium">Role:</span>
                    <Badge>{capitalize(userData.role)}</Badge>
                </div>
                <p className='text-muted-foreground text-sm'>Joined on 01.09.1995</p>
            </div>
        </div>
    );
}

export default UserInfo;