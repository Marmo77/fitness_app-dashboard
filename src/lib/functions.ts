// copy to clipboard
export const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
}

export const CurrentTime = async () => {

    return new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
}


export const UserIsAdmin = (userID: string | null, adminID: string): boolean => {
    if (userID === adminID) {
        return true;
    }
    return false;
}