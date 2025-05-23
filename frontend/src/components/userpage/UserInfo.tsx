'use client';

import {redirect, useParams} from "next/navigation";
import {Badge} from "@/components/ui/badge";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {userInfo} from "@/lib/user-info";
import {zustandStore} from "@/lib/zustand-store";

const formSchema = z.object({
    username: z.string().min(3, {message: "Username must be at least 3 characters long!"})
        .max(50),
    email: z.string().email({message: "Invalid email address!"}),
    workplace: z.string().max(100),
    role: z.enum(["admin", "user"]),
});

function capitalize(str: string) {
    return String(str).charAt(0).toUpperCase() + str.slice(1);
}

function UserInfo() {

    const params= useParams<{ username: string }>();

    const isLoggedUser = params.username === zustandStore.getState().username;

    const updateUserInfo = zustandStore.getState().updateUserInfo;


    //should be fetched from db
    const [userData, setUserData] = useState<userInfo>(
        isLoggedUser ? zustandStore.getState() :
        {
            username: params.username,
            email: "123123@gmail.com",
            workplace: "NASA",
            role: "admin"
        }
    );

    useEffect(() => {
        if (isLoggedUser) {
            setUserData(zustandStore.getState());
        }
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: userData?.username,
            email: userData?.email,
            workplace: userData?.workplace,
            role: userData?.role
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setUserData(values);
        if (isLoggedUser) {
            updateUserInfo(values);
            if (values.username !== userData.username) {
                redirect(`/user/${values.username}`);
            }
        }
    }

    return (
        <div className="rounded-lg bg-primary-foreground p-4">
            <div className='flex justify-between items-center'>
                <h1 className="font-medium text-lg">User Information</h1>
                {/*TODO: put it into a separate page*/}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant='outline'>Edit</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Editing Profile Info</SheetTitle>
                            <SheetDescription asChild>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                                        <FormField control={form.control} name="username"
                                                   render={({field}) => (
                                                       <FormItem>
                                                           <FormLabel>Username</FormLabel>
                                                           <FormControl>
                                                               <Input placeholder={userData?.username} {...field}/>
                                                           </FormControl>
                                                           <FormDescription>
                                                               Your username.
                                                           </FormDescription>
                                                           <FormMessage/>
                                                       </FormItem>
                                                   )}/>
                                        <FormField control={form.control} name="email"
                                                   render={({field}) => (
                                                       <FormItem>
                                                           <FormLabel>Email</FormLabel>
                                                           <FormControl>
                                                               <Input placeholder={userData?.email} {...field}/>
                                                           </FormControl>
                                                           <FormDescription>
                                                               Your public email that can be used to contact you.
                                                           </FormDescription>
                                                           <FormMessage/>
                                                       </FormItem>
                                                   )}/>
                                        <FormField control={form.control} name="workplace"
                                                   render={({field}) => (
                                                       <FormItem>
                                                           <FormLabel>Work place</FormLabel>
                                                           <FormControl>
                                                               <Input placeholder={userData?.workplace} {...field}/>
                                                           </FormControl>
                                                           <FormDescription>
                                                               Your place of work
                                                           </FormDescription>
                                                           <FormMessage/>
                                                       </FormItem>
                                                   )}/>
                                        {/*TODO: make this available to admins only*/}
                                        <FormField control={form.control} name="role"
                                                   render={({field}) => (
                                                       <FormItem>
                                                           <FormLabel>User Role</FormLabel>
                                                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                               <FormControl>
                                                                   <SelectTrigger>
                                                                       <SelectValue placeholder="Pick a role for this user" />
                                                                   </SelectTrigger>
                                                               </FormControl>
                                                               <SelectContent>
                                                                   <SelectItem value="user">User</SelectItem>
                                                                   <SelectItem value="admin">Admin</SelectItem>
                                                               </SelectContent>
                                                           </Select>
                                                           <FormDescription>
                                                               User privileges depend on their role.
                                                           </FormDescription>
                                                           <FormMessage/>
                                                       </FormItem>
                                                   )}/>
                                        <Button>Submit</Button>
                                    </form>
                                </Form>
                            </SheetDescription>
                        </SheetHeader>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Done</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
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