export const grabImage = (url) => {
    const regex = /([^\/]+)\.(jpg|jpeg|png|gif)\?.*/;
    const match = url.match(regex);

    if (match) return match[1] + '.' + match[2];
    
    return null;
}