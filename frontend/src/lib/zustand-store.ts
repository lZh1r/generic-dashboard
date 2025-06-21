import {create} from "zustand/react";
import {userInfo} from "@/lib/user-info";

interface storeActions {
    updateUserInfo: (newInfo: userInfo) => void,
    updateUserStatus: (newStatus: string) => void,
    updateAccountVisibility: () => void,
}

interface AccountSettings {
    isPrivate: boolean
}

export const zustandStore = create<userInfo & storeActions & AccountSettings>((set) => ({
    username: "john",
    email: "john-verycool@email.com",
    workplace: "AI Dungeon",
    role: "admin",
    displayName: "John Brown",
    status: "Customizable status",
    isPrivate: false,
    updateUserInfo: (newInfo) => set((state) => ({
        ...state,
        username: newInfo.username,
        email: newInfo.email,
        workplace: newInfo.workplace,
        role: newInfo.role,
        displayName: newInfo.displayName
    })),
    updateUserStatus: (status) => set((state) => ({
        ...state,
        status: status
    })),
    updateAccountVisibility: () => set((state) => ({
        ...state,
        isPrivate: !state.isPrivate
    }))
}));