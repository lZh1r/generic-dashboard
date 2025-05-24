export function capitalize(str: string) {
    return String(str).charAt(0).toUpperCase() + str.slice(1);
}