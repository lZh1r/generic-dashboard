'use client';

import React from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {SidebarMenuButton} from "@/components/ui/sidebar";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {ProjectCategories} from "@/lib/lib";

function ProjectCreationDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <SidebarMenuButton className="cursor-pointer">
                        <Plus/>
                        Create Project
                    </SidebarMenuButton>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Project Creation</DialogTitle>
                        <DialogDescription>
                            What do you want to do today?
                        </DialogDescription>
                    </DialogHeader>
                    {/*TODO: replace with a form with proper validation*/}
                    <div className="space-y-5">
                        <div className="space-y-3">
                            <Label htmlFor="project-name">Title</Label>
                            <Input id="project-name" type="text" placeholder="How about 'The Greatest Todo App Ever'?"/>
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="project-desc">Description</Label>
                            <Input id="project-desc" type="text" placeholder="Your project description"/>
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="project-type">Category</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue id="project-type" placeholder="Choose project category"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ProjectCategories.CODING}>Coding</SelectItem>
                                    <SelectItem value={ProjectCategories.TECH}>Tech</SelectItem>
                                    <SelectItem value={ProjectCategories.AI}>AI</SelectItem>
                                    <SelectItem value={ProjectCategories.OTHER}>Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button className="cursor-pointer" type="submit">Create</Button>
                        <DialogClose asChild>
                            <Button className="cursor-pointer" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}

export default ProjectCreationDialog;