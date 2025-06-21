"use client";

import {useState} from "react";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {zustandStore} from "@/lib/zustand-store";

function PrivacySettings() {

    const isPrivateAccount = zustandStore((state) => state.isPrivate);
    const updatePrivacy = zustandStore.getState().updateAccountVisibility;

    return (
        <div className="space-y-10">
            <div className="space-y-5">
                <h1 className="text-lg font-medium">General</h1>
                <div className="w-fit">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex gap-2">
                                <Switch checked={isPrivateAccount} onCheckedChange={updatePrivacy} id="private-account" className="cursor-pointer"/>
                                <Label htmlFor="private-account" className="cursor-pointer">Private Account</Label>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            Determines whether your account is hidden from other users or not
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div className="w-fit">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex gap-2">
                                <Switch checked={true} id="data-sharing" className="cursor-pointer"/>
                                <Label htmlFor="data-sharing" className="cursor-pointer">Allow Data Sharing</Label>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            Allow John Pork Industries to use your project data to train new AI overlord
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <div className="space-y-5">
                <h1 className="font-medium text-lg text-destructive">Radical Territory</h1>
                <div>
                    <Button variant="outline" className="cursor-pointer">
                        Clear Search History
                    </Button>
                </div>
                <div>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive" className="cursor-pointer">
                                Clear User Data
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This cannot be undone. All your project data as well as public information will be deleted from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel asChild>
                                    <Button variant="outline" className="cursor-pointer">
                                        Cancel
                                    </Button>
                                </AlertDialogCancel>
                                <AlertDialogAction asChild>
                                    <Button variant="destructive" className="cursor-pointer text-white">
                                        Proceed
                                    </Button>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
                <div>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive" className="cursor-pointer">
                                Delete Account
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone! Do this only if you fully understand all the consequences!
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel asChild>
                                    <Button variant="outline" className="cursor-pointer">
                                        Cancel
                                    </Button>
                                </AlertDialogCancel>
                                <AlertDialogAction asChild>
                                    <Button variant="destructive" className="cursor-pointer text-white">
                                        Proceed
                                    </Button>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>



        </div>
    );
}

export default PrivacySettings;