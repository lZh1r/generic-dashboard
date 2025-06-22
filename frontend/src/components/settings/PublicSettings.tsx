"use client";

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {zustandStore} from "@/lib/zustand-store";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {useShallow} from "zustand/react/shallow";
import {Input} from "@/components/ui/input";
import {toast} from "sonner";
import React from "react";

const formSchema = z.object({
    displayName: z.string().min(3, {message: "Display name must be at least 3 characters long!"}),
    username: z.string().min(3, {message: "Username must be at least 3 characters long!"})
        .max(50),
    email: z.string().email({message: "Invalid email address!"}),
    workplace: z.string().max(100),
});

function PublicSettings() {

    const updateUserData = zustandStore.getState().updateUserInfo;

    const userData = zustandStore(
        useShallow((state) => ({
            displayName: state.displayName,
            username: state.username,
            email: state.email,
            workplace: state.workplace,
            role: state.role,
            status: state.status
        }))
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            displayName: userData.displayName,
            username: userData.username,
            email: userData.email,
            workplace: userData.workplace,
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const newData = {...userData, ...values};
        updateUserData(newData);
        toast("Updated public information!");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField control={form.control} name="displayName" render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Display Name</FormLabel>
                            <FormControl>
                                <Input placeholder={userData.displayName} {...field}/>
                            </FormControl>
                            <FormDescription>The name that everybody sees</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )
                }/>
                <FormField control={form.control} name="username" render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder={userData.username} {...field}/>
                            </FormControl>
                            <FormDescription>Username that other people can use to tag you</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )
                }/>
                <FormField control={form.control} name="email" render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder={userData.email} {...field}/>
                            </FormControl>
                            <FormDescription>Your public email for communication</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )
                }/>
                <FormField control={form.control} name="workplace" render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Workplace</FormLabel>
                            <FormControl>
                                <Input placeholder={userData.workplace} {...field}/>
                            </FormControl>
                            <FormDescription>Your place of work</FormDescription>
                        </FormItem>
                    )
                }/>
                <Button className="cursor-pointer">Submit</Button>
            </form>
        </Form>
    );
}

export default PublicSettings;