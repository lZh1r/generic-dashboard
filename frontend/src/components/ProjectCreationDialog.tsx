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
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {ProjectCategories} from "@/lib/lib";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

const formSchema = z.object({
    title: z.string().min(3, {message: "Project title must be at least 3 characters long"}),
    description: z.string().optional(),
    category: z.enum([ProjectCategories.CODING, ProjectCategories.TECH, ProjectCategories.AI, ProjectCategories.OTHER])
});

function ProjectCreationDialog() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            category: undefined
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <SidebarMenuButton className="cursor-pointer">
                    <Plus/>
                    Create Project
                </SidebarMenuButton>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <DialogHeader>
                            <DialogTitle>Project Creation</DialogTitle>
                            <DialogDescription>
                                What do you want to do today?
                            </DialogDescription>
                        </DialogHeader>
                        <FormField control={form.control} name="title"
                                render={
                                    ({field}) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="How about 'The Greatest Todo App Ever'?" {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                }/>
                        <FormField control={form.control} name="description"
                                   render={
                                       ({field}) => (
                                           <FormItem>
                                               <FormLabel>Description (optional)</FormLabel>
                                               <FormControl>
                                                   <Input type="text" placeholder="Your project description" {...field}/>
                                               </FormControl>
                                           </FormItem>
                                       )
                                   }/>
                        <FormField control={form.control} name="category"
                                   render={
                                       ({field}) => (
                                           <FormItem>
                                               <FormLabel>Category</FormLabel>
                                                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                       <FormControl>
                                                           <SelectTrigger className="cursor-pointer">
                                                               <SelectValue id="project-type" placeholder="Choose project category"/>
                                                           </SelectTrigger>
                                                       </FormControl>
                                                       <SelectContent>
                                                           <SelectItem className="cursor-pointer" value={ProjectCategories.CODING}>Coding</SelectItem>
                                                           <SelectItem className="cursor-pointer" value={ProjectCategories.TECH}>Tech</SelectItem>
                                                           <SelectItem className="cursor-pointer" value={ProjectCategories.AI}>AI</SelectItem>
                                                           <SelectItem className="cursor-pointer" value={ProjectCategories.OTHER}>Other</SelectItem>
                                                       </SelectContent>
                                                   </Select>
                                               <FormMessage/>
                                           </FormItem>
                                       )
                                   }/>
                        <DialogFooter>
                            <Button className="cursor-pointer" type="submit">Create</Button>
                            <DialogClose asChild>
                                <Button className="cursor-pointer" variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectCreationDialog;