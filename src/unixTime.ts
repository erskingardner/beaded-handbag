export function nowInSeconds(): number {
    return Math.floor(new Date().getTime() / 1000);
}
export function nowInMilliseconds(): number {
    return new Date().getTime();
}
