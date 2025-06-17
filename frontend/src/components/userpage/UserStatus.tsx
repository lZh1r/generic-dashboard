'use client';

import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {zustandStore} from "@/lib/zustand-store";
import {useLoggedIn} from "@/lib/useLoggedIn";

function UserStatus() {

    const status = useLoggedIn() ? zustandStore((state) => state.status) : "Their status";
    const updateStatus = zustandStore.getState().updateUserStatus;
    const [textAreaContent, setTextAreaContent] = useState(status);

    return (
        <div className="rounded-lg bg-primary-foreground p-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-medium">Status</h1>
                <Sheet>
                    <SheetTrigger className="cursor-pointer" asChild>
                        {
                            useLoggedIn() && <Button variant='outline'>Edit</Button>
                        }
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Customizing Status</SheetTitle>
                            <SheetDescription>
                                Feel free to express yourself here!
                            </SheetDescription>
                        </SheetHeader>
                        <div className='p-2'>
                            <Textarea className='resize-none'
                                      value={textAreaContent}
                                      onChange={(e) => setTextAreaContent(e.target.value)} maxLength={100}/>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button className="cursor-pointer" onClick={() => {
                                    updateStatus(textAreaContent);
                                }} type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
            <p className="p-2">{status}</p>
        </div>
    );
}

export default UserStatus;