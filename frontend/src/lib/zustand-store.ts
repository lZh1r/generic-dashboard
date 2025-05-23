import {create} from "zustand/react";
import {userInfo} from "@/lib/user-info";

interface storeActions {
    updateUserInfo: (newInfo: userInfo) => void
}

export const zustandStore = create<userInfo & storeActions>((set) => ({
    username: "john",
    email: "john-verycool@email.com",
    workplace: "AI Dungeon",
    role: "admin",
    updateUserInfo: (newInfo) => set({
        username: newInfo.username,
        email: newInfo.username,
        workplace: newInfo.workplace,
        role: newInfo.role
    })
}));