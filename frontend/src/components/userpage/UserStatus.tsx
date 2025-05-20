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

function UserStatus() {

    const [status, setStatus] = useState('Customizable Status');
    const [textAreaContent, setTextAreaContent] = useState('');

    return (
        <div className="rounded-lg bg-primary-foreground p-4">
            <div className="flex justify-between">
                <h1 className="text-lg font-medium">Status</h1>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant='outline'>Edit</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Customizing Status</SheetTitle>
                            <SheetDescription>
                                Feel free to express yourself here!
                            </SheetDescription>
                        </SheetHeader>
                        <div>
                            <Textarea value={textAreaContent} onChange={(e) => setTextAreaContent(e.target.value)} maxLength={100}/>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button onClick={() => setStatus(textAreaContent)} type="submit">Save changes</Button>
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