export interface Wallpaper {
    url: string;
    name: string;
}

interface FullWallpaper extends Wallpaper {
    liked: boolean; 
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpapers();

    return wallpapers.filter((wallpaper) => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpapers();

    return wallpapers.filter((wallpaper) => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[]{
    const wallpapers = useWallpapers();

    return wallpapers.filter((wallpaper) => wallpaper.library);
}


export function useWallpapers(): FullWallpaper[]{
    return [{
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/lZfu4hrTQVCOeIaHfbBwoQ", 
        name: "Mountain",
        liked: true,
        suggested: true,
        library: false,
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/XBrm3va1Qs-z2-RGcW5JRA", 
        name: "Snow Mountain",    
        liked: true,
        suggested: false,
        library: true,    
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/l5mTUKatSGmCLhBOq32rWA", 
        name: "Coke",
        liked: true,
        suggested: true,
        library: false,     
    },{
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/y9f6upIKRYyKzVeMLLMDIg", 
        name: "Purse",
        liked: true,
        suggested: false,
        library: false,
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/w4P8R82qR7y86O00ApQNDw",
        name: "Samurai",
        liked: false,
        suggested: true,
        library: true,
    }, {
        url: 'https://ideogram.ai/assets/progressive-image/balanced/response/cJ776L7wR2O5WQybB4LXRQ',
        name: 'Red Samurai', 
        liked: true,
        suggested: true,
        library: true,
    }, 
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/O3hgBFS6RrGDb2LDnbFUNw",
        name: 'Mojnument',
        liked: false,
        suggested: true,
        library: false,
    }
]
}
