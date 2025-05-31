export function capitalize(str: string) {
    return String(str).charAt(0).toUpperCase() + str.slice(1);
}

export enum ProjectCategories {
    CODING = "Coding",
    TECH = "Tech",
    AI = "AI",
    OTHER = "Other"
}