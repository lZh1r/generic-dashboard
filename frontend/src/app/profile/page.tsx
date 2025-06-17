"use client";

import {redirect} from "next/navigation";
import {zustandStore} from "@/lib/zustand-store";

function Page() {

    const username = zustandStore((state) => state.username);

    redirect(`/user/${username}`);

    return (
        <div>
        </div>
    );
}

export default Page;