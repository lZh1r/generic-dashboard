import {create} from "zustand/react";
import {userInfo} from "@/lib/user-info";

interface storeActions {
    updateUserInfo: (newInfo: userInfo) => void,
    updateUserStatus: (newStatus: string) => void
}

export const zustandStore = create<userInfo & storeActions>((set) => ({
    username: "john",
    email: "john-verycool@email.com",
    workplace: "AI Dungeon",
    role: "admin",
    displayName: "John Brown",
    status: "Customizable status",
    updateUserInfo: (newInfo) => set((state) => ({
        ...state,
        username: newInfo.username,
        email: newInfo.email,
        workplace: newInfo.workplace,
        role: newInfo.role,
    })),
    updateUserStatus: (status) => set((state) => ({
        ...state,
        status: status
    }))
}));