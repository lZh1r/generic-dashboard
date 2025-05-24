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
    displayName: "John Brown",
    updateUserInfo: (newInfo) => set((state) => ({
        ...state,
        username: newInfo.username,
        email: newInfo.email,
        workplace: newInfo.workplace,
        role: newInfo.role
    }))
}));