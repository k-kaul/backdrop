import { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { DownloadPicture } from "./BottomSheet";
import ImageCard from "./ImageCard";
import { ThemedView } from "./ThemedView";

export default function SplitView({wallpapers}: {
    wallpapers: Wallpaper[];
}){

    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null)

    return <>
            <ThemedView style={styles.container}>
                <View style={styles.innerContainer}>
                    <FlatList 
                        data={wallpapers.filter((_,index) => index % 2 === 0)}
                        renderItem={({item}) => <View style={styles.imageContainer}>
                                <ImageCard 
                                    onPress={() => {
                                        setSelectedWallpaper(item)
                                    }} 
                                    wallpaper={item}/>
                            </View>}
                        keyExtractor={item => item.name}
                        />
                </View>
                <ThemedView style={styles.innerContainer}>
                    <FlatList 
                        data={wallpapers.filter((_,index) => index % 2 === 1)}
                        renderItem={({item}) => <View style={styles.imageContainer}>
                                    <ImageCard 
                                        onPress={() => {
                                            setSelectedWallpaper(item)
                                        }} 
                                        wallpaper={item}/>
                                </View>}
                        keyExtractor={item => item.name}
                        />
                </ThemedView>
            </ThemedView>
            {
                selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)}/>
            }
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        gap: 5
    }, 
    imageContainer: {
        paddingVertical: 10
    }
})