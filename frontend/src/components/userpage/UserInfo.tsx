'use client';

import {useParams} from "next/navigation";
import {Badge} from "@/components/ui/badge";

function UserInfo() {

    const params= useParams<{ username: string }>();

    return (
        <div className="rounded-lg bg-primary-foreground p-4">
            <h1 className="font-medium text-lg">User Information</h1>
            <div className="space-y-4 mt-6 items-center">
                <div className='flex gap-1'>
                    <span className="font-medium">Username:</span>
                    <span>{params.username}</span>
                </div>
                <div className='flex gap-1'>
                    <span className="font-medium">Work Email:</span>
                    <span>{params.username}@gmail.com</span>
                </div>
                <div className='flex gap-1'>
                    <span className="font-medium">Role:</span>
                    <Badge>Admin</Badge>
                </div>
                <p className='text-muted-foreground text-sm'>Joined on 01.09.1995</p>
            </div>
        </div>
    );
}

export default UserInfo;