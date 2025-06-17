import {zustandStore} from "@/lib/zustand-store";
import {useParams} from "next/navigation";

export function useLoggedIn() {
    const username = zustandStore((state) => state.username);
    const params = useParams<{username: string}>();
    return username === params.username;
}