import CardList from "@/components/CardList";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {BadgeCheck, BadgeDollarSign, BadgeHelp} from "lucide-react";
import UserInfo from "@/components/userpage/UserInfo";
import UserStatus from "@/components/userpage/UserStatus";

function Page() {

    return (
        <div>
            <div className="mt-4 flex flex-col xl:flex-row gap-8 mb-4">
                <div className="w-full xl:w-1/3 space-y-5">
                    <div className="rounded-lg bg-primary-foreground p-4">
                        <h1 className="text-lg font-medium">User Badges</h1>
                        <div className='flex gap-4 mt-4'>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck className="border-2 border-solid border-green-400/30 hover:border-green-400/80 rounded-full p-1
                                                transition-all bg-green-700/40 hover:bg-green-700/80"
                                                size={40}/>
                                </HoverCardTrigger>
                                <HoverCardContent className='w-fit'>
                                    <h2>Verified User</h2>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeDollarSign className="border-2 border-solid border-green-400/30 hover:border-green-400/80 rounded-full p-1
                                                     transition-all bg-green-700/40 hover:bg-green-700/80"
                                                     size={40}/>
                                </HoverCardTrigger>
                                <HoverCardContent className='w-fit space-x-2.5'>
                                    <h2>Generous Donor</h2>
                                    <p className="text-sm text-muted-foreground">1500$</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeHelp className="border-2 border-solid border-green-400/30 hover:border-green-400/80 rounded-full p-1
                                               transition-all bg-green-700/40 hover:bg-green-700/80"
                                               size={40}/>
                                </HoverCardTrigger>
                                <HoverCardContent className='w-fit'>
                                    <h2>Problem Solver</h2>
                                    <p className="text-sm text-muted-foreground">100+ questions answered</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <UserStatus/>
                    <UserInfo/>
                    <div className="rounded-lg bg-primary-foreground p-4">
                        <CardList title="Popular Content"/>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 ">
                    <div className="rounded-lg bg-primary-foreground p-4">

                    </div>
                    <div className="rounded-lg bg-primary-foreground p-4">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;