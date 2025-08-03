import { DownloadPicture } from "@/components/BottomSheet";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout(){
    const wallpapers = useWallpapers();
        
    return (
        <GestureHandlerRootView>
            <DownloadPicture wallpaper={wallpapers[0]} onClose={(()=> {})} />
            <Stack screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="(tabs)" options={{
                    // headerShown: true,
                    // headerTitle: 'Account Info',
                    // headerBackTitle: 'Back'
                }}/>
            </Stack>
        </GestureHandlerRootView>
    )
}